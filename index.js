import express from 'express';
import cors from 'cors';
import { env } from './env.js';

import {
  createPassword,
  createToken,
  validToken,
  validateRegEx,
} from './modules/auth.js';

const app = express();
const server = app.listen(env.port, () => {
  console.log(`serveur démarré sur le port ${server.address().port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const DELAY_TOKEN_SECONDS = 120;

app.post('/getId', (req, res) => {
  let response;
  const password = createPassword();
  console.log(password);
  const token = createToken(password, DELAY_TOKEN_SECONDS);
  const isValidNumberSrv = validateRegEx(req.body);

  if (isValidNumberSrv) {
    response = {
      token: token,
      delay: DELAY_TOKEN_SECONDS / 60,
      isValidNumberSrv,
    };
  } else {
    response = { token: '', delay: 0, isValidNumberSrv };
  }

  res.json(response);
});

app.post('/getAuth', (req, res) => {
  const isTokenValid = validToken(req.body);
  res.json({ auth: isTokenValid });
});
