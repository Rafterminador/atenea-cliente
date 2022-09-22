import clienteAxios from "../../utils/axios";

const endpoint = {
  auth: {
    register: {
      postRegister: `${clienteAxios}/user/create-user/`,
    },
  },
};

export default { endpoint };
