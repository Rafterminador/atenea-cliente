import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouteDirector = () => {
    const userJSON = localStorage.getItem('usuario')
    const usuario = JSON.parse(userJSON)
    let auth = { 'token': true }
    usuario === null ? auth.token = false : auth.token = true
    // console.log(usuario)
    // console.log("usuario logeado")
    // console.log(usuario?.role)
    usuario?.role === "director" || usuario?.role === "admin" ? auth.token = true : auth.token = false
    // console.log("director logeado ", auth)
    return (
        auth.token ? <Outlet /> : < Navigate to="/" />
    )
}

export default PrivateRouteDirector