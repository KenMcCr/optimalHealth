const express = require('express');
const app = express();
const Joi = require("joi");
const fs = require("fs");

const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running in port: ${port}`);
})