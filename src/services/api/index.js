import clienteAxios from "../../utils/axios";

const endpoint = {
  auth: {
    register: {
      postRegister: `${clienteAxios}/user/create-user/`,
      recoverPassword: `${clienteAxios}/user/reset-password/`,
    },

   
  },
};

export default { endpoint };
