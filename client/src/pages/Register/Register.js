import React from 'react';
import { useNavigate } from 'react-router-dom';


import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../../assets/css/Forms.css'


const Register = () => {

  const navigation = useNavigate();
  
  const initialValues =  {
    name: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
    terms: false,
    getOffers: false
  }
  const validateFields = values => {
    const errors = {};
    if (!values.name) { errors.name = 'Debe ingresar un nombre' };
    if (!values.lastname) { errors.lastname = 'Debe ingresar un apellido' };
    if (!values.email) { errors.email = 'Debe ingresar un mail' };
    if (!values.email.includes('@')) { errors.email = 'Debe ingresar un mail válido' };
    if (!values.email.includes('.')) { errors.email = 'Debe ingresar un mail válido' };
    if (values.password.length < 6) { errors.password = 'La contraseña debe tener mínimo 6 caracteres' };
    if (values.repeatPassword !== values.password) { errors.repeatPassword = 'Las contraseñas deben coincidir' };
    if (values.terms === false) { errors.terms = 'Debe aceptar los términos y condiciones' };
    return errors;
  }
  const handleSubmit = async (values) => {
      navigation('/login')
  }

  return (
    <div className="main-form">
      <div className="div-form">
        <h2>Registrate</h2>

        <Formik
          initialValues = {initialValues}
          validate={validateFields}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id='register' className="form">
              <label htmlFor='name'>Nombre</label>
              <Field type='text' name="name" autoComplete='off' />
              <ErrorMessage className='register-error' name='name' component='small' />
              <label htmlFor='lastname'>Apellido</label>
              <Field type='text' name="lastname" autoComplete='off' />
              <ErrorMessage className='register-error' name='lastname' component='small' />
              <label htmlFor='email'>Email</label>
              <Field type='email' name="email" autoComplete='off' />
              <ErrorMessage className='register-error' name='email' component='small' />
              <label htmlFor='password'>Contraseña</label>
              <Field type='password' name="password" autoComplete='off' />
              <ErrorMessage className='register-error' name='password' component='small' />
              <label htmlFor='password'>Repetir contraseña</label>
              <Field type='password' name="repeatPassword" autoComplete='off' />
              <ErrorMessage className='register-error' name='repeatPassword' component='small' />
              <div className='div-checkbox'>
                <Field type='checkbox' name="terms" />
                <label htmlFor='terms'>Acepto los términos y condiciones</label> <br></br>
              </div>
              <ErrorMessage className='register-error' name='terms' component='small' />
              <div className='div-checkbox'>
                <Field type='checkbox' name="getOffers" />
                <label htmlFor='getOffers'>Me gustaría recibir ofertas al mail</label>
              </div>
              <button className='send-form' type='submit'>ENVIAR</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default Register
