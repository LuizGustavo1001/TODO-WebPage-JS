const body = document.body;

/* DARK MODE BUTTONS */
const themeSwitchButtons = document.querySelectorAll(".dark-mode-icon");

themeSwitchButtons.forEach(button => {button.addEventListener("click", changeTheme);});

/* VERIFY THE LAST THEME */
const savedTheme = localStorage.getItem("theme");
if(savedTheme == "dark"){changeTheme()}
/* VERIFY THE LAST THEME */

function changeTheme(){
    body.classList.toggle("dark-mode");

    const darkModeIcon  = document.querySelectorAll(".dark");
    const lightModeIcon = document.querySelectorAll(".light");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light"); // True = dark, False = light

    darkModeIcon.forEach(icon  => {icon.classList.toggle("hidden-icon")});
    lightModeIcon.forEach(icon => {icon.classList.toggle("hidden-icon")});
}
/* DARK MODE BUTTONS */


/* CHANGE PAGE */
const leftPage  = document.querySelector(".left-item");
const rightPage = document.querySelector(".right-item");
const leftMain  = document.querySelector("#not-finished-tasks");
const rightMain = document.querySelector("#finished-tasks");

leftPage.addEventListener ("click", () =>  {changePage("toPending")});
rightPage.addEventListener("click", () =>  {changePage("toFinished")});

/* VERIFY THE LAST PAGE */
const savedPage = localStorage.getItem("page");
if(savedPage == "page2"){changePage('toFinished')}
/* VERIFY THE LAST PAGE */

function changePage(location){
    switch(location){
        case "toPending":{
            // change if page = not finished tasks
            if(rightPage.classList.contains("selected")){togglePages()}
            break;
        }
        case "toFinished":{
            // change if page = finished tasks
            if(leftPage.classList.contains("selected")){togglePages()}
            break;
        }
    }
    const isPage1 = body.classList.contains("page1");
    localStorage.setItem("page", isPage1 ? "page1" : "page2"); // True = page1, False = page2
}

function togglePages(){
    leftPage.classList.toggle("selected");
    rightPage.classList.toggle("selected");
    leftMain.classList.toggle("hidden-div");
    rightMain.classList.toggle("hidden-div");
    body.classList.toggle("page2");
    body.classList.toggle("page1");
}
/* CHANGE PAGE */


/* POP-UP */

/* OPEN POP-UP */
const addTaskButton     = document.querySelector(".add-task-icon");

const addTaskPopUp      = document.querySelector(".add-task");
const changeTaskPopUp   = document.querySelectorAll(".change-task");


addTaskButton.addEventListener("click", () => {displayPopUp("add-task")});
document.addEventListener("click", function(event) {
    const taskTextBox = event.target.closest(".task-text");
    if(taskTextBox){
        const taskId = taskTextBox.dataset.id;
        displayPopUp("change-task", taskId);
    }
});

function displayPopUp(popUpLabel, taskId = null){
    switch(popUpLabel){
        case "add-task":
            addTaskPopUp.classList.toggle("hidden-div");
            break;
        case "change-task":
            if (!taskId) return console.error("ERROR: Unknown selected task ID");
            const popup = document.querySelector(`.change-task[data-id="${taskId}"]`);
            if(popup){
                popup.classList.toggle("hidden-div")
            }else{
                console.error(`ERROR: Unknown selected task${taskId}.`)
            }
            break;
        default:
            console.log("ERRO: selected popup does not exists.");
            break;
    }
}
/* OPEN POP-UP */


/* CLOSE POP-UP*/
document.addEventListener("click", function(event){
    const exitButton = event.target.closest(".exit-button");
    if (!exitButton) return; // clicked on something thats is not the button
    const popup = exitButton.closest(".pop-up-container"); // popup closest to the clicked exitButton
    if (popup) popup.classList.add("hidden-div");
});
/* CLOSE POP-UP*/

/* POP-UP */