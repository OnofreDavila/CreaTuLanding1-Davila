export const Checkout = () => {
  return (
    <>
      <div>
        <h1></h1>
        <form className="p-4 border rounded shadow-sm bg-light">
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            className="form-control"
          />

          <input
            type="text"
            placeholder="Ingrese su apellido"
            name="lastname"
            className="form-control"
          />

          <input
            type="email"
            placeholder="Ingrese su correo"
            name="email"
            className="form-control"
          />

          <input
            type="email"
            placeholder="Repita su correo"
            name="email2"
            className="form-control"
          />

          <button type="submit" className="btn btn-success m-2">
            Generar Orden
          </button>
        </form>
      </div>
    </>
  );
};
