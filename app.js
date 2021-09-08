const masterContainer = document.getElementById("masterContainer")
import { MyRouter } from "./router.js"
export const App = ()=>{
    masterContainer.innerHTML = MyRouter();
}