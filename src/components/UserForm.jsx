import { useState } from "react";

function UserForm({ initialData, onSubmit }) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Nombre
    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (name.trim().length < 3) {
      newErrors.name = "El nombre debe tener mínimo 3 caracteres";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Ingrese un correo válido";
    }

    // Password
    if (!initialData) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

      if (!password) {
        newErrors.password = "La contraseña es obligatoria";
      } else if (!passwordRegex.test(password)) {
        newErrors.password =
          "Debe tener mínimo 6 caracteres, una mayúscula, una minúscula y un número";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Nombre */}
      <div className="mb-3">
        <label className="form-label">
          Nombre
        </label>

        <input
          type="text"
          className={`form-control ${
            errors.name ? "is-invalid" : ""
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && (
          <div className="invalid-feedback">
            {errors.name}
          </div>
        )}
      </div>

      {/* Correo */}
      <div className="mb-3">
        <label className="form-label">
          Correo electrónico
        </label>

        <input
          type="email"
          className={`form-control ${
            errors.email ? "is-invalid" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && (
          <div className="invalid-feedback">
            {errors.email}
          </div>
        )}
      </div>

      {/* Contraseña */}
      <div className="mb-3">
        <label className="form-label">
          Contraseña
        </label>

        <input
          type="password"
          className={`form-control ${
            errors.password ? "is-invalid" : ""
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors.password && (
          <div className="invalid-feedback">
            {errors.password}
          </div>
        )}

        <div className="form-text">
          Mínimo 6 caracteres, una mayúscula,
          una minúscula y un número.
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Guardar
      </button>

    </form>
  );
}

export default UserForm;