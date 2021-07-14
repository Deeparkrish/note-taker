const path = require('path');
const router = require('express').Router();


//GEt method to respond with notes.html file 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

//GET method to respond with index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports =router;