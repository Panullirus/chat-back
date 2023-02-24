import app from "./config/config.js";

const port = process.env.APP_PORT || 8081;

app.http.listen(port, "104.219.42.26",() => { console.log(`Server running on port ${port}`) });
//App.http.listen(port, () => console.log(`API escuchando en puerto: ${port}`))
// const express = require('express');
// const app = express();

// app.use(express.json());

// require('dotenv').config();

// const port = process.env.APP_PORT;

// app.listen(port, () => {
//     console.log(`escuchando en ${port}`)
// })

// app.get('/hello', (req, res) => {
//     res.send('hello world')
// })

// app.post('/data',(req, res) => {
//     const body = req.body;
//     console.log(body);

//     req.send('ok')
// })