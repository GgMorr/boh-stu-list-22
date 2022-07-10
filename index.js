import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/bohRoutes';


const app = express();
const PORT = 4000;

//mongo connetion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bohDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());


routes(app);

app.get('/', (req, res) => 
    res.send(`The BOH application is running on port ${PORT}`)
    );

app.listen(PORT, () => 
    console.log(`The server is running on port ${PORT}`)
    );