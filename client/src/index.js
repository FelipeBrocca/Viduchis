import React from 'react';
import ReactDOM from 'react-dom/client';

import { UsersProvider } from './context/UsersContext';
import { ProductsProvider } from './context/ProductsContext';
import { CategoriesProvider } from './context/CategoriesContext';


import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
     <UsersProvider>
          <CategoriesProvider>
               <ProductsProvider>
                    <App />
               </ProductsProvider>
          </CategoriesProvider>
     </UsersProvider>
     </React.StrictMode>
); 




