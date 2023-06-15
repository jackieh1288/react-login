// import userRequest from '../api';

export const login = (payload) => (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST', payload: payload });
  //   userRequest.post('/v1/user/login', payload).then((res) => {
  // dispatch({ type: 'LOGIN_SUCCESS', payload: res });
  //   });
  alert('login success');
  dispatch({ type: 'LOGIN_SUCCESS', payload: { message: 'success' } });
};
