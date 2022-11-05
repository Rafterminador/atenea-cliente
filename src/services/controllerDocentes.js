import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { 'Accept': '*/*' }
})
const getInformation = (responseToReturn) => {
    if (responseToReturn.status === undefined) {
        responseToReturn = responseToReturn.response.data
    } else {
        responseToReturn = responseToReturn.data
    }
    return responseToReturn
}
export { }