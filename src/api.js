import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
  baseURL: 'https://dev-kol2-api.aralego.com/api'
});

// export const apiUserLogin = data => userRequest.post('/login', data);

export default userRequest;