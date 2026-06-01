import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/"
          element={<Users />}
        />

        <Route
          path="/create"
          element={<CreateUser />}
        />

        <Route
          path="/edit/:id"
          element={<EditUser />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;