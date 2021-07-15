//Add dependencies 
const fs= require('fs')
const router = require('express').Router();
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

function validateNote(note){

  if (!note.title || typeof note.title !== 'string') {
      return false;
  }
  if (!note.text || typeof note.text !== 'string') {
      return false;
  }
  return true;
}

//  return all  saved notes
router.get('/notes',(req,res)=>{

    if(req.query){
        res.json(data); //returned saved notes as json 
    }
    else {
    res.send(404); } // not found 
});

//function  to set up a route on our server that accepts data to be stored server-side.
router.post('/notes',(req,res)=>{
    // req.body is where our incoming content will be
    // set id based on what the next index of the array will be
    req.body.id = data.length.toString(); //assign a unique id 

    // add the new note created  
    data.push(req.body) ; 
    // making sure correct data is written into 
    if (!validateNote(req.body)) {
    res.status(400).send("The notes is not correct.");
  } else {  
    // write it in  to the  file 
    fs.writeFileSync("./db/db.json",
      // converts data into json string .
      JSON.stringify(data),function (err){if (err)throw(err)}
      );
      res.json(data);  //json response the note added.
  }

});

router.get("/notes/:id", (req, res) => {
  // const result = findNoteById(req.params.id, data);
  let noteId = Number(req.params.id);

  if (noteId < data.length) {
    res.json(data[noteId]);
  } else {
    res.send(404);
  }
});

// Delete  by id , find the id in the file and remove the corresponding data. 
// filter the rest .
//  // const result = data.filter((note) => note.id !== noteId)[0];

// write to file again 

module.exports =router;