import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import api from "../services/api";

function CreateUser() {
  const navigate = useNavigate();

  const createUser = async (data) => {
    try {
      await api.post("/users", data);

      alert("Usuario creado correctamente");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Ocurrió un error al crear el usuario");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear Usuario</h2>

      <UserForm onSubmit={createUser} />
    </div>
  );
}

export default CreateUser;