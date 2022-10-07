import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/Forms.css'


const Register = () => {

  const navigation = useNavigate();

  const initialValues = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: ''
  }
  
  const [formValues, setFormValues] = useState(initialValues);
  const [checkTerms, setCheckTerms] = useState(false)
  const [checkOffers, setCheckOffers] = useState(false)
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);



  const validateFields = values => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if (!values.name) {
      errors.name = 'Debe ingresar un nombre'
    };
    if (!values.lastname) {
      errors.lastname = 'Debe ingresar un apellido'
    };
    if (!values.email) {
      errors.email = 'Debe ingresar un mail'
    } else if (!regex.test(values.email)) {
      errors.email = 'Debe ingresar un mail válido'
    };
    if (values.password.length < 6) {
      errors.password = 'La contraseña debe tener mínimo 6 caracteres'
    };
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Las contraseñas no coinciden'
    };
    if (checkTerms === false) {
      errors.terms = 'Debe aceptar los términos y condiciones'
    };
    return errors;
  }

  const handleChange = e => {
      const { name, value } = e.target;
      setFormValues({...formValues, [name] : value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateFields(formValues));
    setSubmit(true);
  }
  const handleCheckTerms = e => {
    setCheckTerms(e.target.checked)
  }
  const handleCheckOffers = e => {
    setCheckOffers(e.target.checked)
  }
  
  useEffect(() => {
    if(Object.keys(errors).length === 0 && submit){
      formValues.terms = checkTerms;
      formValues.getOffers = checkOffers;
      // console.log(formValues);
     }
  }, [errors])

  return (
    <div className="main-form">
      <div className="div-form">
        <h2>Registrate</h2>

        <form id='register' className="form" onSubmit={handleSubmit}>

          <label htmlFor='name'>Nombre</label>
          <input 
          onChange={handleChange} 
          value={formValues.name} 
          type='text' 
          name="name" 
          autoComplete='off' />
          <small className='register-error' name='name'>{errors.name}</small>

          <label htmlFor='lastname'>Apellido</label>
          <input 
          onChange={handleChange} 
          value={formValues.lastname} 
          type='text' 
          name="lastname" 
          autoComplete='off' />
          <small className='register-error' name='lastname'>{errors.lastname}</small>

          <label htmlFor='email'>Email</label>
          <input 
          onChange={handleChange} 
          value={formValues.email} 
          type='email' 
          name="email" 
          autoComplete='off' />
          <small className='register-error' name='email'>{errors.email}</small>

          <label htmlFor='password'>Contraseña</label>
          <input 
          onChange={handleChange} 
          value={formValues.password} 
          type='password'
          name="password" 
          autoComplete='off' />
          <small className='register-error' name='password'>{errors.password}</small>

          <label htmlFor='password'>Repetir contraseña</label>
          <input 
          onChange={handleChange} 
          value={formValues.repeatPassword} 
          type='password' 
          name="repeatPassword" 
          autoComplete='off' />
          <small className='register-error' name='repeatPassword'>{errors.repeatPassword}</small>

          <div className='div-checkbox'>
            <input 
            onChange={handleCheckTerms} 
            type='checkbox' 
            name="terms" />
            <label htmlFor='terms'>Acepto los términos y condiciones</label> <br></br>
          </div>
          <small className='register-error' name='terms'>{errors.terms}</small>

          <div className='div-checkbox'>
            <input 
            onChange={handleCheckOffers} 
            type='checkbox' 
            name="getOffers" />
            <label htmlFor='getOffers'>Me gustaría recibir ofertas al mail</label>
          </div>
          <button className='send-form' type='submit'>ENVIAR</button>
        </form>
      </div>
    </div>
  )
}
export default Register
