const express = require('express');

const app = express();

console.log('Testing Github')

app.listen(3000, () => {
    console.log('The server is running in the port 3000');
});