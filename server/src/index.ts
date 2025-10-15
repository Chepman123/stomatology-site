import express from 'express';
import cors from 'cors';
import Routes from './Routes';
import helmet from "helmet";

const app = express();

app.use(cors({
  origin: ['https://dantway.pl'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(helmet());
app.use(express.json());


app.use('/',Routes());

app.listen(5000);