import { useContext, useState } from "react";
import { CartContext} from '../context/CartContext';
import { addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { EmptyCart} from './EmptyCart'


export const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [validMail, setValidMail] = useState('')
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState(null)

  const {cart, totalPrice, clear} = useContext(CartContext)

  const buyerData = (e)=> {
    setBuyer(
      {
        ...buyer,
        [e.target.name]: e.target.value
      }
    )
  }

  const finalizarCompra = (e) =>{
    e.preventDefault()

    //verificacion del form
    if(!buyer.name || !buyer.lastname || !buyer.email || !validMail){
      setError('Por favor complete los campos')
    } else if( buyer.email !== validMail){
      setError('Los correos no coinciden')
    } else {
      setError(null)
      //creo la orden
      let orden = {
      comprador: buyer,
      compras: cart,
      total: totalPrice(),
      date: serverTimestamp()
      }
      //creo la coleccion orders
      const ventas = collection(db, 'orders')
      //agregar un doc nuevo a orders
      addDoc(ventas, orden)
        .then((res)=>{
          setOrderId(res.id)
          clear()
        })
        .catch((error)=>console.log(error))
        .finally()
    }
  }

  if(!cart.length && !orderId){
    return <EmptyCart/>
  }

  return (
    <>
      {
        orderId 
        ? <div>
            <h2>Muchas Gracias por tu compra.</h2>
            <h4>Su orden es: {orderId}</h4>
            <Link to='/' className="btn btn-dark">Volver a Home</Link>
          </div>
        :<div>
            <h1>Complete por favor los datos</h1>
            {error && <span style={{color:'red', fontWeight:'bold'}}>{error}</span>}
            <form className="p-4 border rounded shadow-sm bg-light" onSubmit={finalizarCompra}>
              <input type="text" placeholder="Ingrese su nombre" name="name" className="form-control" onChange={buyerData}/>
              <input type="text" placeholder="Ingrese su apellido" name="lastname" className="form-control" onChange={buyerData}/>
              <input type="email" placeholder="Ingrese su correo" name="email" className="form-control" onChange={buyerData}/>
              <input type="email" placeholder="Repita su correo" name="email2" className="form-control" onChange={(e)=>setValidMail(e.target.value)}/>
              <button type="submit" className="btn btn-success m-2">Generar Orden</button>
            </form>
          </div>
      }
    </>
  );
};
