import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import Grades from "./pages/Grades";
import NewGrade from "./pages/NewGrade";
import UpdateGrade from "./pages/UpdateGrade";
import EditGrade from "./pages/EditGrade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/reset_password" element={<OlvidePassword />} />
        <Route path="/check_email" element={<Check />} />

        <Route path="/grades/" element={<Grades />} />
        <Route path="/grades/create" element={<NewGrade />} />
        <Route path="/grades/update/:id" element={<UpdateGrade />} />
        <Route path="/grades/update/:id/edit" element={<EditGrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
