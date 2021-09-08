export function MyTasks(){
    let myTemp = '<div>tasks</div>' /*`
    <section>
    <div class="tasks-header">
    <i class="tasks-icon tasks-header-img inline-block"></i>
    <p class="tasks-header-word inline-block">Tasks</p>
    </div>
    <input type="text" onblur="DisplayTasks(event)" class="tasks-input">
    </section>
    <section id="tasks"></section>
    
    `*/
    return myTemp
}
function DisplayTasks(event){
    let tasksArray = []
    const tasks = document.getElementById("tasks")
    tasksArray.push(event.target.value)
    tasks.innerHTML += `<div>${event.target.value}</div>`
}