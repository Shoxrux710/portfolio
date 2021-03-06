$(document).ready(function (e) {
  
   
  let $bar = $('header .header_nav .bar');
  let $times = $('header .header_nav .times');
  let $link = $('header .header_nav ul');
  let $agen = $('header .header_nav ul li a')
  // console.log($agen);
//  link_top ==========================================
  $agen.click(function (e){
    
    e.preventDefault();
    $agen.removeClass('active');
    let $id = $(this).addClass('active').attr('href');

    let $top = $($id).offset().top - 60;
    $('html, body').animate({
      scrollTop: $top, 
    }, 1000)

  })

  $(window).scroll(function (){
    $scroll =  $(this).scrollTop();
    
    $agen.each(function (){
      let $id = $(this).attr('href');
      let $top = $($id).offset().top - 100;

      if ($scroll >= $top){
        $agen.removeClass('active');
        $(this).addClass('active')
      }
    })

    })
// button ==============================
  $bar.on('click', () => {
    $($link).animate({
      right: 0,
    }, 500)
  })

  $times.on('click', () => {
    $($link).animate({
      right: -200,
    }, 500)
  })

// wow.js ==============================
  new WOW().init(); 
  

// ==================== loading =======================

$(window).on('load', () => {
  $preloader = $('.preloader')
  $loader = $('.loader')
  $loader4 = $('.loader4')

  $preloader.delay(2000).fadeOut('slow')
  $loader.delay(1500).fadeOut('slow')
  $loader4.delay(1500).fadeOut('slow')
})





// slider ===========================================
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

})