import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import { connectDB } from './database/database.js';
import { PORT } from './database/config/config.js'

import usersRoutes from './routes/usersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
 

const app = express();
app.use(fileUpload({
   useTempFiles: true,
   tempFileDir: './public/images'
}))




app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());



app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);






connectDB()
     .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
     })
     .catch((err) => console.error(err));



mongoose.set('useFindAndModify', false);     