const body          = document.body

const warning       = document.querySelector(".warning")

const popupBg       = document.querySelector(".popup-bg")
const popup         = popupBg.querySelector(".popup")

const suspMenuIcon  = document.querySelectorAll(".suspended-menu .icon-bg")
const suspMenuBg    = document.querySelector(".suspended-menu .selected-bg")

// icons
const sadFace = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`

const smileFace = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="currentColor"/>
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
`

const xIcon = `
    <svg class="close-icon" onclick="closePopUp()" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="x-icon">
        <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="currentColor"/>
    </svg>
`

const nfTaskIcon = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="nf-tasks-icon">
        <path d="M12.6761 19.9589C12.9508 20.0228 12.976 20.3827 12.7084 20.4719L11.1284 20.9919C7.15839 22.2719 5.06839 21.2019 3.77839 17.2319L2.49839 13.2819C1.21839 9.31187 2.27839 7.21187 6.24839 5.93187L6.77238 5.75834C7.17525 5.62493 7.56731 6.02899 7.45292 6.43766C7.39622 6.64023 7.34167 6.85164 7.28839 7.07188L6.30839 11.2619C5.20839 15.9719 6.81839 18.5719 11.5284 19.6919L12.6761 19.9589Z" fill="currentColor"/>
        <path d="M17.1702 3.20854L15.5002 2.81854C12.1602 2.02854 10.1702 2.67854 9.00018 5.09854C8.70018 5.70854 8.46018 6.44854 8.26018 7.29854L7.28018 11.4885C6.30018 15.6685 7.59018 17.7285 11.7602 18.7185L13.4402 19.1185C14.0202 19.2585 14.5602 19.3485 15.0602 19.3885C18.1802 19.6885 19.8402 18.2285 20.6802 14.6185L21.6602 10.4385C22.6402 6.25854 21.3602 4.18854 17.1702 3.20854ZM15.2902 13.3285C15.2002 13.6685 14.9002 13.8885 14.5602 13.8885C14.5002 13.8885 14.4402 13.8785 14.3702 13.8685L11.4602 13.1285C11.0602 13.0285 10.8202 12.6185 10.9202 12.2185C11.0202 11.8185 11.4302 11.5785 11.8302 11.6785L14.7402 12.4185C15.1502 12.5185 15.3902 12.9285 15.2902 13.3285ZM18.2202 9.94854C18.1302 10.2885 17.8302 10.5085 17.4902 10.5085C17.4302 10.5085 17.3702 10.4985 17.3002 10.4885L12.4502 9.25854C12.0502 9.15854 11.8102 8.74854 11.9102 8.34854C12.0102 7.94854 12.4202 7.70854 12.8202 7.80854L17.6702 9.03854C18.0802 9.12854 18.3202 9.53854 18.2202 9.94854Z" fill="currentColor"/>
    </svg>
`

const fTaskIcon = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="finished-tasks-icon">
        <g>
            <path d="M17.5821 6.95711C17.9726 6.56658 17.9726 5.93342 17.5821 5.54289C17.1916 5.15237 16.5584 5.15237 16.1679 5.54289L5.54545 16.1653L1.70711 12.327C1.31658 11.9365 0.683417 11.9365 0.292893 12.327C-0.0976311 12.7175 -0.097631 13.3507 0.292893 13.7412L4.83835 18.2866C5.22887 18.6772 5.86204 18.6772 6.25256 18.2866L17.5821 6.95711Z" fill="currentColor"/>
            <path d="M23.5821 6.95711C23.9726 6.56658 23.9726 5.93342 23.5821 5.54289C23.1915 5.15237 22.5584 5.15237 22.1678 5.54289L10.8383 16.8724C10.4478 17.263 10.4478 17.8961 10.8383 18.2866C11.2288 18.6772 11.862 18.6772 12.2525 18.2866L23.5821 6.95711Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath>
                <rect width="24" height="24" fill="none"/>
            </clipPath>
        </defs>
    </svg>
`

const emptySquare = `
    <svg class="empty" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="square-icon">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19.5C20 19.7761 19.7761 20 19.5 20H4.5C4.22386 20 4 19.7761 4 19.5V4.5Z" fill="currentColor"/>
    </svg>
`

