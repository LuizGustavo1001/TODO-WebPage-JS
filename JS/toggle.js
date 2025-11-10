const body = document.body;

/* DARK MODE BUTTONS */
const themeSwitchButtons = document.querySelectorAll(".dark-mode-icon");

themeSwitchButtons.forEach(button => {
    button.addEventListener("click", changeTheme);
});

/* VERIFY THE LAST THEME */
const savedTheme = localStorage.getItem("theme");
if(savedTheme == "dark"){
    changeTheme();
}
/* VERIFY THE LAST THEME */

function changeTheme(){
    const darkModeIcon = document.querySelectorAll(".dark");
    const lightModeIcon = document.querySelectorAll(".light");

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light"); // True = dark, False = light

    darkModeIcon.forEach(icon => {
        icon.classList.toggle("hidden-icon");
    });
    lightModeIcon.forEach(icon => {
        icon.classList.toggle("hidden-icon");
    });
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
if(savedPage == "page2"){
    changePage('toFinished');
}
/* VERIFY THE LAST PAGE */

function changePage(location){
    switch(location){
        case "toPending":{
            // change if page = not finished tasks
            if(rightPage.classList.contains("selected")){
                togglePages();
            }
            break;
        }
        case "toFinished":{
            // change if page = finished tasks
            if(leftPage.classList.contains("selected")){
                togglePages();
            }
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
const changeTaskPopUp   = document.querySelector(".change-task");

addTaskButton.addEventListener("click", () => {displayPopUp("add-task")});

function displayPopUp(popUpLabel){
    switch(popUpLabel){
        case "add-task":{
            addTaskPopUp.classList.toggle("hidden-div");
            break;
        }
        default:{
            console.log("ERRO: selected popup does not exists.");
            break;
        }
    }
}
/* OPEN POP-UP */


/* CLOSE POP-UP*/
const popUpExitButton = document.querySelectorAll(".exit-button");
popUpExitButton.forEach(button => {button.addEventListener("click", closePopUp)});

const popUpBox = document.querySelectorAll(".pop-up-container");

function closePopUp(){
    popUpBox.forEach(popUp => {
        // hide the popup that are displayed
        if(! popUp.classList.contains("hidden-div")){
            popUp.classList.add("hidden-div");
        }
    });
}
/* CLOSE POP-UP*/

/* POP-UP */