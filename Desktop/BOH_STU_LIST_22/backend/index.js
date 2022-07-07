import express from 'express';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send(`The BOH application is running on port ${PORT}`)
    );

app.listen(PORT, () => 
    console.log(`The server is running on port ${PORT}`)
    );