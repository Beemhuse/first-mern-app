const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



if (process.env.NODE_ENV !== "production") {
    // console.log(process.env.DB_HOST)
    require("dotenv").config();
  }
const app = express()
// bodyparser middleware

app.use(bodyParser.json());

const books = require('./routes/api/books')

// DB config
const db = process.env.DB_HOST

// connect to mongo
mongoose.set('strictQuery', true);
mongoose
.connect(db).then(()=> console.log('MongoDb connected ...'))
.catch(err => console.log(err))

// port
const port = process.env.PORT;

// use routes
app.use('/api/books', books);


app.listen(port, () => console.log(`Server running on port ${port}`));
