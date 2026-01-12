import React, { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import { SiDatocms } from "react-icons/si";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //Pedir datos
    getProducts() //retorna promesa
      .then((resolve) => {
        //usamos el then para cuando se hace efectiva la promesa
        setData(resolve); //insertamos el array de data en el useState data
      })
      .catch((error) => console.log(error)); //atrapar el error con el catch
  }, []); // se usa una sola vez al inicio para traer el getProducts

  return (
    <div className="container bg-secondary-subtle d-flex justify-content-center">
      <ItemList data={data} />
    </div>
  );
};
