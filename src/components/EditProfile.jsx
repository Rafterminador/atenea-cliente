import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import IconShowPassword from "../assets/images/icon-showpassword.svg";
import IconHidePassword from "../assets/images/icon-hidepassword.svg";
import { updateUserProfile } from "../services/controllerUser";
import { AlertButton } from "../utils/AlertButton";
import Spinner from "../components/Spinner";

export default function EditProfile({ handle }) {
  const userJSON = localStorage.getItem('usuario')
  const usuario = JSON.parse(userJSON)
  const Swal = require('sweetalert2')
  const [password, setPassword] = useState(usuario.password);
  const [email, setEmail] = useState(usuario.email);
  const [number, setNumber] = useState(usuario.number);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [iconPassword, setIconPassword] = useState(IconShowPassword);
  const [cargando, setCargando] = useState(false);

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
    if (iconPassword === IconShowPassword) {
      setIconPassword(IconHidePassword);
    } else {
      setIconPassword(IconShowPassword);
    }
  };

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeNumber(e) {
    setNumber(e.target.value);
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    console.log("datos a actualizar ", usuario.uid, email, password, number.toString(), usuario.name)
    let response = await updateUserProfile(usuario.uid, email, password, "+502 " + number.toString(), usuario.name);
    setCargando(true);
    if (response.status === 200) {
      const userJSON = JSON.stringify(
        { uid: usuario.uid, email: email, name: response.displayName, role: usuario.role, number: usuario.number, password: password }
      )
      localStorage.setItem('usuario', userJSON)
      setCargando(false);
      Swal.fire(
        AlertButton.dataAlertSuccess('Datos actualizados')
      ).then(() => {
        handle()
      })
    } else {
      setCargando(false);
      console.log(response.body);
    }
  }

  return (
    <div className={`account mx-5 pt-6 flex flex-col justify-between`}>
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <div>
            <form onSubmit={handleUpdateUser} id="update-form">
              <label
                htmlFor="email"
                className="text-[#4D3483] font-semibold text-base"
              >
                Correo
              </label>
              <Input
                className={
                  "flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 w-full mt-[8px] mb-[16px]"
                }
                id={"email"}
                type={"email"}
                name={"email"}
                disabled={false}
                required={true}
                defaultValue={usuario.email}
                onChange={handleChangeEmail}
              />
              <label
                htmlFor="phone"
                className="text-[#4D3483] font-semibold text-base"
              >
                Número telefónico
              </label>
              <Input
                className={
                  "flex justify-between font-normal border-solid border-2 border-[#DBD8FF] rounded-[10px] py-2.5 px-2 w-full mt-[8px] mb-[16px]"
                }
                id={"user"}
                type={"number"}
                name={"phone"}
                disabled={false}
                required={true}
                defaultValue={usuario.number}
                onChange={handleChangeNumber}
              />
              <label
                htmlFor="password"
                className="text-[#4D3483] font-semibold text-base"
              >
                Contraseña
              </label>
              <div className="relative">
                <Input id="password" type={passwordVisibility ? "text" : "password"} name="password" onChange={handleChangePassword} placeholder="Ingresar contraseña"
                  className={"w-full mt-[8px] mb-[16px]"} required={1} defaultValue={usuario.password} />
                <img
                  className="shw-pass bg-white"
                  src={iconPassword}
                  onClick={togglePassword}
                  alt="icon"
                />
              </div>
            </form>
          </div>
          <div className="mb-5">
            <Button
              typeButton={"button-type-1"}
              className={
                "box-border border-2 border-solid border-[#7064FF] rounded-[20px] text-[#7064FF] font-semibold text-xl mb-5 h-[49px]"
              }
              type={"button"}
              onClick={handle}
              text={"Cancelar"}
            />
            <Button
              typeButton={"button-type-2"}
              className={
                "box-border border-2 border-solid border-[#7064FF] rounded-[20px] text-[#7064FF] font-semibold text-xl mb-5 h-[49px]"
              }
              type="submit"
              text={"Actualizar datos"}
              form="update-form"
            />
          </div>
        </>
      )}
    </div>
  );
}
