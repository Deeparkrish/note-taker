
const express = require('express'); //dependencies
const PORT = process.env.PORT || 3001;
const app = express(); // instantiate the server
const { db } = require('./db/db.json'); // data from db.json
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//Middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// to include assets like css for html-to access front end code
app.use(express.static('public'));


// Api and html routes path usage
app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

//make the server listen at a port 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


