import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-4 mb-4">
          Sistema CRUD de Usuarios
        </h1>

        <p className="lead">
          Aplicación desarrollada con React, Vite,
          Bootstrap, Axios y Docker.
        </p>

        <p>
          Este proyecto permite realizar operaciones
          CRUD (Crear, Consultar, Actualizar y Eliminar)
          consumiendo una API REST.
        </p>

        <Link
          to="/"
          className="btn btn-primary btn-lg mt-3"
        >
          Ir a Gestión de Usuarios
        </Link>

      </div>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4>Crear</h4>
              <p>Registrar nuevos usuarios.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4>Actualizar</h4>
              <p>Modificar información existente.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4>Eliminar</h4>
              <p>Gestionar usuarios registrados.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;