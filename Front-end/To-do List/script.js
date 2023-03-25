// Variaveis para o cronometro
let timeStart;
let timerInterval;
const timer = document.querySelector("div#timer")
// Variáveis para as tarefas
const taskContainer = document.querySelector("div#task-container")
const taskInput = document.querySelector("input#input-task")
const taskButton = document.querySelector("button#submit-task")
const taskList = document.querySelector("ul#task-list")
const timerLabelContent = document.querySelector("div#timer")
const deleteAllTasks = document.createElement("button")
// Variavel do tema 
const theme = document.querySelector("button#theme-toggle")
// Variaveis do historico 
const messageLabel = document.querySelector("div#messages")
const messageContainer = document.querySelector("div#messages-container")
const deleteAllMessages = document.createElement("button")
//cronometro
function timerOn() {
    timeStart = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000)
}
function updateTimer() {
    const timeElapsed = Date.now() - timeStart
    const seconds = Math.floor(timeElapsed / 1000)
    const minutes = Math.floor(seconds / 60)
    const hour = Math.floor(minutes / 60)
    // sempre que chegar em 60 vai zerar
    const remainingSeconds = seconds % 60
    const remainingMinutes = minutes % 60
    // se quiser aplicar as horas: const remainingHour = hour % 24
    timer.textContent = `${hour.toString().padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    timer.setAttribute("id", "timer")
}
function timerOff() {
    clearInterval(timerInterval)
    timer.textContent = ""
}

// tarefas, mensagens e etc 
function createTask(task) {
    const listElement = document.createElement("li")
    const deleteTask = document.createElement("button")
    const taskCheck = document.createElement("input")
    const taskText = document.createElement("span")
    let idTaskCheck = 0
    const message = document.createElement("li")
    taskText.textContent = task.content
    taskCheck.setAttribute("type", "checkbox")
    taskCheck.setAttribute("id", `${idTaskCheck}`)
    idTaskCheck++
    deleteTask.textContent = "✕"
    // checkbox
    taskCheck.addEventListener("change", function () {
        if (taskCheck.checked) {
            listElement.classList.add("completed")
            if (timerLabelContent.textContent === "") {
                message.textContent = `Você completou a tarefa "${taskText.textContent}"`
                messageLabel.appendChild(message)
                history()
            }
            else if (timerLabelContent.textContent !== "") {
                message.textContent = `Você completou a tarefa "${taskText.textContent}" em ${timerLabelContent.textContent}`
                messageLabel.appendChild(message)
                history()
            }
        } else {
            listElement.classList.remove("completed")
        }
    })

    // Delete
    deleteTask.addEventListener("click", function () {
        taskList.removeChild(listElement);
        if (taskList.childElementCount === 0){
            deleteAllTasks.style.display = "none"
        }
    })
    listElement.appendChild(taskCheck)
    listElement.appendChild(taskText)
    listElement.appendChild(deleteTask)

    return listElement
}

taskButton.addEventListener("click", function () {
    const taskContent = taskInput.value
    // Usuario não pode informar um valor vazio
    if (taskContent === "") {
        alert("Insira um valor")
        return
    }
    else {
        const task = { content: taskContent }
        const taskElement = createTask(task)
        taskList.appendChild(taskElement)
        deleteAll()
        taskInput.value = ""
    }
})


theme.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "");
    }
    else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
})

deleteAllMessages.textContent = "Excluir Histórico"
deleteAllMessages.setAttribute("class", "deleteAll")
messageContainer.appendChild(deleteAllMessages)
if (messageLabel.childElementCount === 0) {
    deleteAllMessages.style.display = "none"
}
function history() {
    // Delete historico
    deleteAllMessages.style.display = "inline"
    deleteAllMessages.addEventListener("click", function () {
        while (messageLabel.firstChild) {
            messageLabel.removeChild(messageLabel.firstChild)
        }
        deleteAllMessages.style.display = "none"
    })
}

deleteAllTasks.textContent = "Excluir tudo"
deleteAllTasks.setAttribute("class", "deleteAll")
taskContainer.appendChild(deleteAllTasks)
if (taskList.childElementCount === 0) {
    deleteAllTasks.style.display = "none"
}
function deleteAll() {
    // Delete de todas as tasks 
    deleteAllTasks.style.display = "inline"
    deleteAllTasks.addEventListener("click", function() {
        while (taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }
        deleteAllTasks.style.display = "none"
    })
}

