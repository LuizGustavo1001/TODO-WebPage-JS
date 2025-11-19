// js code to edit json file using express
const express   = require("express");
const fs        = require('fs');
const path      = require("path");
const app       = express();
const PORT      = 3000;

const fileName = "tasks.json";

const filePath = path.join(__dirname, fileName);

app.use(express.json()); // allows recieve json file at POST
app.use(express.static(__dirname + '/../public'));

// read file
app.get("/tasks", (req, res) => {
    fs.readFile(filePath, "utf8", (error, data) => {
        if(error){
            console.error(error);
            return res.status(500).json({error: "Error trying to read the file."});
        }
        res.json(JSON.parse(data)); // parse json data into js list
    });
});

// update file
function updateFile(dataList){
    const taskList = {tasks: []};

    dataList.forEach(newTask => {taskList.tasks.push(newTask)});

    const jsonData = JSON.stringify(taskList, null, 2); // parse to json data
    
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

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));