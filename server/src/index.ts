import express from 'express';
import cors from 'cors';
import Routes from './Routes';
import helmet from "helmet";

const app = express();

app.use(cors({
  origin: 'https://dantway.pl',
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(helmet());
app.use(express.json());

app.options('*', cors({
  origin: 'https://dantway.pl',
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use('/', Routes());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