const fullSquare = `
    <svg class="full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.11929 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11929 22 2 20.8807 2 19.5V4.5ZM18.787 9.57537C19.1767 9.18401 19.1753 8.55084 18.784 8.16116L18.0753 7.45558C17.684 7.0659 17.0508 7.06726 16.6611 7.45863L10.8895 13.2551L7.56845 9.98027C7.1752 9.59249 6.54205 9.59692 6.15427 9.99018L5.45213 10.7022C5.06436 11.0955 5.06879 11.7286 5.46204 12.1164L10.2003 16.7888C10.5922 17.1752 11.2228 17.1723 11.6111 16.7823L18.787 9.57537Z" fill="currentColor"/>
    </svg>
`


// details/summary animation
const details = document.querySelector(".menu-icon")
const summary = document.querySelector(".menu-icon summary")
const ul = document.querySelector(".menu-icon .menu-list")

summary.addEventListener("click", (e) => {
    e.preventDefault()

    if(details.open){
        ul.classList.remove("fade")
        ul.classList.add("fade-out")

        setTimeout(()=>{
            details.open = false
            ul.classList.remove("fade-out")
        }, 300)
    }else{
        ul.classList.add("fade")
        details.open = true
    }
})


// Popup functions
function closePopUp(){
    const closeIcon = document.querySelectorAll(".close-icon")
    closeIcon.forEach(icon => {
        let closestPopUp = icon.closest(".popup-bg")
        if(closestPopUp.classList.contains("active")){
            closestPopUp.classList.add("fade-out")

            setTimeout(() => {
                closestPopUp.classList.remove("active")
                closestPopUp.classList.remove("fade-out")
            }, 300)
        }
    })
}


