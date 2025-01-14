import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userContext } from '../context/UserContext';
import { REACT_APP_USERS_API } from '../utils';

export default function Login() {
  const { login, setAllUsers } = useContext(userContext);
  const navigate = useNavigate();

  // Fetch user data from API and set it in context
  useEffect(() => {
    const fetchData = () => {
      fetch(REACT_APP_USERS_API)
        .then((res) => res.json())
        .then((result) => {
          console.log('All users:', result);
          setAllUsers(result);
        });
    };

    fetchData();
  }, [setAllUsers]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      login(values);
      setTimeout(() => {
        formik.resetForm();
        navigate('/');
      }, 1000);
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow p-4" style={{ width: '24rem' }}>
        <h1 className="text-center text-primary mb-4">Login</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="invalid-feedback">{formik.errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
