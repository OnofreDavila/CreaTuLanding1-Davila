import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(null);

  const { id } = useParams();

  //FIREBASE
  useEffect(() => {
    //Cargar el Spinner
    setLoading(true);

    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({
            id: res.id,
            ...res.data(),
          });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (invalid) {
    return (
      <div>
        <h2>El producto no existe! 🚧</h2>
        <Link className="btn btn-dark" to="/">
          Volver a Home
        </Link>
      </div>
    );
  }

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
