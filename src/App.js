import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { RegistroUsuario } from "./pages/RegistroUsuario";
import OlvidePassword from "./pages/OlvidePassword";
import Check from "./pages/Check";
import Home from "./pages/Home";
import Account from "./pages/Account";
import VideoTutorials from "./pages/VideoTutorials";
import ResetPassword from "./pages/ResetPassword";
import Grades from "./pages/Grades";
import NewGrade from "./pages/NewGrade";
import UpdateGrade from "./pages/UpdateGrade";
import EditGrade from "./pages/EditGrade";
import VerAlumno from "./pages/VerAlumno";
import AlumnoAccount from "./pages/AlumnoAccount";
import EditAlumnoAccount from "./pages/EditAlumnoAccount";
import AlumnoProfile from "./pages/AlumnoProfile";
import AllAlumnos from "./pages/AllAlumnos";
import Boletin from "./pages/Boletin";
import ControllerProving from "./pages/ControllerProving";
import GradesAssigned from "./pages/GradesAssigned";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Course from "./pages/Course";
import Student from "./pages/Student";
import NewActivity from "./pages/NewActivity";
import EditActividy from "./pages/EditActivity";
import Notes from "./pages/Notes";
import PrivateRouteDirector from "./utils/PrivateRouteDirector";
import Teachers from "./pages/PanelTeachers";
import AccountPage from "./components/AccountPage";
import NuevosDocentes from "./pages/NewTeachers";
import DocentesActivos from "./pages/DocentesActivos";
import DocentesInactivos from "./pages/DocentesInactivos";


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
        <Route path="/reset/password/*" element={<ResetPassword />} />

        <Route element={<PrivateRouteDirector />}>
          {/* rutas para la S02 - Administrativo */}
          <Route path="/grades/" element={<Grades />} />
          <Route path="/grades/create" element={<NewGrade />} />
          <Route path="/grades/update/:id" element={<UpdateGrade />} />
          <Route path="/grades/update/:id/edit" element={<EditGrade />} />

          <Route path="/home" element={<Home />} />
          <Route path="/cuenta" element={<Account />} />
          <Route path="/tutoriales" element={<VideoTutorials />} />

          <Route path="/ver/alumno" element={<VerAlumno />} />
          <Route path="/cuenta/alumno" element={<AlumnoAccount />} />
          <Route path="/editar/alumno" element={<EditAlumnoAccount />} />
          <Route path="/perfil/alumno" element={<AlumnoProfile />} />
          <Route path="/alumnos/completos" element={<AllAlumnos />} />
          <Route path="/boletin" element={<Boletin />} />

          {/* Docentes */}
    
          <Route path="/docentes" element={<Teachers />} />
          <Route path="/cuenta/docente" element={<AccountPage />} />
          <Route path="/nuevos-docentes" element={<NuevosDocentes />} />
          <Route path="/docentes-activos" element={<DocentesActivos />} />
          <Route path="/docentes-inactivos" element={<DocentesInactivos />} />

          <Route path="/backend" element={<ControllerProving />} />
          <Route path="/grades/teacher/:id" element={<GradesAssigned />} />
          <Route path="/grades/teacher/:id/courses" element={<Courses />} />
          <Route
            path="/grades/teacher/:id/courses/students"
            element={<Students />}
          />
          <Route
            path="/grades/teacher/:id/courses/:courseId"
            element={<Course />}
          />

        </ Route >

        <Route path="/grades/teacher/:id" element={<GradesAssigned />} />
        <Route path="/grades/teacher/:id/courses" element={<Courses />} />
        <Route
          path="/grades/teacher/:id/courses/students"
          element={<Students />}
        />
        <Route
          path="/grades/teacher/:id/courses/students/:id"
          element={<Student />}
        />
        <Route
          path="/grades/teacher/:id/courses/students/:id/notes"
          element={<Notes />}
        />
        <Route
          path="/grades/teacher/:id/courses/:courseId"
          element={<Course />}
        />
        <Route
          path="/grades/teacher/:id/courses/:courseId/new/activity"
          element={<NewActivity />}
        />
        <Route
          path="/grades/teacher/:id/courses/:courseId/activity/edit"
          element={<EditActividy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
