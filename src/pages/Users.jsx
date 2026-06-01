import { Link } from "react-router-dom";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";

function Users() {
  const { users, loading, deleteUser } = useUsers();

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between mb-3">
        <h2>Usuarios</h2>

        <Link
          className="btn btn-success"
          to="/create"
        >
          Nuevo Usuario
        </Link>
      </div>

      <UserList
        users={users}
        onDelete={deleteUser}
      />

    </div>
  );
}

export default Users;