// js to edit json file using express
// const { log }   = require("console");
const express   = require("express");
const fs        = require('fs');
const path      = require("path");
const app       = express();
const PORT      = 3000;

const filePath = path.join(__dirname, "tasks.json");

app.use(express.json()); // allows recieve json file at POST
app.use(express.static(__dirname + '/../public'));

/* READ FILE */
app.get("/tasks", (req, res) => {
    fs.readFile(filePath, "utf8", (error, data) => {
        if(error){
            console.error(error);
            return res.status(500).json({error: "Error trying to read the file."});
        }
        res.json(JSON.parse(data)); // parse json data into js list
    });
});
/* READ FILE */


/* UPDATE FILE */
function updateFile(dataList){
    const tasks = { tasks: [] };

    dataList.forEach(newTask => { tasks.tasks.push(newTask) });

    const jsonData = JSON.stringify(tasks, null, 2);
    fs.writeFile(filePath, jsonData, (error) => {
        if(error) console.error(error);
        console.log("File updated with success.");
    });
}

// "call" updateFile on FrontEnd
app.post("/update-file", (req, res) => {
    const data = req.body; // recieve data from frontend
    updateFile(data);
    res.json({message: "File updated."})
});
/* UPDATE FILE */

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));