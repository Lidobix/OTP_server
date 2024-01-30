import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

dotenv.config();
const app = express();
const server = app.listen(process.env.PORT, () => {
  console.log(`serveur démarré sur le port ${server.address().port}`);
});
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
app.use(cors());
app.set('view engine', 'pug');
app.set('/views', express.static(path.join(dirName, 'views')));

app.get('/', (req, res) => {
  res.render('template.pug');
});
