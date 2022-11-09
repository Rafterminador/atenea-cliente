import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { Accept: "*/*" },
});

const getInformation = (responseToReturn) => {
  if (responseToReturn.status === undefined) {
    responseToReturn = responseToReturn.response.data;
  } else {
    responseToReturn = responseToReturn.data;
  }
  return responseToReturn;
};

const getGrades = async (id) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/attendence/get-mystudents/${id}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getAreas = async (id) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/grade/getone-grade-detailed/${id}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const postScores = async (info) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .post("api/v1/activity/update-all-students-scores", info)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const GetMyStudents = async (idTeacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/attendence/get-mystudents/${idTeacher}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const newAttendence = async (data) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .post(`api/v1/attendence/new-attendence`, data)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

export { GetMyStudents, newAttendence, getGrades, getAreas, postScores };
