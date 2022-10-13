import React, { useEffect, useState } from 'react';
// import { useNavigation } from 'react-router-dom';

import '../../assets/css/Forms.css'
import { useUsers } from '../../context/UsersContext';

const Login = () => {

  const {users} = useUsers();
  // const navigation = useNavigation();

  const initialValues =  {
    email: '',
    password: '',
    remember:false
  }
  
  const [loginValues, setLoginValues] = useState(initialValues)
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] =useState(false)


  const validate = values => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if(!values.email){
      errors.email = 'Ingrese un email'
    } else if (!regex.test(values.email)){
      errors.email = 'Ingrese un email válido'
    };
    if(!values.password){
      errors.password = 'Ingrese una contraseña'
    }
    return errors
  }


  const handleChange = e => {
    const {name, value} = e.target
    setLoginValues({...loginValues, [name] : value})
  }
  const handleSubmit = async e =>{
    e.preventDefault();
    setErrors(validate(loginValues));
    setSubmit(true);
  }
  const handleCheck = e => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && submit){
      loginValues.remember = checked
      // console.log(loginValues);
    }
  }, [handleSubmit])

  return (
    <div className="main-form login">
      <div className="div-form">
        <h2>Iniciar sesión</h2>
        <form className="form" onSubmit={handleSubmit}>

          <label htmlFor='email-login'>Email</label>
          <input
          value={loginValues.email}
          onChange={handleChange} 
          type='email' 
          name="email" />
          <small className='register-error'>{errors.email}</small>

          <label htmlFor='pass-login'>Contraseña</label>
          <input
          value={loginValues.password}
          onChange={handleChange}
          type='password' 
          name="password" />
          <small className='register-error'>{errors.password}</small>

          <div className='div-checkbox'>
            <input     
            onChange={handleCheck} 
            type='checkbox' 
            name="remember" />
            <label htmlFor='remember'>Recordar usuario</label>
          </div>

          <button className='send-form'>Iniciar</button>
        </form>
      </div>
    </div>
  )
}
export default Login