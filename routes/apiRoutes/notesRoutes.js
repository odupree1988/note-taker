const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const data = require("../../data/db.json");
const { v1: uuidv1 } = require("uuid");

router.get("/notes", (req, res) => {
  let results = data;
  res.json(results);
});

router.post("/notes", (req, res) => {
  var { title, text } = req.body;
  var newNote = { title, text, id: uuidv1() };

  data.push(newNote);
  fs.writeFile(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify(data),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  const filteredNotes = data.filter((note) => note.id !== req.params.id);

  fs.writeFile(
    path.join(__dirname, "../../data/db.json"),
    JSON.stringify(filteredNotes),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  res.send("deleted");
});

module.exports = router;
