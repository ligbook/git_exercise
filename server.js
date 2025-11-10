console.log("Server is starting...");
try {
    express = require('express');
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    cors = require('cors');
    dotenv = require('dotenv');
} catch (e) {
    console.error("Error loading modules:", e);
    process.exit(1);
}