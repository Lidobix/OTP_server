import dotenv from 'dotenv';

dotenv.config();

export const env = {
  secret: process.env.SECRET,
  port: process.env.PORT,
};
