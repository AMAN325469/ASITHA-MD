const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=X7QiGQxQ#wwHA3gJzc-UmpjiE1BJQ7-2vXJhfZxhyL6gAWnMd5nQ",
MONGODB: process.env.MONGODB || "mongodb+srv://adamlevingaming:adamlevingaming@harshita.0m4yi.mongodb.net/?retryWrites=true&w=majority&appName=HARSHITA",//enter mongo db url
};
