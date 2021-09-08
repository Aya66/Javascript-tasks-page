const sideMenu = document.getElementById('sideMenu');
const asideObj = {
    menuState : true,
    navHead : {
        appLogo: 'header-icon1',
        secondIcon: 'menu-icon',
        noName: '',
        appName: 'Reminders'
    },
    navItems : [
        { icon: 'prayer-icon', title: 'Prayer', route: '#prayer', active: false},
        { icon: 'dashboard-icon', title: 'Dashboard', route: '#dashboard', active: false},
        { icon: 'tasks-icon', title: 'Tasks', route: '#tasks', active: false},
        { icon: 'reminders-icon', title: 'Reminders', route: '#reminders', active: false},
        { icon: 'my-pocket-icon', title: 'My Pocket', route: '#mypocket', active: false},
        { icon: 'categories-icon', title: 'Categories', route: '#categories', active: false},
        { icon: 'archive-icon', title: 'Archive', route: '#archive', active: false}
    ]
}

//for selecting the list items and fixing them when reloaded (onclick)
function toggelActive(index){
    //puts all of the list items active as false
    for (let item of asideObj.navItems){
        item.active = false
    }
    //puts the one that was clicked on as true
    asideObj.navItems[index].active = true
    //renders whole page to update
    componentRender() 
}

//gets the list item selected and puts its route (onclick)
function routing(index){
    let route = asideObj.navItems[index].route
    window.location.hash = route
}

//keeps the item selected
function readyRouter(){
    //loops through array to find the hash selected and calls toggleActive for this index chosen to keep it blue
    for (let [index, item] of asideObj.navItems.entries()){
        if(window.location.hash == item.route){
            toggelActive(index)
        }
    }
}
console.log(window.location.hash)

function openClosemenu(){
    let menuState = asideObj.menuState
    if(menuState == true){
        sideMenu.style.width = "90px"
        asideObj.menuState = false
        componentRender()
    }
    else if(menuState == false){
        sideMenu.style.width = "462px"
            asideObj.menuState = true
            setTimeout(function(){
                componentRender()
            },400)
    }
}

console.log(asideObj.menuState)
function sideMenuTemp(){
    let myTemp = `
    <section>
        <header class="side-header side-header-shadow d-flex">
            <div class="header-icon1 ${asideObj.menuState ? false : 'd-none'}"></div>
            <div class="reminder-word side-fonts overflow-hidden">${asideObj.menuState ? asideObj.navHead.appName : ''}</div>
            <div onclick="openClosemenu()" class="header-icon2 d-inline-block mr-auto mx-4"></div>
        </header>
        <ul>
        `
        for (let [index, item] of asideObj.navItems.entries()){
            myTemp += `<li onclick="routing(${index}); toggelActive(${index});" class="${item.active ? 'side-selector-colour' : false} mouse-pointer align-items-center">
                <div class="${item.icon} side-list-icons "></div>
                <div class=" side-list-words side-fonts">${asideObj.menuState ? item.title : ''}</div>
            </li>`
        }
        myTemp += `
                        </ul>
                        <div></div>
                    </section>
                `
    return myTemp;
}
//renders whole page
function componentRender(){
    sideMenu.innerHTML = sideMenuTemp()
}
componentRender()
readyRouter()