import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const agregarProducto = (producto) => {

    const existe = cart.find((item) => item.id === producto.id);

    if (existe) {

      setCart(

        cart.map((item) =>

          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item

        )

      );

    } else {

      setCart([

        ...cart,

        {
          ...producto,
          cantidad: 1,
        },

      ]);

    }

  };

  const aumentarCantidad = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id

          ? { ...item, cantidad: item.cantidad + 1 }

          : item

      )

    );

  };

  const disminuirCantidad = (id) => {

    setCart(

      cart
        .map((item) =>

          item.id === id

            ? { ...item, cantidad: item.cantidad - 1 }

            : item

        )
        .filter((item) => item.cantidad > 0)

    );

  };

  const eliminarProducto = (id) => {

    setCart(

      cart.filter((item) => item.id !== id)

    );

  };

  const vaciarCarrito = () => {

    setCart([]);

  };

  const total = cart.reduce(

    (acc, item) =>

      acc + item.precio * item.cantidad,

    0

  );

  const cantidadTotal = cart.reduce(

    (acc, item) =>

      acc + item.cantidad,

    0

  );

  return (

    <CartContext.Provider

      value={{

        cart,

        agregarProducto,

        aumentarCantidad,

        disminuirCantidad,

        eliminarProducto,

        vaciarCarrito,

        total,

        cantidadTotal,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export const useCart = () => useContext(CartContext);