const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
