import { useState } from "react";

function UserItem({ user, deleteUser, updateUser }) {
  const [editando, setEditando] = useState(false);

  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [ciudad, setCiudad] = useState(user.ciudad);

  const guardarCambios = () => {
    updateUser({
      ...user,
      nombre,
      email,
      ciudad,
    });

    setEditando(false);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {editando ? (
        <>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <br />
          <br />
          <button onClick={guardarCambios}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <h3>Nombre: {user.nombre}</h3>
          <p>Email: {user.email}</p>
          <p>Ciudad: {user.ciudad}</p>
          <button className="btn-general" onClick={() => setEditando(true)}>
            Editar
          </button>
          <button className="btn-general"
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: "10px" }}>
            Eliminar
          </button>
        </>
      )}
    </div>
  );
}

export default UserItem;