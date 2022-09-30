import React from 'react';

import { Formik, Form, Field } from 'formik'
import '../../assets/css/Forms.css'

const Login = () => {

  const initialValues =  {
    email: '',
    password: '',
  }
  const handleSubmit = e =>{
    e.preventDefault();
  }

  return (
    <div className="main-form login">
      <div className="div-form">
        <h2>Iniciar sesión</h2>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form action="#" className="form">
          <label htmlFor='email-login'>Email</label>
          <Field type='email' name="email-login" />
          <label htmlFor='pass-login'>Contraseña</label>
          <Field name="pass-login" />
          <div className='div-checkbox'>
            <Field type='checkbox' name="check-pass-login" />
            <label htmlFor='check-pass-login'>Recordar usuario</label>
          </div>
          <button className='send-form'>Iniciar</button>
        </Form>
        </Formik>
      </div>
    </div>
  )
}
export default Login