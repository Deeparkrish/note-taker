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
  let noteId = Number(req.params.id);

  if (noteId < data.length) {
    res.json(data[noteId]);
  } else {
    res.send(404);
  }
});

//Deleting a note by id 
router.delete("/notes/:id",(req,res)=>{

  console.log("Deleting note");
  let notesId = req.params.id ;
  let newId =0;
  // Delete  by id , check if  the id  in the file 
  const found = data.filter((note) => note.id !== notesId)[0];
  if(found){
  //  filter the data to contain all notes except the one whose id matches 
  data = data.filter(thisNote=> {
    return thisNote.id != notesId;
 });
 // reassign the id to the new data 
  for(thisNote of data){
        thisNote.id = newId;
        newId++;
  }
  //write in the file 
  fs.writeFileSync("./db/db.json", 
                    JSON.stringify(data),function (err){if (err)throw(err)});
  return res.json(data);
  console.log("Successfully deleted!!")
}
else {
  console.log("Id not found in the file!")
  res.status(404).send('id not found');

}
});


module.exports =router;