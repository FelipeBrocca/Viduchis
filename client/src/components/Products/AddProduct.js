import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'


import { useProducts } from '../../context/ProductsContext';
import { useCategories } from '../../context/CategoriesContext'


import '../../assets/css/Forms.css'
import { useParams } from 'react-router-dom';




const AddProduct = () => {

  const params = useParams();

  const { createProduct, getEditProduct } = useProducts();
  const {categories} = useCategories();

  const [initialValues, setInitialValues] = useState({
    name: '',
    category: '',
    price: 0,
    description: '',
    stock: 0,
  })
  
  useEffect(()=> {
    (async () => {
      if(params.id){
        const productEdit = await getEditProduct(params.id);
        setInitialValues(productEdit)    
       }
    })();
  }, [])

  const validateFields = values => {
    const errors = {};
    if (!values.name) { errors.name = 'Debe ingresar un nombre'};
    if (!values.price) { errors.price = 'Debe ingresar un precio'};
    if (!values.stock) { errors.stock = 'Indique cuántos productos entran'};
    if(!values.description) { errors.description = 'Ingrese una descripción para el producto'};
    if (values.category.length < 1) { errors.category = 'Debe seleccionar una categoría para el producto'};
    return errors;
  }

  const handleSubmit = async (values, actions) => {
    await createProduct(values)
    actions.resetForm();
  }



  return (
    <div className="div-form-products">
      <h2>Crear producto</h2>

      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form id='register' className="form-products">
            <div className='form-products-inputs'>
              <label htmlFor='name'>Nombre del producto</label>
              <Field type='text' name="name" autoComplete='off' />
              <ErrorMessage className='register-error' name='name' component='small' />
              <label htmlFor='image'>Imagen</label>
              <input type='file' name="image" onChange={(e) => setFieldValue('image', e.target.files[0])} required />          
               {/* <small className='register-error'>{imageError}</small>            */}
              <label htmlFor='price'>Precio</label>
              <Field type='number' className='type-number' name="price" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='price' component='small' />
              <label htmlFor='stock'>Stock</label>
              <Field className='type-number' type='number' name="stock" min='0' autoComplete='off' />
              <ErrorMessage className='register-error' name='stock' component='small' />
              <label htmlFor='category'>Categoría</label>
              <Field as='select' name='category' className='select-create-products'>
                <option defaultValue={'selected'}>Elige una categoria</option>
                {
                  categories?.map((category) => (
                    <option 
                    value={category.name}
                    key={category._id}>
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </option>
                  ))
                }
                {/* <option value="Dulce de leche">Dulce de leche</option>
                <option value="Bombones">Bombones</option>
                <option value="Caramelos">Caramelos</option> */}
              </Field>
              <ErrorMessage className='register-error' name='category' component='small' />
            </div>
            <div className='form-products-textarea'>
              <label htmlFor='description'>Descripción</label>
              <Field as='textarea' name="description" autoComplete='off' />
              <ErrorMessage className='register-error' name='description' component='small' />
              <button className='send-form' type='submit'>Crear</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddProduct


