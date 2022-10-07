import dotenv from 'dotenv';

dotenv.config();

export const CONNECTION_URI = process.env.CONNECTION_URI;
export const PORT = process.env.PORT || 4000;
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY;
export const CLOUDINARY_APISECRET = process.env.CLOUDINARY_APISECRET;