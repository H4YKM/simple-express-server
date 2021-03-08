const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server has been start in port: ${PORT}...`);
});

// Main Page

app.get('/', (req, res) => {
    const mainTxt = fs.readFileSync(
        path.join(__dirname, 'public', 'main.html'),
        'utf-8'
    );

    res.setHeader('Content-type', 'text/html');
    res.end(mainTxt);
});

// Category Text

app.get('/cat', (req, res) => {
    const catTxt = fs.readFileSync(
        path.join(__dirname, 'public', 'cat.html'),
        'utf-8'
    );

    res.setHeader('Content-type', 'text/html');
    res.end(catTxt);
});

// Error Text

app.get('*', (req, res) => {
    const errTxt = fs.readFileSync(
        path.join(__dirname, 'public', 'error.html'),
        'utf-8'
    );

    res.setHeader('Content-type', 'text/html');
    res.end(errTxt);
});
