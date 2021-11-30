// alert('Здравствуйте, на данный момент сделано мало и плохо, если у вас есть время и возможность проверить мою работу не сейчас, а ближе к дедлайну, буду очень благодарен если вы так и поступите. Но на нет, как говорится, и суда нет\nСвязь со мной: D.Na#1622 (discord)')

// ПОЯВЛЕНИЕ ФОРМЫ ПОКУПКИ 

let buyForm = document.querySelector('.tickets__buy-form');
    buyFormOpen = document.querySelector('.tickets__buy-now');
    buyFormClose = document.querySelector('.tickets__payment-exit');

    buyFormOpen.onclick = function() {
      buyForm.classList.toggle("animate");
    };
    buyFormClose.onclick = function() {
      buyForm.classList.toggle("animate");
    };

window.onclick = function(e) {
  if (e.target == buyForm) {
    buyForm.classList.toggle("animate");
  }
}


// НАСТРОЙКА БАРОВ В ПЛЕЕРЕ

const progress = document.querySelector('.video__progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const progressVolume = document.querySelector('.volume__progress');

progressVolume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})



// БУРГЕР МЕНЮ

document.querySelector('.burger__menu').addEventListener('click', function(){
  document.querySelector('.burger__menu').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle("goleft");
})

let nav = document.querySelector('.header__nav')

window.onclick = function(e) {
  if (e.target == nav) {
    nav.classList.toggle('goleft');
    document.querySelector('.burger__menu').classList.toggle('active');
  }
}

let li = document.querySelectorAll('.header__li')

for (let i = 0; i < li.length; i++) {
  li[i].onclick = function(){
    document.querySelector('.burger__menu').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle("goleft");
  };
}

// СЛАЙДЕР WELCOME

$(document).ready(function() {
  $('.welcome__slider-container').slick({
    dots:true,
    speed:300,
  })
});

let counter = document.querySelector('.slider__counter'); // счетчик слайдов в секции велком

// ПЕРЕКЛЮЧЕНИЕ НОМЕРА СЛАЙДА

function loader(){
  let counter = document.querySelector('.slider__counter') // счетчик слайдеров
  let bullets = document.querySelectorAll('.slick-dots'); // буллеты слайдеров
  
  for (let i = 0; i < bullets[0].children.length; i++){
    if (bullets[0].children[i].classList.contains('slick-active')){
      counter.innerHTML = '0' + (i + 1)
    }
  }
}

document.getElementById('welcome').onclick = function(){
    loader()
}
document.getElementById('welcome').onmousedown = function(){
    loader()
}
document.getElementById('welcome').onmouseup = function(){
    loader()
}
// document.getElementById('welcome').onmousemove = function(){
//     loader()
// }
    
// СЛАЙДЕР VIDEO


$(document).ready(function() {
  $('.video__slider-container').slick({
    dots:true,
    speed:300,
    slidesToShow:3,
    variableWidth: true,
    draggable: false
  })
});

// ПЕРЕКЛЮЧЕНИЕ ВИДОСА В СЕКЦИИ ВИДЕО

function videoChange(){
  let bullets = document.querySelectorAll('.slick-dots'); // буллеты слайдеров

  for (let i = 0; i < bullets[1].children.length; i++){
    for (let i = 0; i < bullets[1].children.length; i++){
      if (bullets[1].children[i].classList.contains('slick-active')){
        document.querySelector('.custom__player').setAttribute('poster', `./assets/posters/poster${i}.jpg`)
        document.querySelector('.custom__player').setAttribute('src', `./video/video${i}.mp4`)
      }
    }
  }
}



document.getElementById('dots').onclick = function(e){
  if (e.target.type == 'button' || e.target.role == 'presentation') {
    if (!document.querySelector('.custom__player').paused){
      document.querySelector('.video__big-play').classList.remove('big-play-paused')
      document.querySelector('.video__play').classList.remove('small-play-paused')
    }
    videoChange()
  }
}










console.log('Отзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1. если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно\n2. если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео\n3. при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них\n4. Калькулятор продажи билетов в форме продажи билетов (там сделан только последний пункт, и частично первый) \n5. Валидация формы (на данный момент не сделана вся, будет готова к вечеру 14ого\nЛюбой собственный дополнительный функционал')

console.log('Все остальные пункты я считаю полностью выполненными\nСвязь Discord: D.Na#1622')
console.log('Cлайдер в велком секции по какой то причине может не инициалзироваться полностью с первого раза, перезагрузите пожалуйста страницу если он "застрял" слева')