fetch("/tasks")
    .then(res => res.json())
    .then(data => {
        const time = new Date()
        const day   = String(time.getDate()).padStart(2, "0")
        const month = String(time.getMonth() + 1).padStart(2, "0")
        const year  = time.getFullYear()

        const currentDate    = `${year}-${month}-${day}`
        const currentAltDate = `${year}/${month}/${day}`

        // tasks from json file will be stored here
        var tasksList = []

        data.tasks.forEach(task => {
            tasksList.push({
                id: task.id,
                title: task.title,
                desc: task.desc,
                date: task.date,
                altDate: task.altDate,
                endDate: task.endDate,
                altEndDate: task.altEndDate,
                status: task.status
            })
        })

        // default sort
        let lastSort = "latestDate"
        sortTasks(tasksList, lastSort)

        var taskAmount = tasksList.length

        // sort items event(sort menu list)
        const sortMenu = document.querySelector('.menu-list[data-id="sort"]')
        const sortItems = sortMenu.querySelectorAll("li")
        sortItems.forEach(item => {
            item.addEventListener("click", () => {
                const sortType = item.dataset.id || "latestDate"
                sortTasks(tasksList, sortType)
                lastSort = sortType
            })
        })

        // add task icon click event
        const addTasksIcon = document.querySelector(".add-tasks")
        addTasksIcon.addEventListener("click", () => {fillPopUp('add')})

        // toggle theme (dark mode - light mode)
        const toggleThemeIcon = document.querySelector(".toggle-theme")
        toggleThemeIcon.addEventListener("click", toggleTheme)

        function toggleTheme(){
            body.classList.toggle("dark-mode")

            const isDark = body.classList.contains("dark-mode")
            localStorage.setItem("theme", isDark ? "dark" : "light")

            const icons = toggleThemeIcon.querySelectorAll(".toggle-icon")
            icons.forEach(icon => {icon.classList.toggle("inactive")})
        }

        // Theme (local storage)
        const lastTheme = localStorage.getItem("theme") || "light"
        if(lastTheme == "dark"){toggleTheme()}

        // Page (local storage)
        let currentPage = localStorage.getItem("lastPage") || "1"
        togglePage(currentPage)
        suspMenuBg.dataset.id = currentPage

        // Display warning function
        function fillWarning(type, message){
            const item = document.createElement("div")
            item.classList.add("item")
            item.addEventListener("click", () => {
                item.classList.add("fade-out")
                setTimeout(() => {
                    item.remove()
                }, 500)
            })

            const warningText   = document.createElement("p")
            let warningIcon     = smileFace

            switch(type){
                case "error": 
                    warningIcon = sadFace
                    warningText.innerHTML += `Error: `
                    if(message == "emptyInput"){
                        warningText.innerHTML += `<strong>Some empty inputs detected while trying to add new tasks.</strong> `
                    }else{
                        warningText.innerHTML += `<strong>Server Error.</strong> `
                    }

                    break
                default:
                    item.classList.add("success")
                    if(message == "newTask"){
                        warningText.innerHTML += `<strong>New Task add successfully to the database!</strong> `
                    }else if(message == "modifySuccess"){
                        warningText.innerHTML += `<strong>Task data modified with success!</strong> `
                    }else if(message == "removeTask"){
                        warningText.innerHTML += `<strong>Task remove with success!</strong> `
                    }else if(message == "markTask"){
                        warningText.innerHTML += `<strong>Task marked with success. Check the other page to find it.</strong> `
                    }else{
                        warningText.innerHTML += `<strong>Server Error.</strong> `
                    }

                    break
            }

            warningText.innerHTML += `<em>Click here to close this warning</em>.`

            item.innerHTML += warningIcon
            item.insertAdjacentElement("beforeend", warningText)
            
            warning.insertAdjacentElement("beforeend", item)
            
            setTimeout(() => {
                item.classList.add("fade-out")
                setTimeout(() => {
                    item.remove()
                }, 500)
            }, 10000)
        }

        // Suspended menu animation + event
        suspMenuIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                const id    = icon.dataset.id
                currentPage = id
                togglePage(id)

                localStorage.setItem("lastPage", id)
                suspMenuBg.dataset.id = id
            })

            icon.addEventListener("mouseover", () => {
                suspMenuBg.dataset.id = icon.dataset.id
            })

            icon.addEventListener("mouseleave", () => {
                suspMenuBg.dataset.id = currentPage
            })
        })


        // toggle between not finished and finished tasks
        function togglePage(index){
            const headerTitle   = document.querySelector("header .title")
            const headerIcon    = headerTitle.querySelector(".icon")
            const headerText    = headerTitle.querySelector(".title-text")

            switch(index){
                case "1":
                    headerIcon.innerHTML = nfTaskIcon
                    headerText.innerHTML = `
                        <h1>Not Finished Tasks</h1>
                        <p>Click on a task to edit. Click on the + button to add tasks.</p>
                    `
                    addTasksIcon.classList.remove("inactive")

                    displayTasks("1")

                    break
                default:
                    headerIcon.innerHTML = fTaskIcon
                    headerText.innerHTML = `
                        <h1>Finished Tasks</h1>
                        <p>Click on a task to edit.</p>
                    `
                    addTasksIcon.classList.add("inactive")

                    displayTasks("2")

                    break
            }
        }

        
        // Display tasks at "main"
        function displayTasks(type){
            // clear main content
            const main = document.querySelector("main")
            main.innerHTML = ""
            
            switch(type){
                case "1": // pending
                    tasksList.forEach(task => {
                        if(task.status == "pending"){
                            const icon = document.createElement("span")
                            icon.classList.add("task-icon", "icon-bg")
                            icon.innerHTML += `${emptySquare} ${fullSquare}`

                            icon.addEventListener("click", () => {
                                const idContainer = icon.closest(".task")
                                const id = idContainer.dataset.id
                                if(id != null){
                                    modifyTask("mark", id)
                                }else{fillWarning("error", "server")}
                            })

                            const h1 = document.createElement("h1")
                            h1.innerHTML += `${task.title}`

                            const p = document.createElement("p")
                            p.classList.add("desc-text")
                            p.innerHTML += `${task.desc}`

                            const date = document.createElement("p")
                            date.innerHTML += `<em>Add at: <strong>${task.altDate}</strong></em>`

                            const desc = document.createElement("span")
                            desc.insertAdjacentElement("afterbegin", p)
                            desc.insertAdjacentElement("beforeend", date)

                            const text = document.createElement("span")
                            text.classList.add("task-text")
                            text.insertAdjacentElement("afterbegin", h1)
                            text.insertAdjacentElement("beforeend", desc)

                            const container = document.createElement("div")
                            container.classList.add("task")
                            container.dataset.id = task.id
                            container.insertAdjacentElement("afterbegin", icon)
                            container.insertAdjacentElement("beforeend", text)

                            main.insertAdjacentElement("afterbegin", container)
                        }
                    })

                    break
                case "2": // finished
                    tasksList.forEach(task => {
                        if(task.status == "finished"){
                            const icon = document.createElement("span")
                            icon.classList.add("task-icon", "icon-bg")
                            icon.innerHTML += `${fullSquare} ${emptySquare}`

                            icon.addEventListener("click", () => {
                                const idContainer = icon.closest(".task")
                                const id = idContainer.dataset.id
                                if(id != null){
                                    modifyTask("mark", id)
                                }else{fillWarning("error", "server")}
                            })

                            const h1 = document.createElement("h1")
                            h1.innerHTML += `${task.title}`

                            const p = document.createElement("p")
                            p.classList.add("desc-text")
                            p.innerHTML += `${task.desc}`

                            const date = document.createElement("p")
                            date.innerHTML += `<em>Concluded at: <strong>${task.altEndDate}</strong></em>`

                            const desc = document.createElement("span")
                            desc.insertAdjacentElement("afterbegin", p)
                            desc.insertAdjacentElement("beforeend", date)

                            const text = document.createElement("span")
                            text.classList.add("task-text")
                            text.insertAdjacentElement("afterbegin", h1)
                            text.insertAdjacentElement("beforeend", desc)

                            const container = document.createElement("div")
                            container.classList.add("task")
                            container.dataset.id = task.id
                            container.insertAdjacentElement("afterbegin", icon)
                            container.insertAdjacentElement("beforeend", text)

                            main.insertAdjacentElement("afterbegin", container)
                        }
                    })
                    
                    break
            }

            // task eventListener when click (just text field)
            const tasks = document.querySelectorAll("main .task")
            tasks.forEach(task => {
                const taskId = task.dataset.id
                const taskText = task.querySelector(".task-text")

                taskText.addEventListener("click", () => {
                    const taskTitle = taskText.querySelector("h1")
                    const taskDesc = taskText.querySelector(".desc-text")

                    fillPopUp('edit', taskId,{
                        Title: taskTitle.innerHTML,
                        Description: taskDesc.innerHTML
                    })
                })
            })
        }

        function checkForm(){
            const taskTitle = document.getElementsByName("title")[0]
            const taskDesc  = document.getElementsByName("desc")[0]
            
            if(taskTitle.value.length == 0){
               fillWarning("error", "emptyInput")
            }else{
                const data = [taskTitle.value, taskDesc.value]
                modifyTask("add", "", data)
            }
        }

        function sortTasks(taskList, filter){
            switch(filter){
                case "alfAsc":
                    taskList.sort((a,b) => b.title.localeCompare(a.title))

                    break
                case "alfDesc":
                    taskList.sort((a,b) => a.title.localeCompare(b.title))

                    break
                case "oldestDate":
                    taskList.sort((a,b) => new Date(a.date) - new Date(b.date))

                    break
                case "latestDate":
                    taskList.sort((a,b) => new Date(b.date) - new Date(a.date))

                    break
                case "oldestDateAlt":
                    taskList.sort((a,b) => new Date(a.dateFinish) - new Date(b.dateFinish))

                    break
                case "latestDateAlt":
                    taskList.sort((a,b) => new Date(b.dateFinish) - new Date(a.dateFinish))

                    break
                case "id":
                    taskList.sort((a,b) => Number(a.id) - Number(b.id))

                    break
                default:
                    console.error("error: Unknown selected sort type.")

                    break
            }
            displayTasks(localStorage.getItem("lastPage") || "1")
        }


        function modifyTask(action, id, data = null){
            // formatting
            sortTasks(tasksList, "id")

            let messageType = ""
            let message = ""

            switch(action){
                case "edit":
                    const popupForm = popup.querySelector("form")
                    const inputs = popupForm.querySelectorAll("input")

                    var newData = []

                    inputs.forEach(input => {newData.push(input.value)})

                    tasksList.forEach(task => {
                        if(task.id == id){
                            task.title = newData[0]
                            task.desc = newData[1]
                        }
                    })

                    messageType = "success"
                    message = "modifySuccess"

                    break
                case "remove":
                    tasksList = tasksList.filter((task) => task.id != id)

                    messageType = "success"
                    message = "removeTask"

                    break
                case "add":
                    let newId = String(taskAmount + 1)
                    
                    tasksList.push({
                        id: newId,
                        title: data[0],
                        desc: data[1],
                        date: currentDate,
                        altDate: currentAltDate,
                        endDate: "",
                        altEndDate: "",
                        status: "pending"
                    })

                    messageType = "success"
                    message = "newTask"

                    break
                case "mark":
                    tasksList.forEach(task => {
                        if(task.id == id){
                            console.log(task.id)
                            if(task.status == "pending"){
                                task.endDate = currentDate
                                task.altEndDate = currentAltDate
                                task.status = "finished"
                            }else{
                                task.endDate = ""
                                task.altEndDate = ""
                                task.status = "pending"
                            }
                        }
                    })
                    
                    messageType = "success"
                    message = "markTask"

                    break
                default:
                    messageType = "error"
                    message = "server"

                    break
            }
            
            if(message != "") fillWarning(messageType, message)
            sortTasks(tasksList, lastSort)
            closePopUp()
            updateJSON()
        }


        function fillPopUp(type, id = "", values = null){
            // clear popup content
            popup.innerHTML = ""

            const title = document.createElement("div")
            title.classList.add("title")

            const form = document.createElement("form")
            form.setAttribute("method", "POST")

            const submitBtn = document.createElement("button")
            submitBtn.setAttribute("type", "submit")
            submitBtn.classList.add("regular-button", "submitBtn")
            submitBtn.dataset.id = id

            const titleH1 = document.createElement("h1")
            const titleIcon = xIcon

            const removeBtn = document.createElement("button")
            removeBtn.classList.add("remove-task", "regular-button", "red")
            removeBtn.innerHTML += "Remove task"

            switch(type){
                case "add":
                    titleH1.innerHTML += `Add Task`

                    const titleInput = document.createElement("input")
                    titleInput.setAttribute("type", "text")
                    titleInput.setAttribute("name", "title")
                    titleInput.setAttribute("id", "ititle")
                    titleInput.setAttribute("placeholder", "Title here")
                    titleInput.classList.add("regular-input")

                    const descInput = document.createElement("input")
                    descInput.setAttribute("type", "text")
                    descInput.setAttribute("name", "desc")
                    descInput.setAttribute("id", "idesc")
                    descInput.setAttribute("placeholder", "Description here(optional)")
                    descInput.classList.add("regular-input")

                    form.insertAdjacentElement("beforeend", titleInput)
                    form.insertAdjacentElement("beforeend", descInput)

                    submitBtn.innerHTML = `Add`
                    submitBtn.addEventListener("click", checkForm)
                    break
                case "edit":
                    titleH1.innerHTML += "Modify Task"

                    if(values != null){
                        for (const [key, value] of Object.entries(values)){
                            const input = document.createElement("input")
                            input.setAttribute("type", "text")
                            input.setAttribute("name", `${key}`)
                            input.setAttribute("id", `i${key}`)
                            input.setAttribute("placeholder", `${key}`)
                            input.setAttribute("value", `${value}`)
                            input.classList.add("regular-input")
                            
                            form.insertAdjacentElement("beforeend", input)
                        }
                    }
                    submitBtn.innerHTML = `Save Changes`
                    submitBtn.addEventListener("click", () => {modifyTask("edit", submitBtn.dataset.id)})
                    removeBtn.addEventListener("click", () => {modifyTask("remove", submitBtn.dataset.id)})
                    break
            }

            title.insertAdjacentElement("afterbegin", titleH1)
            title.innerHTML += titleIcon

            popup.insertAdjacentElement("beforeend", title)
            popup.insertAdjacentElement("beforeend", form)
            popup.insertAdjacentElement("beforeend", submitBtn)
            if(type == "edit"){popup.insertAdjacentElement("beforeend", removeBtn)}
            popupBg.classList.add("active")
        }


        // Update JSON file with modified tasksList
        async function updateJSON(){
            sortTasks(tasksList, "id")

            taskAmount = tasksList.length

            fetch("/update-file", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(tasksList)
            })
            .then(res       => res.json())
            .then(response  => {console.log("Server Answer: ", response)})
            .catch(error    => console.log(error))

            // return to last selected sort type
            sortTasks(tasksList, lastSort)
        }
    })