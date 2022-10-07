import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'


import { useProducts } from '../../context/ProductsContext';
import { useCategories } from '../../context/CategoriesContext'

import '../../assets/css/Forms.css'
import { useNavigate, useParams } from 'react-router-dom';




const EditProduct = () => {

  const navigate = useNavigate()
  const params = useParams();
  
  const [eliminate, setEliminate] = useState(false)


  const { createProduct, getEditProduct, eliminateProduct } = useProducts();
  const {categories} = useCategories();

  const [initialValues, setInitialValues] = useState({
    name: '',
    image: null,
    category: '',
    price: 0,
    description: '',
    stock: 0,
  })
  
  useEffect(()=> {
    (async () => {
      if(params.id){
        const productEdit = await getEditProduct(params.id);
        setInitialValues(productEdit);  
      }
    })();
  }, [])


  const validateFields = values => {
    const errors = {};
    if (!values.name) { errors.name = 'Debe ingresar un nombre' };
    if (!values.price) { errors.price = 'Debe ingresar un precio' };
    if (!values.stock) { errors.stock = 'Indique cuántos productos entran' };
    if (values.category.length < 1) { errors.category = 'Debe seleccionar una categoría para el producto' };
    return errors;
  }

  const handleSubmit = async (values, actions) => {
    actions.resetForm();
    await createProduct(values)
  }
  const handleDelete = async (id) => {
    setEliminate(false)
    navigate('/productos')
    await eliminateProduct(id)
  }


 

  return (
    <div className="main-form-products">
    <div className="div-edit-form-products">
    <button className='eliminate-form' onClick={() => {setEliminate(true)}}>X</button>
      <h2>Editar producto</h2>

      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form id='register' className="form-products">
            <div className='form-products-inputs'>
              <label htmlFor='name'>Nombre del producto</label>
              <Field type='text' name="name" autoComplete='off' />
              <ErrorMessage className='register-error' name='name' component='small' />
              <label htmlFor='image'>Imagen</label>
              <input type='file' name="image" onChange={(e) => setFieldValue('image', e.target.files[0])} required />
              <label htmlFor='price'>Precio</label>
              <Field type='number' className='type-number' name="price" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='price' component='small' />
              <label htmlFor='stock'>Stock</label>
              <Field className='type-number' type='number' name="stock" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='stock' component='small' />
              <label htmlFor='category'>Categoría</label>
              <Field as='select' name='category' className='select-create-products'>
                {
                  categories?.map((category) => (
                    <option 
                    value={category.name}
                    key={category._id}>
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </option>
                  ))
                }
              </Field>
              <ErrorMessage className='register-error' name='category' component='small' />
            </div>
            <div className='form-products-textarea'>
              <label htmlFor='description'>Descripción</label>
              <Field as='textarea' name="description" autoComplete='off' />
              <ErrorMessage className='register-error' name='description' component='small' />
              <button className='send-form' type='submit'>Editar</button>
            </div>
          </Form>
        )}
      </Formik> <div className={eliminate ? 'pop-up-open' : 'd-none'}>
        <div className='backdrop' onClick={() => setEliminate(false)}>
        </div>
        <div className='pop-up-eliminate'>
          <p>Estas seguro que quieres eliminar este producto?</p>
          <div className='confirm-eliminate'>
          <button className='cancel' onClick={()=> setEliminate(false)}>Cancelar</button>
          <button className='eliminate' onClick={() => {handleDelete(params.id)}}>Eliminar</button>
          </div>
        </div>
        </div>
    </div>
    </div>
        
  )
}
export default EditProduct