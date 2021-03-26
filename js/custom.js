$(function(){

  $(window).on('scroll', function(){

    var scrolling = $(this).scrollTop();      
    if(scrolling > 500){
      $('.uppish').fadeIn(500)
    }
    else{
        $('.uppish').fadeOut(500)
    }
    });

    $('.uppish').click(function(){
      $('html,body').animate({scrollTop:0},600)
    });
// counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// feed slider

$('.feed-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.left',
    nextArrow:'.right',
    fade:true,
    speed:1500,
  });

  // feed slider

$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

})