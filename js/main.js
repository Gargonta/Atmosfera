    $(document).on('click', '.dropdown', function() {
        if ($(this).hasClass('active')) {
            $(this).find('.dropdown-menu').stop().slideUp(300);
            $(this).removeClass('active');
        } else {
            $('.dropdown').removeClass('active');
            $('.dropdown').find('.dropdown-menu').stop().slideUp(300);
            $(this).addClass('active');
            $(this).find('.dropdown-menu').stop().slideDown(300);
        }
    });

    $(document).on('click', '.dropdown .dropdown-menu li', function() {
    	let tel = $(this).text();
    	console.log( tel );

        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        $('.header-call').attr('href','tel:' + tel );
    });
$(document).on('click','.services_button', function() {
  $(this).toggleClass('active');
});



$('.action-slider').on('init reInit afterChange beforeChange',function(event, slick, currentSlide, nextSlide){
  var circleLength = $('.action-slider .slick-next circle').attr('r')*Math.PI*2;
  
  var i =  (currentSlide ? currentSlide : 0) + 1;
  
  var part = i/slick.slideCount;

  //длина видимой части границы, длина пустого промежутка
  $('.action-slider .slick-next circle').css('stroke-dasharray', circleLength*part+','+circleLength);

	/*console.log((((i/slick.slideCount)*360)+'deg'));*/
  	$('.action-slider .dotact').css('transform', 'rotate('+((i/slick.slideCount)*360)+'deg'+')');

});

function setProgress(index) {
  const calc = ((index + 1) / ($('.action-slider').slick('getSlick').slideCount)) * 100;
  $progressBar
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

 /* $progressBarLabel.text(`${calc.toFixed(2)}% completed`);*/
}

const $progressBar = $('.action-progressbar');
/*const $progressBarLabel = $('.slider__label');*/

$('.action-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgress(nextSlide);

});

  $('.action-slider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
	 nextArrow:'<div class="slick-arrow slick-next"><div class="dotact"></div><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" transform="rotate(180 33 33)" clip-rule="evenodd" d="M35.78 25.2203L37.19 26.6403L30.83 33.0003L37.19 39.3603L35.78 40.7803L28 33.0003L35.78 25.2203Z" fill="#999999"/><circle cx="33" cy="33" r="32" transform="rotate(-90 33 33)" stroke="#E5DED5"/></svg></div>',
  	prevArrow:'<div class="slick-arrow slick-prev"><svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" transform="rotate(180 33 33)" d="M30.22 41.413L28.8101 39.9638L35.17 33.4734L28.8101 26.983L30.22 25.5339L38 33.4734L30.22 41.413Z" fill="#999999"/><ellipse cx="33" cy="33.4735" rx="32.6559" ry="32" transform="rotate(180 33 33.4735)" stroke="#E5DED5"/></svg></div>',
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });





$('.reviews-slider').on('init reInit afterChange beforeChange',function(event, slick, currentSlide, nextSlide){
  var circleLength = $('.reviews-slider .slick-next circle').attr('r')*Math.PI*2;
  
  var i =  (currentSlide ? currentSlide : 0) + 1;
  
  var part = i/slick.slideCount;

  //длина видимой части границы, длина пустого промежутка
  $('.reviews-slider .slick-next circle').css('stroke-dasharray', circleLength*part+','+circleLength);

  /*console.log((((i/slick.slideCount)*360)+'deg'));*/
    $('.dotrev').css('transform', 'rotate('+((i/slick.slideCount)*360)+'deg'+')');

});

function setProgressrev(index) {
  const calc = ((index + 1) / ($('.reviews-slider').slick('getSlick').slideCount)) * 100;

  $progressBarrev
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

 /* $progressBarLabel.text(`${calc.toFixed(2)}% completed`);*/
}

const $progressBarrev = $('.progressbarrev');
/*const $progressBarLabel = $('.slider__label');*/

$('.reviews-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgressrev(nextSlide);
});

  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<div class="slick-arrow slick-next"><div class="dotrev"></div><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" transform="rotate(180 33 33)" clip-rule="evenodd" d="M35.78 25.2203L37.19 26.6403L30.83 33.0003L37.19 39.3603L35.78 40.7803L28 33.0003L35.78 25.2203Z" fill="#999999"/><circle cx="33" cy="33" r="32" transform="rotate(-90 33 33)" stroke="#E5DED5"/></svg></div>',
    prevArrow:'<div class="slick-arrow slick-prev"><svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" transform="rotate(180 33 33)" d="M30.22 41.413L28.8101 39.9638L35.17 33.4734L28.8101 26.983L30.22 25.5339L38 33.4734L30.22 41.413Z" fill="#999999"/><ellipse cx="33" cy="33.4735" rx="32.6559" ry="32" transform="rotate(90 33 33.4735)" stroke="#E5DED5"/></svg></div>',
  });





