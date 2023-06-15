import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/auth';
import '../index.css';

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    //   validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(actions.login(values));
    },
  });
  const state = useSelector((state) => state);

  const { handleSubmit } = formik;

  return (
    <>
      <div>
        <form className="styleForm" onSubmit={handleSubmit}>
          <TextField
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {/* <Link to="/home"> */}
          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: 10 }}
            type="submit"
          >
            Submit
          </Button>
          {/* </Link> */}
        </form>
      </div>
      {state?.message && (
        <div>
          <h1>{state.message}</h1>
        </div>
      )}
    </>
  );
};

export default Login;
