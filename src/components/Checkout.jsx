import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";
import { useForm } from "react-hook-form";
import "./Checkout.css";

// ── Reglas reutilizables ──────────────────────────────────────────────────────
const NAME_RULES = {
  required: "Este campo es obligatorio",
  minLength: { value: 3, message: "Mínimo 3 caracteres" },
  maxLength: { value: 10, message: "Máximo 10 caracteres" },
  pattern: {
    value: /^\S+$/, // no permite espacios en ninguna posición
    message: "No se permiten espacios",
  },
};

export const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [process, setProcess] = useState(false);
  const { cart, totalPrice, clear } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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

    const ventas = collection(db, "orders");

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
    <div className="checkout-wrapper">
      {orderId ? (
        /* ── Pantalla de éxito ── */
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h2 className="success-title">¡COMPRA EXITOSA!</h2>
          <p className="success-message">Gracias por tu compra</p>
          <div className="order-id-box">
            <span className="order-label">Tu código de orden:</span>
            <span className="order-code">{orderId}</span>
          </div>
          <Link to="/" className="btn-home">
            VOLVER AL INICIO
          </Link>
        </div>
      ) : (
        /* ── Formulario ── */
        <div className="checkout-form-container">
          <div className="checkout-header">
            <h1 className="checkout-title">FINALIZAR COMPRA</h1>
            <p className="checkout-subtitle">Complete sus datos para continuar</p>
          </div>

          <div className="checkout-content">
            {/* Resumen de compra */}
            <div className="order-summary">
              <h3 className="summary-title">RESUMEN DE COMPRA</h3>
              <div className="summary-items">
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-qty">x{item.quantity}</span>
                    <span className="summary-item-price">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total-row">
                <span className="summary-total-label">TOTAL:</span>
                <span className="summary-total-amount">${totalPrice()}</span>
              </div>
            </div>

            {/* ── Formulario con React Hook Form ── */}
            <form className="checkout-form" onSubmit={handleSubmit(finalizarCompra)} noValidate>
              {/* NOMBRE */}
              <div className="form-group">
                <label className="form-label">NOMBRE</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  disabled={process}
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                  {...register("name", NAME_RULES)}
                />
                {errors.name && <span className="field-error">⚠ {errors.name.message}</span>}
              </div>

              {/* APELLIDO */}
              <div className="form-group">
                <label className="form-label">APELLIDO</label>
                <input
                  type="text"
                  placeholder="Ingrese su apellido"
                  disabled={process}
                  className={`form-input ${errors.lastname ? "input-error" : ""}`}
                  {...register("lastname", NAME_RULES)}
                />
                {errors.lastname && <span className="field-error">⚠ {errors.lastname.message}</span>}
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label className="form-label">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  disabled={process}
                  className={`form-input ${errors.email ? "input-error" : ""}`}
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo inválido",
                    },
                  })}
                />
                {errors.email && <span className="field-error">⚠ {errors.email.message}</span>}
              </div>

              {/* CONFIRMAR EMAIL */}
              <div className="form-group">
                <label className="form-label">CONFIRMAR CORREO</label>
                <input
                  type="email"
                  placeholder="Repita su correo"
                  disabled={process}
                  className={`form-input ${errors.email2 ? "input-error" : ""}`}
                  {...register("email2", {
                    required: "Por favor confirme su correo",
                    validate: (val) => val === watch("email") || "Los correos no coinciden",
                  })}
                />
                {errors.email2 && <span className="field-error">⚠ {errors.email2.message}</span>}
              </div>

              <button type="submit" className={`btn-submit ${process ? "processing" : ""}`} disabled={process}>
                {process ? (
                  <>
                    <span className="spinner"></span>PROCESANDO...
                  </>
                ) : (
                  "CONFIRMAR COMPRA"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

    // <>
    //   {orderId ? (
    //     <div>
    //       <h2>Muchas Gracias por tu compra.</h2>
    //       <h4>Su orden es: {orderId}</h4>
    //       <Link to="/" className="btn btn-dark">
    //         Volver a Home
    //       </Link>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1>Complete por favor los datos</h1>
    //       <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit(finalizarCompra)}>
    //         <input
    //           type="text"
    //           placeholder="Ingrese su nombre"
    //           name="name"
    //           className="form-control"
    //           {...register("name", { required: true, minLength: 3, maxLength: 10, validate: { notOnlySpace: (value) => value.trim().length > 0 } })}
    //         />
    //         {errors?.name?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo Nombre</span>}
    //         {errors?.name?.type === "minLength" && <span style={{ color: "red" }}>EL Nombre debe ser mayor o igual a 3 caracteres.</span>}
    //         {errors?.name?.type === "maxLength" && <span style={{ color: "red" }}>EL Nombre debe ser menor de 10 caracteres.</span>}
    //         {errors?.name?.type === "notOnlySpace" && <span style={{ color: "red" }}>El Nombre no debe contener solo espacio.</span>}

    //         <input
    //           type="text"
    //           placeholder="Ingrese su apellido"
    //           name="lastname"
    //           className="form-control"
    //           {...register("lastname", { required: true, minLength: 3, maxLength: 10, validate: { notOnlySpace: (value) => value.trim().length > 0 } })}
    //         />
    //         {errors?.lastname?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo con su Apellido</span>}
    //         {errors?.lastname?.type === "minLength" && <span style={{ color: "red" }}>EL Apellido debe ser mayor o igual a 3 caracteres.</span>}
    //         {errors?.lastname?.type === "maxLength" && <span style={{ color: "red" }}>EL Apellido debe ser menor de 10 caracteres.</span>}
    //         {errors?.lastname?.type === "notOnlySpace" && <span style={{ color: "red" }}>El Apellido no debe contener solo espacio.</span>}

    //         <input type="email" placeholder="Ingrese su correo" name="email" className="form-control" {...register("email", { required: true })} />
    //         {errors?.email?.type === "required" && <span style={{ color: "red" }}>Por favor complete el campo del email</span>}

    //         <input
    //           type="email"
    //           placeholder="Repita su correo"
    //           name="email2"
    //           className="form-control"
    //           {...register("secondemail", { required: true, validate: { equalsMails: (email2) => email2 === getValues().email } })}
    //         />
    //         {errors?.secondemail?.type === "required" && <sapn style={{ color: "red" }}>Por favor complete el campo del email</sapn>}
    //         {errors?.secondemail?.type === "equalsMails" && <sapn style={{ color: "red" }}>Los correos deben ser iguales</sapn>}

    //         <button type="submit" className="btn btn-success m-2" disabled={process}>
    //           {process ? "Procesando Orden" : "Generar Orden"}
    //         </button>
    //       </form>
    //     </div>
    //   )}
    // </>
  );
};