$('.bottom-slider').on('init reInit afterChange beforeChange',function(event, slick, currentSlide, nextSlide){
  var circleLength = $('.bottom-slider .slick-next circle').attr('r')*Math.PI*2;
  
  var i =  (currentSlide ? currentSlide : 0) + 1;
  
  var part = i/slick.slideCount;

  //длина видимой части границы, длина пустого промежутка
  $('.bottom-slider .slick-next circle').css('stroke-dasharray', circleLength*part+','+circleLength);

  /*console.log((((i/slick.slideCount)*360)+'deg'));*/
    $('.dotbot').css('transform', 'rotate('+((i/slick.slideCount)*360)+'deg'+')');

});

function setProgressbot(index) {
  const calc = ((index + 1) / ($('.bottom-slider').slick('getSlick').slideCount)) * 100;

  $progressBarbot
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

 /* $progressBarLabel.text(`${calc.toFixed(2)}% completed`);*/
}

const $progressBarbot = $('.progressbarbot');
/*const $progressBarLabel = $('.slider__label');*/

$('.bottom-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgressbot(nextSlide);
});

  $('.bottom-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:'<div class="slick-arrow slick-next"><div class="dotbot"></div><svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" transform="rotate(180 33 33)" clip-rule="evenodd" d="M35.78 25.2203L37.19 26.6403L30.83 33.0003L37.19 39.3603L35.78 40.7803L28 33.0003L35.78 25.2203Z" fill="#999999"/><circle cx="33" cy="33" r="32" transform="rotate(-90 33 33)" stroke="#E5DED5"/></svg></div>',
    prevArrow:'<div class="slick-arrow slick-prev"><svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-180 33 33)" fill-rule="evenodd" clip-rule="evenodd" d="M30.22 41.413L28.8101 39.9638L35.17 33.4734L28.8101 26.983L30.22 25.5339L38 33.4734L30.22 41.413Z" fill="#999999"/><ellipse cx="33" cy="33.4735" rx="32.6559" ry="32" transform="rotate(90 33 33.4735)" stroke="#E5DED5"/></svg></div>',
    responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
  });


setProgress(0);
setProgressrev(0);
setProgressbot(0);
$(document).ready(function() {
  $('.masonry').masonry({ 
        itemSelector: '.services-block-item',
        columnWidth: '.persent-size',
        percentPosition: true
      });
      var as = $('.action-slider').slick("getSlick").slideCount;
      var rs = $('.reviews-slider').slick("getSlick").slideCount;
      var bs = $('.bottom-slider').slick("getSlick").slideCount;
    $('.wrap-action-progressbar span.max-slider-count').text('0' + as);
    $('.wrap-reviews-progressbar span.max-slider-count').text('0' + rs);
    $('.wrap-bottom-progressbar span.max-slider-count').text('0' + bs);
});

  $(document).resize(function() {
  $('.masonry').masonry({ 
        itemSelector: '.services-block-item',
        columnWidth: '.persent-size',
        percentPosition: true
      });

});
    $('.tab_li li a').on('click' , function(){
    div = $(this).attr('href');
    $('.tab_li li a').removeClass('curent');
    $(this).addClass('curent');
    $('.tab_box').hide(100);
    $(div).show(300);
    return false;
  });

// function whelem() {
// $('.detail-gallery-item img').each( function(index) {
//   let we = $(this).width();
//   let wh = we * 0.801;
//   $(this).height(wh);
// });
// };

// $(window).on('load resize', whelem);
$(document).on('click','.open-lvl', function() {
  $(this).closest('li').toggleClass('active');
});
$(document).on('click','.sidebar-list-title-mobile', function() {
$(this).next().slideToggle();
$(this).toggleClass('active');
});
$(document).on('click','.header-mobile-list span', function() {
  $(this).closest('li').toggleClass('active');
});
$(document).on('click','.mobile-gamb', function() {
  $(this).addClass('aaa');
  $('.wrap-header-mobile-block').addClass('open');
});
$(document).on('click','.header-mobile-title span', function() {
  $('.wrap-header-mobile-block').removeClass('open');
});




$('.item-services').plate({
    element: '.top-item-services',
    perspective: 500,
    maxRotation: 10,
    animationDuration: 100
});

$('.btn-popup').fancybox({
    
   });