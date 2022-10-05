import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import ResetPassword from "./pages/ResetPassword";
import Grades from "./pages/Grades";
import NewGrade from "./pages/NewGrade";
import UpdateGrade from "./pages/UpdateGrade";
import EditGrade from "./pages/EditGrade";
import VerAlumno from "./pages/VerAlumno"
import AlumnoAccount from "./pages/AlumnoAccount"
import EditAlumnoAccount from "./pages/EditAlumnoAccount"
import AlumnoProfile from "./pages/AlumnoProfile"
import AllAlumnos from "./pages/AllAlumnos";
import Boletin from "./pages/Boletin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas para la S01 - Autenticacion */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/restore/password" element={<OlvidePassword />} />
        <Route path="/restore/check/email" element={<Check />} />
        <Route path="/reset/password" element={<ResetPassword />} />
        

        {/* rutas para la S02 - Administrativo */}
        <Route path="/grades/" element={<Grades />} />
        <Route path="/grades/create" element={<NewGrade />} />
        <Route path="/grades/update/:id" element={<UpdateGrade />} />
        <Route path="/grades/update/:id/edit" element={<EditGrade />} />
        <Route path="/ver/alumno" element={<VerAlumno />} />
        <Route path="/cuenta/alumno" element={<AlumnoAccount />} />
        <Route path="/editar/alumno" element={<EditAlumnoAccount />} />
        <Route path="/perfil/alumno" element={<AlumnoProfile />} />
        <Route path="/alumnos/completos" element={<AllAlumnos />} />
        <Route path="/boletin" element={<Boletin />} />

      </Routes>
    </BrowserRouter>
  );
}





export default App;
