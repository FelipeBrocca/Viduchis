import dotenv from 'dotenv';

dotenv.config();

export const CONNECTION_URI = process.env.CONNECTION_URI;
export const PORT = process.env.PORT || 4000;