const express = require('express');

const app = express();

app.use(()=>{
    console.log('Hello Server...');
    console.log('Hallo Semua...');
})

app.listen(4000);