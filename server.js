const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express()
// bodyparser middleware

app.use(bodyParser.json());

const items = require('./routes/api/items')

// DB config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose.set('strictQuery', true);
mongoose
.connect(db).then(()=> console.log('MongoDb connected ...'))
.catch(err => console.log(err))

const port = process.env.PORT || 5000;

// use routes
app.use('/api/items', items);


app.listen(port, () => console.log(`Server running on port ${port}`));
