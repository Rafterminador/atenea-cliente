import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import RestorePassword from "./pages/RestorePassword";
import Home from "./pages/Home";
import Account from "./pages/Account";
import VideoTutorials from "./pages/VideoTutorials";
import ResetPassword from "./pages/ResetPassword";
import Grades from "./pages/Grades";
import NewGrade from "./pages/NewGrade";
import UpdateGrade from "./pages/UpdateGrade";
import EditGrade from "./pages/EditGrade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas para la S01 - Autenticacion */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro/usuario" element={<RegistroUsuario />} />
        <Route path="/about" element={<About />} />
        <Route path="/olvide-password" element={<OlvidePassword />} />
        <Route path="/verificacion" element={<Check />} />
        <Route path="/restablecer-password" element={<RestorePassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cuenta" element={<Account />} />
        <Route path="/videotutoriales" element={<VideoTutorials />} />
        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/restore/password" element={<OlvidePassword />} />
        <Route path="/restore/check/email" element={<Check />} />
        <Route path="/reset/password" element={<ResetPassword />} />

        {/* rutas para la S02 - Administrativo */}
        <Route path="/grades/" element={<Grades />} />
        <Route path="/grades/create" element={<NewGrade />} />
        <Route path="/grades/update/:id" element={<UpdateGrade />} />
        <Route path="/grades/update/:id/edit" element={<EditGrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
