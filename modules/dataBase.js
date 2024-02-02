import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export class DataBase {
  constructor(dbUri) {
    this.mongoClient = new MongoClient(process.env.DB_URL);
    this.dbCollection = process.env.DB_COL;
    this.dbName = process.env.DB_NAME;
  }

  connection() {
    return new Promise((resolve, reject) => {
      this.mongoClient
        .connect()
        .then((d) => {
          console.log('connecté à mongo');
          resolve(d);
        })
        .catch((e) => {
          console.error('connexion non établie', e);
          reject();
        });
    });
  }
  addItemToDb(phoneNumber) {
    return new Promise((resolve, reject) => {
      this.connection()
        .then((d) => {
          const db = d.db(this.dbName);
          const collecion = db.collection(this.dbCollection);
          collecion.insertOne({ phoneNumer: phoneNumber });
          resolve();
        })

        .catch((e) => {
          console.error('Données introuvables', e);
          reject();
        });
    });
  }

  //   findSomething(dbName, dbCollecion, query, projection) {
  //     return new Promise((resolve, reject) => {
  //       this.connection()
  //         .then((d) => {
  //           const db = d.db(dbName);
  //           const collecion = db.collection(dbCollecion);
  //           return collecion.find(query, projection).toArray();
  //         })
  //         .then((d) => {
  //           resolve(d);
  //         })
  //         .catch((e) => {
  //           console.error('Données introuvables', e);
  //           reject();
  //         });
  //     });
  //   }
}
