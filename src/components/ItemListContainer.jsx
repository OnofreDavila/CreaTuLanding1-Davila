import React, { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data";
import { SiDatocms } from "react-icons/si";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Cargar el Spinner
    setLoading(true);

    //Pedir datos
    getProducts() //retorna promesa
      .then((resolve) => {
        if (type) {
          //si type existe debemos filtrar por el type osea la categoria
          setData(resolve.filter((prod) => prod.category === type)); //type normalizado
        } else {
          setData(resolve); //insertamos el array de data en el useState data
        }
      })
      .catch((error) => console.log(error)) //atrapar el error con el catch
      .finally(() => setLoading(false));
  }, [type]); // se usa una sola vez al inicio para traer el getProducts y por cada cambvio de type(categoria)

  return (
    <>
      {loading ? (
        <Loader text={type ? "Cargando categorias" : "Cargando productos"} />
      ) : (
        <div className="container bg-secondary-subtle d-flex flex-column">
          <h1 className="text-center">
            {mensaje}
            {type && (
              <span style={{ textTransform: "capitalize" }}>{type}</span>
            )}
          </h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};
