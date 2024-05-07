

let btn = document.getElementById('burger-btn');
let nav = document.getElementById('header-nav');


btn.onclick = () =>{
    if(nav.className.includes('show')){
        nav.className = 'header-nav'
    } else{
        nav.className = 'header-nav header-nav-show'
    }
}
