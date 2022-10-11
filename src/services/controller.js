import { signInWithEmailAndPassword } from "firebase/auth";
// import { Firebase } from "../utils/Firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const app = firebase.appInitialize();
// const auth = getAuth(app);

const login = async (auth, email, password) => {
    console.log(auth, email, password)
    let response = null
    response = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
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

export { login }