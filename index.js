import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { DataBase } from './modules/dataBase.js';
import { createNewDbEnrtry, validateRegEx } from './modules/datas.js';
dotenv.config();
const dataBase = new DataBase();

const app = express();
const server = app.listen(process.env.PORT, () => {
  console.log(`serveur démarré sur le port ${server.address().port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/getId', (req, res) => {
  console.log('getID');
  console.log(req.body.phoneNumber);
  let response;

  const isValidNumberSrv = validateRegEx(req.body);

  if (isValidNumberSrv) {
    const entry = createNewDbEnrtry(req.body);
    dataBase.addItemToDb(entry);
    response = { token: uuidv4(), delay: 5, isValidNumberSrv };
  } else {
    response = { token: '', delay: 0, isValidNumberSrv };
  }

  res.json(response);
});

app.post('/getAuth', (req, res) => {
  console.log('getAuth');
  res.json({ rep: 'coucou je ne suis pas fini!!' });
});
