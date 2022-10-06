import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/api/v1`
})

export default clienteAxios;