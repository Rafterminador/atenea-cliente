import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import { About } from "./pages/About";
import { VerAlumno } from "./pages/VerAlumno"
import { AlumnoAccount } from "./pages/AlumnoAccount";
import { EditAlumnoAccount } from "./pages/EditAlumnoAccount";
import AlumnoProfile from "./pages/AlumnoProfile";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import RestorePassword from "./pages/RestorePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro/usuario" element={<RegistroUsuario />} />
        <Route path="/about" element={<About />} />
        <Route path="/olvide-password" element={<OlvidePassword />} />
        <Route path="/verificacion" element={<Check />} />
        <Route path="/restablecer-password" element={<RestorePassword />} />
        <Route path="/ver/alumno" element={<VerAlumno />} />
        <Route path="/cuenta/alumno" element={<AlumnoAccount />} />
        <Route path="/editar/alumno" element={<EditAlumnoAccount />} />
        <Route path="/perfil/alumno" element={<AlumnoProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
