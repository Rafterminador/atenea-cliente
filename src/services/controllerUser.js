import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
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
            console.log(userCredential)
            response = userCredential.user;
            let roleObject = JSON.parse(response.reloadUserInfo.customAttributes)
            response = { uid: response.uid, email: response.email, name: response.displayName, role: roleObject.rol }
            const auth = getAuth();
            const currentUser = auth.currentUser;
            currentUser.getIdTokenResult()
                .then((idTokenResult) => {
                    response.role = idTokenResult.claims.rol
                    console.log(idTokenResult);
                })
                .catch((error) => {
                    console.log(error);
                });
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

const forgotPassword = async (email) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`/api/v1/user/reset-password/?email=${email}`)
        .then((response) => {
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
export { login, registrarUsuario, forgotPassword }