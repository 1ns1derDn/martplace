$(function(){

  $('.pages__title-1').on('click', function(){

    $('.pages__col-first ul').slideToggle();

  });

  $('.pages__title-2').on('click', function(){

    $('.pages__col-second ul').slideToggle();

  });
  
  $('.pages__title-3').on('click', function(){

    $('.pages__col-three ul').slideToggle();

  });

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  $('input, select').styler();

  $('.products-slider__inner').slick({
    appendArrows: $('.products-slider__btn'),
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.features-slider__inner').slick({
    appendArrows: $('.features-slider__btn'),
    arrows: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          dots: true
        }
      }
    ]
  });
  
  $('.stars').rateYo({
    rating: 5,
    starWidth: "15px",
    halfStar: true,
    spacing: "3px"
  });

  $('.item-list-button').on('click', function(){
    $('.products-items__content .product-item').addClass('list');
    $('.item-grid-button').removeClass('active');
    $('.item-list-button').addClass('active');
  });

  $('.item-grid-button').on('click', function(){
    $('.products-items__content .product-item').removeClass('list');
    $('.item-list-button').removeClass('active');
    $('.item-grid-button').addClass('active');
  });

  $('.item-list-button').on('click', function(){
    $('.favorites__inner .product-item').addClass('list');
    $('.item-grid-button').removeClass('active');
    $('.item-list-button').addClass('active');
  });

  $('.item-grid-button').on('click', function(){
    $('.favorites__inner .product-item').removeClass('list');
    $('.item-list-button').removeClass('active');
    $('.item-grid-button').addClass('active');
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

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: "$"
  });
  
  var mixer = mixitup('.products__inner');

});