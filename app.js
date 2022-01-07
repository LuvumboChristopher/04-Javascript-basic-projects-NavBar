const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

btn.addEventListener('click', ()=> {
    
    //Version Larga de como hacer aparecer un menu
    
    if(!links.classList.contains('show-links')){
        links.classList.add('show-links')
    } else {
        links.classList.remove('show-links');
    }
     
    //Version corta
    //inks.classList.toggle('show-links');
})