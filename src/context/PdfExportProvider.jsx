import { useState, createContext } from "react";
import axios from "axios";

const PdfExportContext = createContext();

const PdfExportProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);

  const getStudentAllBoletinByGrade = async (idCourse, nameCourse) => {
    setCargando(false)
    // let responseToReturn =  await api.get(`api/v1/student/get-student-boletin/${idStudent}`)
    // return responseToReturn
    axios({
      url: `https://atenea-app-ud23b.ondigitalocean.app/api/v1/student/get-student-AllBoletinByGrade/${idCourse}`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.download = `${nameCourse}_Registro_Boletin.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setCargando(true)
    });
  };

  const getAreaDownloadNotes = async (idArea, nameArea) => {
    setCargando(false)
    // let responseToReturn =  await api.get(`api/v1/student/get-student-boletin/${idStudent}`)
      // return responseToReturn
      axios({
        url: `https://atenea-app-ud23b.ondigitalocean.app/api/v1/area/download-notes/${idArea}`,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'
        link.download = `${nameArea}_Registro_Area.pdf`
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCargando(true)
    })
  }


  const getStudentBoletin = async (idStudent, nameStudent) => {
    setCargando(false)
    // let responseToReturn =  await api.get(`api/v1/student/get-student-boletin/${idStudent}`)
    // return responseToReturn
    axios({
        url: `https://atenea-app-ud23b.ondigitalocean.app/api/v1/student/get-student-boletin/${idStudent}`,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'
        link.download = `${nameStudent}_Boletin.pdf`

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCargando(true)
    })
}

  return (
    <PdfExportContext.Provider
      value={{
        getStudentAllBoletinByGrade,
        getAreaDownloadNotes,
        getStudentBoletin,
        cargando,
        setCargando,
      }}
    >
      {children}
    </PdfExportContext.Provider>
  );
};

export { PdfExportProvider };

export default PdfExportContext;
