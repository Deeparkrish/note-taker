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

function writeToFile (data){
   //write in the file 
   fs.writeFileSync("./db/db.json", 
   JSON.stringify(data),function (err){if (err)throw(err)});

}

//  return all  saved notes
router.get('/notes',(req,res)=>{

    if(req.query){
        res.json(data); //returned saved notes as json 
    }
    else {
    res.status(404).send("File is not found or empty"); } // not found 
});

//function  to set up a route on our server that accepts data to be stored server-side.
router.post('/notes',(req,res)=>{
    // req.body is where our incoming content will be
    req.body.id = data.length.toString(); //assign a unique id 
    // add the new note created  
    data.push(req.body) ; 
    // making sure correct data is written into 
    if (!validateNote(req.body)) {
    //Notes not formatted correctly
    res.status(400).send("The notes is not correct.");
  } else {  
    // write it in  to the  file 
    writeToFile(data);
    //json response the note added.
    return res.json(data);
  }

  });

//Get data by id 
router.get("/notes/:id", (req, res) => {
  let notesId = Number(req.params.id);
  // check if notesId is postive and within the data range 
  if ((notesId < data.length)&& (notesId > 0)) {
    res.json(data[notesId]);
  } else {
    res.status(404).send("Invalid id /id not found!");
  }
});

//Deleting a note by id 
router.delete("/notes/:id",(req,res)=>{

  let notesId = req.params.id ;
  let newId =0;
  // Delete  by id , check if  the id  in the file 
  let found = data.findIndex((note) => note.id == notesId);
  if(found != -1){
  //  filter the data to contain all notes except the one whose id matches 
  data = data.filter(thisNote=> {
    return thisNote.id != notesId;
 });
 // reassign the id to the new data 
  for(thisNote of data){
        thisNote.id = newId;
        newId++;
  }
  writeToFile(data);
  
  return res.json({
    message : 'Successfully deleted!',
    id :req.params.id,
  });
}
else {
  res.status(404).send('Invalid id /id not found');
}
});


module.exports =router;