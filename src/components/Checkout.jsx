import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";
import { useForm } from "react-hook-form";

export const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [process, setProcess] = useState(false);
  const { cart, totalPrice, clear } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const finalizarCompra = (data) => {
    setProcess(true);
    //creo la orden
    let orden = {
      comprador: {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
      },
      compras: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };
    //creo la coleccion orders
    const ventas = collection(db, "orders");
    //agregar un doc nuevo a orders
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error))
      .finally(() => setProcess(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div>
          <h2>Muchas Gracias por tu compra.</h2>
          <h4>Su orden es: {orderId}</h4>
          <Link to="/" className="btn btn-dark">
            Volver a Home
          </Link>
        </div>
      ) : (
        <div>
          <h1>Complete por favor los datos</h1>
          <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit(finalizarCompra)}>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              className="form-control"
              {...register("name", { required: true, minLength: 3, maxLength: 10, validate: { notOnlySpace: (value) => value.trim().length > 0 } })}
            />
            {errors?.name?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo Nombre</span>}
            {errors?.name?.type === "minLength" && <span style={{ color: "red" }}>EL Nombre debe ser mayor o igual a 3 caracteres.</span>}
            {errors?.name?.type === "maxLength" && <span style={{ color: "red" }}>EL Nombre debe ser menor de 10 caracteres.</span>}
            {errors?.name?.type === "notOnlySpace" && <span style={{ color: "red" }}>El Nombre no debe contener solo espacio.</span>}

            <input
              type="text"
              placeholder="Ingrese su apellido"
              name="lastname"
              className="form-control"
              {...register("lastname", { required: true, minLength: 3, maxLength: 10, validate: { notOnlySpace: (value) => value.trim().length > 0 } })}
            />
            {errors?.lastname?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo con su Apellido</span>}
            {errors?.lastname?.type === "minLength" && <span style={{ color: "red" }}>EL Apellido debe ser mayor o igual a 3 caracteres.</span>}
            {errors?.lastname?.type === "maxLength" && <span style={{ color: "red" }}>EL Apellido debe ser menor de 10 caracteres.</span>}
            {errors?.lastname?.type === "notOnlySpace" && <span style={{ color: "red" }}>El Apellido no debe contener solo espacio.</span>}

            <input type="email" placeholder="Ingrese su correo" name="email" className="form-control" {...register("email", { required: true })} />
            {errors?.email?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo del email</span>}

            <input
              type="email"
              placeholder="Repita su correo"
              name="email2"
              className="form-control"
              {...register("secondemail", { required: true, validate: { equalsMails: (email2) => email2 === getValues().email } })}
            />
            {errors?.secondemail?.type === "required" && <sapn style={{ color: "red" }}>Por favor complete el campo del email</sapn>}
            {errors?.secondemail?.type === "equalsMails" && <sapn style={{ color: "red" }}>Los correos deben ser iguales</sapn>}

            <button type="submit" className="btn btn-success m-2" disabled={process}>
              {process ? "Procesando Orden" : "Generar Orden"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};
