const express = require('express');
const app = express();

const cors = require('cors');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use('/avatars', express.static('./static/avatars'));

app.get('/avatars', (_req, res) => {
    const avatars = fs.readFileSync('./data/avatars.json');
    const parsedAvatars = JSON.parse(avatars);
    res.json(parsedAvatars);
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})