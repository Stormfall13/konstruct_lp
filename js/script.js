const openBurger = document.querySelector('.burger')
const closeMenuBurger = document.querySelector('.close__menu')
const linkMenu = document.querySelectorAll('.link__menu')
const menu = document.querySelector('.underheader__menu')

console.log(linkMenu);


openBurger.addEventListener('click', () => {
    menu.style.transform = 'translate(0vh)';
    
})

closeMenuBurger.addEventListener('click', () => {
    menu.style.transform = '';
})


for(let linksMenu of linkMenu){
    linksMenu.addEventListener('click', () => {
        menu.style.transform = '';
    })
}


