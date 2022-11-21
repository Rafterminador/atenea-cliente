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
    .put("api/v1/activity/update-all-students-scores", info)
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



const GetTeacherGradesByID = async (idTeacher) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`api/v1/attendence/get-mystudents/${idTeacher}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const GetGradesByID = async (idGrade) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`api/v1/student/getone-bygrade/${idGrade}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const GetGradesAreas = async (idGrade) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`api/v1/grade/getone-grade/${idGrade}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const GetUnityActivities = async (idArea) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get(`api/v1/area/getone-area/${idArea}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const updateActivity = async (activityObject, idActivity) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.put(`api/v1/activity/update-activity/${idActivity}`, activityObject)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const createActivity = async (newactivityObject) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.post("api/v1/activity/add-activity", newactivityObject)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const deleteActivity = async (idActivityd) => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.put(`api/v1/activity/delete-activity/${idActivityd}`)
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}

const getAllGrades = async () => {
    let responseToReturn
    api.defaults.headers.common["Content-Type"] = "application/json"
    await api.get("api/v1/student/getall-students-aux")
        .then((response) => {
            responseToReturn = response
        }).catch((error) => {
            responseToReturn = error
        });
    return getInformation(responseToReturn)
}





export { GetTeacherGradesByID, GetGradesByID, GetGradesAreas, GetUnityActivities, updateActivity, createActivity, deleteActivity, getAllGrades, GetMyStudents, newAttendence, getAreas, postScores};
