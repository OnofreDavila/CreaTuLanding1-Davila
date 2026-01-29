import React, { useEffect, useState } from "react";
import { getOneProduct } from "../asyncMock/data";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    //Cargar el Spinner
    setLoading(true);

    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader text="Cargando Detalles..." />
      ) : (
        <div>
          <ItemDetail detail={detail} />
        </div>
      )}
    </>
  );
};
