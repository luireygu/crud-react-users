import { Link } from "react-router-dom";

function UserList({ users, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="alert alert-info text-center">
        No hay usuarios registrados.
      </div>
    );
  }

  return (
    <div className="table-responsive">

      <table className="table table-striped table-hover shadow">

        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>

              <td>{user.email}</td>

              <td className="text-center">

                <Link
                  className="btn btn-warning btn-sm me-2"
                  to={`/edit/${user.id}`}
                >
                  Editar
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(user.id)}
                >
                  Eliminar
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default UserList;