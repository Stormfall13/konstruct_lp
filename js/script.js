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


// Функция-обработчик появления элемента
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем класс с анимацией
        entry.target.classList.add('animate');
        
        // Если анимация однократная, прекращаем наблюдение
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Создаем наблюдатель
  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.5 // Срабатывает, когда элемент виден на 50%
  });
  
  // Находим все элементы, которые нужно анимировать
  const elementsToAnimate = document.querySelectorAll('.header, .ourStory, .capab, .bgbanner');
  elementsToAnimate.forEach(element => observer.observe(element));