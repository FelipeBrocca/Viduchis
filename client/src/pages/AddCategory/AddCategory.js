import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../../assets/css/Forms.css'
import { useCategories } from '../../context/CategoriesContext';

const AddCategorie = () => {

  const navigation = useNavigate()

  const {createCategory} = useCategories();

  const initialValues = {
    name: '',
  }

  const validateFields = values => {
    const errors = {}
    if(!values.name) {errors.name = 'Debe ingresar un nombre para la categoría'}
    return errors
  }
  const handleSubmit = async (values) =>{
      await createCategory(values)
      navigation('/productos')
  }

  return (
    <div className="main-form login">
      <div className="div-form">
        <h2>Agregar categoría</h2>
        <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}>
          {() => (
        <Form action="#" className="form">
          <label htmlFor='name'>Categoría</label>
          <Field type='text' name="name" autoComplete='off' />
          <ErrorMessage className='register-error' name='name' component='small' />
          <button className='send-form'>Crear</button>
        </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default AddCategorie