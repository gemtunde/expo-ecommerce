import dotenv from 'dotenv';

dotenv.config();

export const ENV= { 
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    DB_URL: process.env.DB_URL || 'postgresql://username:password@localhost:5432/mydatabase',
}