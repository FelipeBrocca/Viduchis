import React, { useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'


import { useProducts } from '../../context/ProductsContext';


import '../../assets/css/Forms.css'




const AddProduct = () => {

  const { createProduct } = useProducts();
 
  const initialValues =  {
    name: '',
    image: {},
    category: '',
    price: 0,
    description: '',
    stock: 0,
  }
  const validateFields = values => {
    const errors = {};
    if (!values.name) { errors.name = 'Debe ingresar un nombre' };
    if (values.image === null) { errors.image = 'Debe ingresar una imagen' };
    if (!values.price) { errors.price = 'Debe ingresar un precio' };
    if (!values.stock) { errors.stock = 'Indique cuántos productos entran'};
    if(values.category.length < 1) {errors.category = 'Debe seleccionar una categoría para el producto'};
    if (textarea.length > 1000) { errors.description = 'Máximo permitido 1000 caracteres' };
    return errors;
  }
  const [textarea, setTextarea] = useState('')
  
  const settingArea = (e) =>{
    setTextarea(e.target.value)
  }
  const resetArea = e => {
    setTextarea('')
  }
  const handleSubmit = async (values, actions) => {
    values.description = textarea
    await createProduct(values)
    actions.resetForm();
    resetArea();
  }

  return (
    <div className="main-form-products">
      <div className="div-form-products">
        <h2>Crear producto</h2>

        <Formik
          initialValues = {initialValues}
          validate={validateFields}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form id='register' className="form-products">
              <div className='form-products-inputs'>
              <label htmlFor='name'>Nombre del producto</label>
              <Field type='text' name="name" autoComplete='off' />
              <ErrorMessage className='register-error' name='name' component='small' />
              <label htmlFor='image'>Imagen</label>
              <input type='file' name="image" />
              <ErrorMessage className='register-error' name='image' component='small' />
              <label htmlFor='price'>Precio</label>
              <Field type='number' className='type-number' name="price" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='price' component='small' />
              <label htmlFor='stock'>Stock</label>
              <Field className='type-number' type='number' name="stock" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='stock' component='small' />
              <label htmlFor='category'>Categoría</label>
              <Field as='select' name='category' className='select-create-products'>
                <option defaultValue={'selected'}>Elige una categoria</option>
                <option value="Alfajores">Alfajores</option>
                <option value="Dulce de leche">Dulce de leche</option>
                <option value="Bombones">Bombones</option>
                <option value="Caramelos">Caramelos</option>
              </Field>
              <ErrorMessage className='register-error' name='category' component='small' />
              </div>
              <div className='form-products-textarea'>
              <label htmlFor='description'>Descripción</label>
              <Field as='textarea' name="description" autoComplete='off' value={textarea} onChange={settingArea} />
              <small>{textarea.length}/1000</small>
              <ErrorMessage className='register-error' name='description' component='small' />
              <button className='send-form' type='submit'>Crear</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default AddProduct