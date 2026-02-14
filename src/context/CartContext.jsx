import { createContext, useEffect, useState } from "react";

// crear contexto
export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
//crear el proveedor
export const CartProvider = ({ children }) => {
  // estado a controlar, es decir, estado del carrito de compra
  const [cart, setCart] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  //funciones(herramientas)

  //añadir un item al carrito
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      //si item excite debo modificar el quantity del item
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            return prod;
          }
        }),
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  //limpiar carrito de compra
  const clear = () => {
    setCart([]);
  };

  //Eliminar un item del carrito
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //Retornar si existe el item en el carrito, con some verificamos el id, si lo encuentra vuelve un True
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // funcion total a pagar
  const totalPrice = () => {
    return cart.reduce(
      (total, product) => (total += product.price * product.quantity),
      0,
    );
  };

  //funcion que sume cantidades
  const cartQuantity = () => {
    return cart.reduce((total, product) => (total += product.quantity), 0);
  };

  //funcion
  const itemQuantity = (id) => {
    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        removeItem,
        cartQuantity,
        totalPrice,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
