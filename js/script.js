$(document).ready (function(){

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });
      $('.count_up').counterUp({
        delay: 10,
        time: 1000
    });
    $('.reviews_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '.left_angle',
      nextArrow: '.right_angle',
    });

});