

fetch("tasks.json")
    .then(res => res.json())
    .then(data => {
        var tasksList = [];

        data.tasks.forEach(task => {
            tasksList.push({
                id: task.id,
                title: task.title,
                desc: task.desc,
                date: task.date,
                dateFinish: task.dateFinish,
                status: task.status
                
            });
        });

        
        console.log(tasksList);
        
        function displayTasks(){
            const notFinishedTaskIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 640 640'><path d='M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z'/></svg>";
            const finishedTaskIcon    = "<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 640 640'><path d='M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z'/></svg>";

            const finishedTaskList      = document.querySelector(".finished-list");
            const notFinishedTaskList   = document.querySelector(".not-finished-list");

            tasksList.forEach(task => {
                const taskBox           = document.createElement("li");
                taskBox.classList.add("task-box");

                const taskDiv           = document.createElement("div");
                const taskTitle         = document.createElement("h2");
                const taskDesc          = document.createElement("p");
                const taskDate          = document.createElement("p");
                const taskFinishDate    = document.createElement("p");
                
                taskTitle.textContent       = task.title;
                taskDesc.textContent        = task.desc;
                taskDate.innerHTML        = `<strong>Adicionado em: ${task.date}</strong>`;
                taskFinishDate.innerHTML  = `<strong>Finalizado em: ${task.dateFinish || ""}</strong>`;

                 if(task.status === "pending"){
                    taskBox.insertAdjacentHTML("afterbegin", notFinishedTaskIcon);
                    taskDiv.append(taskTitle, taskDesc, taskDate);
                    taskBox.append(taskDiv);
                    notFinishedTaskList.appendChild(taskBox);
                }else{
                    taskBox.insertAdjacentHTML("afterbegin", finishedTaskIcon);
                    taskDiv.append(taskTitle, taskDesc, taskFinishDate);
                    taskBox.append(taskDiv);
                    finishedTaskList.appendChild(taskBox);
                }
                console.log("Tasks exibidas com sucesso")

            });
        }
        displayTasks();
    });