require("dotenv").config({
    path: ".env"
});

// envdata.js
// This file is used to store login variables for Cypress tests
var envData = {
    username: process.env.USERNAME,   
    password: process.env.PASSWORD,
    baseUrl: process.env.BASEURL
    };

module.exports = envData;