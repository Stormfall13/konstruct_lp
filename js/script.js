const openBurger = document.querySelector('.burger')
const closeMenuBurger = document.querySelector('.close__menu')
const linkMenu = document.querySelectorAll('.link__menu')
const menu = document.querySelector('.underheader__menu')


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


const buttonHoverAminAll = document.querySelectorAll('.capab__wrapp > a, .bgbanner__wrapp > a, .footer__form-btn')
for(let buttonAll of buttonHoverAminAll){
  buttonAll.addEventListener('mouseout', () => {
    buttonAll.style.boxShadow = ''
  })
  buttonAll.addEventListener('mouseover', () => {
    buttonAll.style.boxShadow = '4px 4px 2px 2px #afe8ff'
  })
}