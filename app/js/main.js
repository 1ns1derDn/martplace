$(function(){
  $('.products-slider__inner').slick({
    appendArrows: $('.products-slider__btn'),
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.features-slider__inner').slick({
    appendArrows: $('.features-slider__btn'),
    arrows: true,
    fade: true
  });
  
  $('.stars').rateYo({
    rating: 5,
    starWidth: "15px",
    halfStar: true
  });
  
});