import express from 'express';
import cors from 'cors';
import Routes from './Routes';
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/',Routes());

app.listen(5000);