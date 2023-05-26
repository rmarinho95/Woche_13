'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Anpassung! Oliverob is in the DevOps Course and has mastered the "Deployment with Docker" exercise :-)')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);