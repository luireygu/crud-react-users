import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import api from "../services/api";

function EditUser() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  const updateUser = async (data) => {
    await api.put(`/users/${id}`, data);

    navigate("/");
  };

  if (!user) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Editar Usuario</h2>

      <UserForm
        initialData={user}
        onSubmit={updateUser}
      />
    </div>
  );
}

export default EditUser;