import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

const user = process.env.USUARIO;
const password = process.env.SENHA;

const cliente = new MongoClient(
  `mongodb+srv://${user}:${password}@alurasocketio.dre6x6b.mongodb.net/?retryWrites=true&w=majority`
);

let documentosColecao;

try {
  await cliente.connect();
  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
