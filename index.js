import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const app = express();
const server = app.listen(process.env.PORT, () => {
  console.log(`serveur démarré sur le port ${server.address().port}`);
});
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/getId', (req, res) => {
  console.log('getID');
  console.log(req.body.phoneNumber);
  res.json({ id: uuidv4(), delay: 5 });
});

app.post('/getAuth', (req, res) => {
  console.log('getAuth');
  res.json({ rep: 'coucou je ne suis pas fini!!' });
});
