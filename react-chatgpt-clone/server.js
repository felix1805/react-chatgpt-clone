const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = '';

app.listen(PORT, () => console.log('Your server is running on PORT '+ PORT));
