const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

   const productRoute = require('./routes/product.route');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/sampleDB', (err) => {
        if(!err) {
            console.log('MongoDB connection success.');
        } else {
            console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        }
    });
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });