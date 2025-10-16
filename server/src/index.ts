import express from 'express';
import cors from 'cors';
import Routes from './Routes';
import helmet from "helmet";

const app = express();

app.use(cors({ origin: '*' }));

app.use(helmet());
app.use(express.json());


app.use('/',Routes());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
