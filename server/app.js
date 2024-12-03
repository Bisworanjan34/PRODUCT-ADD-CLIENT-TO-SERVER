let express = require('express');
let cors = require('cors');
let { MongoClient } = require('mongodb');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let url = 'mongodb://localhost:27017';
let mongocl = new MongoClient(url);
let dbname = 'products';
let colname = 'productItems';

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from uploads directory

// Import API endpoints
let { getfun,moreinfo } = require('./apis/getdata');
let { postfun } = require('./apis/postdata');
let {deletefun}=require('./apis/deletedata')

// MongoDB connection
mongocl
  .connect()
  .then(() => {
    console.log('Connected to MongoDB');
    getfun(app, dbname, colname, mongocl);
    postfun(app, dbname, colname, mongocl);
    deletefun(app,dbname,colname,mongocl)
    moreinfo(app,dbname,colname,mongocl)
  })
  .catch((err) => console.log(err, 'Something went wrong'));

// Start server
app.listen(2025, () => console.log('Server started on port 2025'));
