import Http from "./Http";

const Api = {
  login: (username, password) => {
    return Http.post('/api/Login', {
      username: username,
      password: password
    });
  },

  register: (username, password) => {
    return Http.post('/api/Register', {
      username: username,
      password: password
    });
  },

  getUserData: (userId) => {
    return Http.get(`/api/User/${userId}`);
  },
};

export default Api;