import React, {  useEffect, useState } from 'react';
import bcryptjs from 'bcryptjs'

import { useNavigate} from 'react-router-dom';

import '../../assets/css/Forms.css'
import { useUsers } from '../../context/UsersContext';

const Login = () => {

  const {users} = useUsers();
  const navigate = useNavigate();


  const initialValues =  {
    email: '',
    password: '',
    remember:false
  }
  
  const [loginValues, setLoginValues] = useState(initialValues)
  const [checked, setChecked] = useState(false)
  const [passwordMatchState, setPasswordMatchState] = useState(false)
  const [userLogged, setUserLogged] = useState(false)
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

 
  const processLogin = async (email, password) => {
    let userToLog = await users.filter(user => user.email === email)
    if(userToLog[0]){
      let matchPassword = await bcryptjs.compare(password, userToLog[0].password)
      if (userToLog[0] && password && matchPassword) {
        setPasswordMatchState(true)
        window.sessionStorage.setItem('us', bcryptjs.hashSync(JSON.stringify(userToLog[0].email), 10))
        setUserLogged(true)
      } 
    }
    const errors = {}

    if(!userToLog[0] && email){
      errors.email = 'Email no registrado'
     }
     if(userToLog[0] && password && !passwordMatchState){
      errors.password = 'Contraseña incorrecta'
     } 
     if(submit) {
       setErrors(errors)
      }
   }

  const handleChange = e => {
    const {name, value} = e.target
    setLoginValues({...loginValues, [name] : value})
  }
  const handleSubmit = e =>{
    e.preventDefault();
    setErrors(validate(loginValues));
    setSubmit(true);
  }
  const handleCheck = e => {
    setChecked(e.target.checked)
  }
  
  useEffect(() => {
    (async () => {
      if(Object.keys(errors).length === 0 && submit){
        loginValues.remember = checked
        await processLogin(loginValues.email, loginValues.password)
      }
    }) ()
    if(userLogged) {
      navigate('/')
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