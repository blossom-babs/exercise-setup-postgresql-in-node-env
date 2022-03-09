import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env)

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());


app.get("/", async function (req: Request, res: Response) {
  res.status(200).send('Hello World')

});


app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});
