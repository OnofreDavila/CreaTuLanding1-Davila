import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import "./ItemListContainer.css";

export const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos");

    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setData(list);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [type]);

  if (error) {
    return <p>Hubo un error, intente mas tarde.</p>;
  }

  return (
    <>
      {loading ? (
        <Loader text={type ? "Cargando categorías" : "Cargando productos"} />
      ) : (
        <div className="item-list-wrapper">
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                {mensaje}
                {type && <span className="category-highlight">{type}</span>}
              </h1>
              {!type && <p className="hero-subtitle">Streetwear que desafía lo convencional</p>}
            </div>
            <div className="hero-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};
