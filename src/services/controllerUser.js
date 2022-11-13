import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { 'Accept': '*/*' }
})
const login = async (auth, email, password) => {
    // console.log(auth, email, password)
    let response = null
    response = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            response = userCredential.user;
            console.log(userCredential.user)
            let roleObject = JSON.parse(response.reloadUserInfo.customAttributes)
            response = { uid: response.uid, email: response.email, name: response.displayName, role: roleObject.rol, number: response.phoneNumber.slice(4) || "", password: password }
            const auth = getAuth();
            const currentUser = auth.currentUser;
            currentUser.getIdTokenResult()
                .then((idTokenResult) => {
                    console.log(idTokenResult)
                    response.role = idTokenResult.claims.rol
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
    return getInformation(responseToReturn)
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
    return getInformation(responseToReturn)
}

const updateUserProfile = async (idUser, emailInput, passwordInput, phoneNumberInput, displayNameInput) => {
    let responseToReturn
    await api.put(`api/v1/user/update-user/${idUser}`, {
        email: emailInput,
        password: passwordInput,
        phoneNumber: phoneNumberInput,
        displayName: displayNameInput
    })
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)

}

const getInformation = (responseToReturn) => {
    if (responseToReturn.status === undefined) {
        responseToReturn = responseToReturn.response.data
    } else {
        responseToReturn = responseToReturn.data
    }
    return responseToReturn
}

export { login, registrarUsuario, forgotPassword, updateUserProfile }