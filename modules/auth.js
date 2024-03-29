import jwt from 'jsonwebtoken';
import { env } from '../env.js';

const regEx = {
  phoneNumber: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
  password: '^\\d{6}$',
};

export const validateRegEx = (data) => {
  for (const [key, value] of Object.entries(data)) {
    if (regEx[key]) {
      const globalRegex = new RegExp(regEx[key], 'g');
      return globalRegex.test(value);
    }
  }
  return false;
};

export const createPassword = (pwdLength) => {
  let index = 1;
  let password = [];
  while (index <= pwdLength) {
    const max = Math.floor(9);
    const min = Math.ceil(0);
    password.push(Math.floor(Math.random() * (max - min + 1)) + min);
    index++;
  }

  return password.join('').toString();
};

export const createToken = (password, expiration) => {
  const token = jwt.sign(
    {
      password: password,
    },
    env.secret,
    { expiresIn: expiration }
  );

  return token;
};

export const validToken = ({ token, password }) => {
  try {
    const decodedToken = jwt.verify(token, env.secret);
    return decodedToken.password === password;
  } catch {
    return false;
  }
};
