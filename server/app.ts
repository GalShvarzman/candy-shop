import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import {candiesRouter} from './routes/candiesRouter';

const app = express();

mongoose.connect('mongodb://localhost:27017/candies',{ useNewUrlParser: true });

app.use(cors());

app.use(express.json());

app.use('/candies',candiesRouter);

app.listen(4000,()=>(console.log("listening on port 4000")));