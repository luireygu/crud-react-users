import { useEffect, useState } from "react";
import api from "../services/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get("/users");

      setUsers(res.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      alert("No fue posible cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "¿Está seguro de eliminar este usuario?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${id}`);

      alert("Usuario eliminado correctamente");

      getUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);

      alert("No fue posible eliminar el usuario");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    loading,
    getUsers,
    deleteUser,
  };
};