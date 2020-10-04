//const menuItem = document.querySelector(".header__link")

// menuItem.addEventListener('mouseenter', function () {
//   const menuHover = document.querySelector(".header__hover")
//   menuHover.classList.add("active")
// })
// menuItem.addEventListener('mouseout', function () {
//   const menuHover = document.querySelector(".header__hover")
//   menuHover.classList.remove("active")
// })

// const headerItem = document.querySelector(".header__item");
// const headerHover = document.querySelector(".header__hover");
// const sliderSection = document.querySelector(".slider");

$("#header__item").mouseover(function () {
  $("#slider").addClass("active")
});
$("#header__item").mouseout(function () {
  $("#slider").removeClass("active")
});

const $status = $('.slider__number');
const $slickElement = $('.slider__inner');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});


$('.slider__inner').slick({
  customPaging: function (slider, i) {
    return slider.slickCurrentSlide + '/' + (i + 1);
  },
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slider__arrow slider__arrow--left"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5L10 10L7.14264 5L10 0L0 5Z" fill="#AEAEAE"/></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--right"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5L0 10L2.85736 5L0 0L10 5Z" fill="#AEAEAE"/></svg></button>',
  infinite: false,
});


$('.directions__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  prevArrow: '<button class="directions__arrow directions__arrow--left"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5L10 10L7.14264 5L10 0L0 5Z" fill="#FFFFFF"/></svg></button>',
  nextArrow: '<button class="directions__arrow directions__arrow--right"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5L0 10L2.85736 5L0 0L10 5Z" fill="#FFFFFF"/></svg></button>',
});

$('.clubs__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  arrows: false,
});

$('.news__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  prevArrow: '<button class="news__arrow news__arrow--left"><svg width="58" height="18" viewBox="0 0 58 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="triangle" fill-rule="evenodd" clip-rule="evenodd" d="M0.399994 8.8L18 17.6L12.971 8.8L18 0L0.399994 8.8Z" fill="#AEAEAE"/><path  class="triangle" d="M12.4 8.8H57.2" stroke="#E4E4E4" stroke-width="1.6" stroke-linecap="round"/></svg></button>',
  nextArrow: '<button class="news__arrow news__arrow--right"><svg width="58" height="18" viewBox="0 0 58 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="triangle" fill-rule="evenodd" clip-rule="evenodd" d="M57.6 8.8L40 17.6L45.029 8.8L40 0L57.6 8.8Z" fill="#AEAEAE"/><path class="triangle" d="M45.6 8.8H0.8" stroke="#AEAEAE" stroke-width="1.6" stroke-linecap="round"/></g></svg></button>',
});