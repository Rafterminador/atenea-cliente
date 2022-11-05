import React from "react";
import Email from "../../src/assets/images/mail.svg";
import Tel from "../../src/assets/images/tel.svg";
import Confirmation from "../assets/images/confirmar-docente.svg";
import Deshabilitar from "../assets/images/deshabilitar-docente.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlertButton } from "../utils/AlertButton";
import { GetOneTeacherByID, updateRol, DisableTeacher, EnableTeacher } from "../services/controllerDirector";
import { useState } from "react";
import Retroceder from "./Retroceder";
import Grades from "./Grades";
//import Button from "./Button";
import Spinner from "./Spinner";
const Swal = require("sweetalert2");

const AccountPage = () => {
  const params = useParams();
  const [cargando, setCargando] = useState(true);
  const [teacher, setTeacher] = useState({});
  const [grades, setGrades] = useState([]);
  const [rol, setRol] = useState("hidden");
  const [visibleButtom, setVisibleButtom] = useState("");
  useEffect(() => {
    const getOneTeacherByID = async () => {
      try {
        let response = await GetOneTeacherByID(params.id);
        setTeacher(response.body);
        setGrades(response.body.grades);
        if (response.body.rol === "") {
          setRol("");
          setVisibleButtom("hidden");
        }
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneTeacherByID();
  });

  const handleEdit = async (e) => {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Confirmar docente?",
        "Sí",
        "Cancelar",
        Confirmation
      )
    ).then((result) => {
      if (result.isConfirmed) {
        UpdateRolDocente();

        // navigate('/grades')
        // Swal.fire('Saved!', '', 'success')
      }
    });
  };

  const UpdateRolDocente = async () => {
    console.log("entro en updateRolDocente");
    await updateRol(params.id, "docente");

    Swal.fire(AlertButton.dataAlertSuccess("docente confirmado"));
  };

  const EnableDocente = async (e) => {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Deshabilitar docente?",
        "Sí",
        "Cancelar",
        Deshabilitar
      )
    ).then((result) => {
      if (result.isConfirmed) {
        DeshabilitarDocente();

        // navigate('/grades')
        // Swal.fire('Saved!', '', 'success')
      }
    });
  };

  const DeshabilitarDocente = async () => {
    console.log("entro en updateRolDocente");
    await DisableTeacher(params.id);

    Swal.fire(AlertButton.dataAlertSuccess("docente deshabilitado"));
  };

  const InableDocente = async (e) => {
    e.preventDefault();
    Swal.fire(
      AlertButton.dataAlertUnBotonMorado(
        "¿Habilitar docente?",
        "Sí",
        "Cancelar",
        Confirmation
      )
    ).then((result) => {
      if (result.isConfirmed) {
        HabilitarDocente();

        // navigate('/grades')
        // Swal.fire('Saved!', '', 'success')
      }
    });
  };

  const HabilitarDocente = async () => {
    console.log("entro en updateRolDocente");
    await EnableTeacher(params.id);

    Swal.fire(AlertButton.dataAlertSuccess("docente habilitado"));
  };

  return (
    <>
      <Retroceder text={teacher.displayName} />
      {!cargando ? (
        <>
          <div className={`m-6 flex space-x-2 ${rol}`}>
            <p className=" text-[16px]">Se unió el:</p>
            <p className="font-bold text-[16px]">{teacher.createdAt}</p>
          </div>

          <div className="m-6 rounded-xl bordeblurd">
            <div className="p-8">
              <p className="font-bold text-[#4D3483] text-lg mb-2">Contacto</p>
              <div className="flex space-x-5 mb-2">
                <img src={Email} alt="correo" />
                <p>{teacher.email}</p>
              </div>

              <div className="flex space-x-5">
                <img src={Tel} alt="telefono" />
                <p>{teacher.phoneNumber}</p>
              </div>
            </div>
          </div>

          <div className="m-6 rounded-xl bordeblurd">
            <div className="p-8">
              <p className="font-bold text-[#4D3483] text-lg mb-2">
                Grados a Cargo
              </p>

              {grades.length ? (
                grades.map((grado) => (
                  <Grades key={grado.id} name={grado.grade_name} />
                ))
              ) : (
                <p className="text-[#7B7B7B]">Ninguno</p>
              )}
            </div>
          </div>

          <div className="">
            {!teacher.rol ? (
              // <Button
              //   onClick={handleEdit}
              //   text="Confirmar docente"
              //   typeButton={"button-type-2"}
              //   className="my-5"
              //   type="click"
              //   form="register-form"
              // />

              <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={handleEdit}>
                  Confirmar docente
                </button>
            ) : (
              ""
            )}

            <div className={`${visibleButtom}`}>
              {teacher.enable ? (
                // <Button
                //   onClick={EnableDocente}
                //   text="Deshabilitar docente"
                //   typeButton={"button-type-3"}
                //   className="my-5 "
                //   type="click"
                //   form="register-form"
                // />
                <button className='delete-button' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={EnableDocente}>
                  Deshabilitar docente
                </button>
              ) : (
                // <Button
                //   onClick={InableDocente}
                //   text="Habilitar docente"
                //   typeButton={"button-type-2"}
                //   className="my-5"
                //   type="click"
                //   form="register-form"
                // />
                <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={InableDocente}>
                  Habilitar docente
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AccountPage;
