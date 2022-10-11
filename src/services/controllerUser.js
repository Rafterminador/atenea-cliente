import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { 'Accept': '*/*' }
})
const login = async (auth, email, password) => {
    console.log(auth, email, password)
    let response = null
    response = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            response = userCredential.user;
            response = { uid: response.uid, email: response.email, name: response.displayName }
            return response
        })
        .catch((error) => {
            response = { errorCode: error.code, errorMessage: error.message }
            return response
        });
    // console.log(JSON.stringify(response));
    return response
}

const registrarUsuario = async (email, password, name) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.post("/api/v1/user/create-user/", {
        email: email,
        emailVerified: false,
        password: password,
        displayName: name,
        disable: false,
    }).then((response) => {
        responseToReturn = response
    }).catch((error) => {
        responseToReturn = error
    });
    if (responseToReturn.status === undefined) {
        responseToReturn = responseToReturn.response.data
    } else {
        responseToReturn = responseToReturn.data
    }
    return responseToReturn
}
export { login, registrarUsuario }