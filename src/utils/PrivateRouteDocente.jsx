import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouteDocente = () => {
    const userJSON = localStorage.getItem('usuario')
    const usuario = JSON.parse(userJSON)
    let auth = { 'token': true }
    usuario === null ? auth.token = false : auth.token = true
    return (
        auth.token ? <Outlet /> : < Navigate to="/" />
    )
}

export default PrivateRouteDocente