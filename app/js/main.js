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

  $('.bell-number__link').on('click', function(){
    $('.notifications__menu').slideToggle();

    if($('.bell-number__link').hasClass('active'))
    {
      $('.bell-number__link').removeClass('active');
    }else{
    $('.bell-number__link').addClass('active');
    }
  });

  $('.message__link').on('click', function(){
    $('.message__menu').slideToggle();

    if($('.message__link').hasClass('active'))
    {
      $('.message__link').removeClass('active');
    }else{
    $('.message__link').addClass('active');
    }
  });

  $('.basket__link').on('click', function(){
    $('.basket__menu').slideToggle();

    if($('.basket__link').hasClass('active'))
    {
      $('.basket__link').removeClass('active');
    }else{
    $('.basket__link').addClass('active');
    }
  });

  $('.first-drop').on('click', function(){
    $('.first-drop__home').slideToggle();

    if($('.first-drop').hasClass('active'))
    {
      $('.first-drop').removeClass('active');
    }else{
    $('.first-drop').addClass('active');
    }
  });



  $('.second-drop').on('click', function(){
    $('.second-drop__wordpress').slideToggle();

    if($('.second-drop').hasClass('active'))
    {
      $('.second-drop').removeClass('active');
    }else{
    $('.second-drop').addClass('active');
    }
  });

  $('.three-drop').on('click', function(){
    $('.three-drop__products').slideToggle();

    if($('.three-drop').hasClass('active'))
    {
      $('.three-drop').removeClass('active');
    }else{
    $('.three-drop').addClass('active');
    }
  });
  
  $('.pages').on('click', function(){
    $('.pages__menu').slideToggle();

    if($('.pages').hasClass('active'))
    {
      $('.pages').removeClass('active');
    }else{
    $('.pages').addClass('active');
    }
  });

  $('.header-top__user').on('click', function(){
    $('.user__menu').slideToggle();

    if($('.header-top__user').hasClass('active'))
    {
      $('.header-top__user').removeClass('active');
    }else{
    $('.header-top__user').addClass('active');
    }
  });

  $('.menu__btn').on('click', function(){
    $('.menu').slideToggle();
  });

  $('.user-btn').on('click', function(){
    $('.header-top__box-mobale').slideToggle();
  });
});