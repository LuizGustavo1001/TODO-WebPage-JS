fetch("/tasks")
    .then(res => res.json())
    .then(data => {
        const time          = new Date();
        const currentDate   = time.getDate();
        const currentMonth  = time.getMonth();
        const currentYear   = time.getFullYear();

        const date    = `${currentYear}-${currentMonth}-${currentDate}`;
        const altDate = `${currentDate}/${currentMonth}/${currentYear}`;

        const finishedTaskList      = document.querySelector(".finished-list");
        const notFinishedTaskList   = document.querySelector(".not-finished-list");

        var tasksList = [];

        data.tasks.forEach(task => {
            tasksList.push({
                id: task.id,
                title: task.title,
                desc: task.desc,
                date: task.date,
                altDate: task.altDate,
                dateFinish: task.dateFinish,
                altDateFinish: task.altDateFinish,
                status: task.status
            });
        });
        var lastTaskId = tasksList.length; 
        
        // sort tasks
        // default sort
        sortTasks(tasksList, "alfDesc"); 

        function sortTasks(tasklist, filter){

            switch(filter){
                case "alfAsc":
                    tasklist.sort((a,b) => a.title.localeCompare(b.title));
                    break;

                case "alfDesc":
                    tasklist.sort((a,b) => b.title.localeCompare(a.title));
                    break;

                case "oldestDate":
                    tasklist.sort((a,b) => new Date(a.date) - new Date(b.date));
                    break;

                case "latestDate":
                    tasklist.sort((a,b) => new Date(b.date) - new Date(a.date));
                    break;

                case "oldestDateAlt":
                    tasklist.sort((a,b) => new Date(a.dateFinish) - new Date(b.dateFinish));
                    break;

                case "latestDateAlt":
                    tasklist.sort((a,b) => new Date(b.dateFinish) - new Date(a.dateFinish));
                    break;

                case "id":
                    tasklist.sort((a,b) => Number(a.id) - Number(b.id));
                    break;

                default:
                    console.error("ERROR: Unknown selected sort type.");
                    break;
            }
            displayTasks(tasksList);
        }
        
        // display task + edit popUp
        function displayTasks(list){
            const notFinishedTaskIcon = "<svg class='conclude-task-icon' xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 640 640'><path d='M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z'/></svg>";
            const exitIcon            = "<svg class='size-6 exit-button close-change-task' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path fill-rule='evenodd' d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z' clip-rule='evenodd' /></svg>";
            const finishedTaskIcon    = "<svg class='undo-conclude-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z'/></svg>"
            
            // reset task box content
            finishedTaskList.innerHTML      = "";
            notFinishedTaskList.innerHTML   = "";

            // reset popups on HTML
            const oldPopUp = document.querySelectorAll(".change-task");
            oldPopUp.forEach(popUp => {popUp.remove()});

            var pendingAmount  = 0;
            var finishedAmount = 0;

            list.forEach(task => {
                const popUp = `
                    <div class="pop-up-container change-task hidden-div" data-id="${task.id}">
                        <div class="pop-up-box">
                            <div class="pop-up-title">
                                <p>Alterar dados de uma tarefa</p>
                                ${exitIcon}
                            </div>

                            <div class="pop-up-main">
                                <div class="pop-up-input">
                                    <label for="itaskName${task.id}">Título: <small>Máximo 40 caracteres</small></label>
                                    <input type="text" name="taskName${task.id}" id="itaskName${task.id}" placeholder="Máximo 40 caracteres" maxlength="40" value="${task.title}">
                                </div>

                                <div class="pop-up-input descInput">
                                    <label for="itaskDesc${task.id}">Descrição: <small>Máximo 300 caracteres</small> </label>
                                    <input type="text" name="taskDesc${task.id}" id="itaskDesc${task.id}" class="" placeholder="Máximo 300 caracteres" maxlength="300" value="${task.desc}">
                                </div>

                                <div class="pop-up-buttons">
                                    <button class="submit-button">Confirmar Alteração</button>
                                    <button class="remove-button">Remover Tarefa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                body.insertAdjacentHTML("afterbegin", popUp);

                const taskBox = document.createElement("li");
                taskBox.classList.add("task-box");
                taskBox.dataset.id = task.id;

                const taskDiv           = document.createElement("div");
                taskDiv.classList.add("task-text");
                taskDiv.dataset.id = task.id;

                const taskTitle         = document.createElement("h2");
                const taskDesc          = document.createElement("p");
                const taskDate          = document.createElement("p");
                const taskFinishDate    = document.createElement("p");
                
                taskTitle.textContent       = task.title;
                taskDesc.textContent        = task.desc;
                taskDate.innerHTML          = `<strong>Adicionado em: ${task.altDate}</strong>`;
                taskFinishDate.innerHTML    = `<strong>Finalizado em: ${task.altDateFinish || ""}</strong>`;

                if(task.status === "pending"){
                    taskBox.insertAdjacentHTML("afterbegin", notFinishedTaskIcon);
                    taskDiv.append(taskTitle, taskDesc, taskDate);
                    taskBox.append(taskDiv);
                    notFinishedTaskList.appendChild(taskBox);
                    pendingAmount++;
                }else{
                    taskBox.insertAdjacentHTML("afterbegin", finishedTaskIcon);
                    taskDiv.append(taskTitle, taskDesc, taskFinishDate);
                    taskBox.append(taskDiv);
                    finishedTaskList.appendChild(taskBox);
                    finishedAmount++;
                }

                console.log("Tasks loaded with success.")
            });

            // open pop up event
            document.addEventListener("click", function(event) {
                const taskTextBox = event.target.closest(".task-text");
                if(taskTextBox){
                    const taskId = taskTextBox.dataset.id;
                    displayPopUp("change-task", taskId);
                }
            });

            // remove task event
            const removeTaskButton = document.querySelectorAll(".remove-button");
            removeTaskButton.forEach(button => {
                const taskId = button.closest(".pop-up-container").dataset.id;
                button.addEventListener("click", () => {modifyTask("remove", taskId)});
            });
            
            // change task event
            const changeTaskButton = document.querySelectorAll(".submit-button");
            changeTaskButton.forEach(button => {
                const taskId = button.closest(".pop-up-container").dataset.id;
                button.addEventListener("click", () => {modifyTask("mod_title_desc", taskId)});
            });

            // complete task
            const undoConcludeTaskIcon = document.querySelectorAll(".undo-conclude-icon");
            const concludeTaskIcon     = document.querySelectorAll(".conclude-task-icon");

            undoConcludeTaskIcon.forEach(icon => {
                icon.addEventListener("click", () => {
                    const taskId = icon.closest(".task-box").dataset.id;
                    modifyTask("mod_status", taskId, "pending");
                });
            });

            concludeTaskIcon.forEach(icon => {
                icon.addEventListener("click", () => {
                    const taskId = icon.closest(".task-box").dataset.id;
                    modifyTask("mod_status", taskId, "finished");
                });
            });

            if(pendingAmount == 0){
                notFinishedTaskList.innerHTML = "<p style='text-align:center'>Parabéns, não há nenhuma tarefa pendente!</p>";    
            }else if(finishedAmount == 0){
                finishedTaskList.innerHTML = "<p style='text-align:center;'>Ainda não há nenhuma tarefa concluída.</p>"
            }
        }

        /* SORT OPTIONS */
        const sortItem = document.querySelectorAll(".sort-item");
        sortItem.forEach(sort => {
            const filterId = sort.dataset.id;
            sort.addEventListener("click", () => {sortTasks(tasksList, filterId)});
        });
        /* SORT OPTIONS */

        // require update file on backend
        function sendUpdate(dataList){
            sortTasks(dataList, "id");

            fetch("/update-file", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataList)
            })
            .then(res       => res.json())
            .then(response  => {console.log("Server Answer: ", response)})
            .catch(error    => console.log(error));
        }

        /* ADD NEW TASK */
        const addTaskButton = document.querySelector(".add-button");
        addTaskButton.addEventListener("click", addTask);

        function addTask(){
            const taskName      = document.querySelector("#itaskName");
            const taskNameValue = String(taskName.value);

            const taskDesc      = document.querySelector("#itaskDesc");
            const taskDescValue = String(taskDesc.value);
            
            const id = `${lastTaskId+1}`;
            lastTaskId++;

            // add to taskList
            tasksList.push({
                id: id,
                title: taskNameValue,
                desc: taskDescValue,
                date: date,
                altDate: altDate,
                dateFinish: "",
                altDateFinish: "",
                status: "pending",
            });

            console.log("New task add with success.");
            taskName.value = '';
            taskDesc.value = '';

            // update tasks.json
            displayPopUp("change-task", taskId);
            displayTasks(tasksList);
            sendUpdate(tasksList);
        }
        /* ADD NEW TASK */

        function modifyTask(action, taskId, changeTo = null){
            tasksList.forEach((task, index) => {
                if(task.id == taskId){
                    switch(action){
                        case "mod_title_desc":
                            var newTitleInput   = document.querySelector(`#itaskName${taskId}`);
                            var newTitle        = String(newTitleInput.value);

                            var newDescInput    = document.querySelector(`#itaskDesc${taskId}`);
                            var newDesc         = String(newDescInput.value);

                            tasksList[index].title = newTitle;
                            tasksList[index].desc  = newDesc;

                            console.log("Task changed with success");
                            alert(`Título e/ou  descrição da tarefa de Id = ${index} alterado com sucesso.`);
                            break;
                        
                        case "remove":
                            tasksList.splice(index, 1); // index and amount
                            console.log("Task removed with success");

                            alert(`Tarefa de Id = ${index} removida com sucesso.`);
                            break;
                        
                        case "mod_status":
                            tasksList[index].status         = changeTo;
                            tasksList[index].dateFinish     = date;
                            tasksList[index].altDateFinish  = altDate;

                            console.log("Task status changed with success");
                            break;
                    }
                }
            })
            displayPopUp("change-task", taskId);
            displayTasks(tasksList);
            sendUpdate(tasksList);
        }
    })
    .catch(error => console.error(error));