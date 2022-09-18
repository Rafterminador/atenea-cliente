import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import { About } from "./pages/About";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import RestorePassword from "./pages/RestorePassword";
import Grades from "./pages/Grades";
import NewGrade from "./pages/NewGrade";
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
        <Route path="/grades/" element={<Grades />} />
        <Route path="/grades/create" element={<NewGrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
