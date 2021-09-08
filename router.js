//const masterContainer = document.getElementById("masterContainer")
import { MyTasks } from "./pages/tasks.js"
import { MyReminders } from "./pages/reminders.js"
import { App } from "./app.js"

/*function test(){
    masterContainer.innerHTML = "test"
}*/

window.onhashchange = function(){
    App()
}
/*function Render(){
    masterContainer.innerHTML = MyRouter()
}*/

export function MyRouter(){
    let chosenComponent;
    let hash = window.location.hash;
    let router = [
        {path: "#tasks", component: MyTasks()},
        {path: "#reminders", component: MyReminders()}
    ]
    for(let route of router){
        if(hash == route.path){
            chosenComponent = route.component;
        }
    }
    return chosenComponent
}
//Render() //to load the first one after refreshing before changing it
App()