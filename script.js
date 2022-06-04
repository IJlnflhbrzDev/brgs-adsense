var elem = document.querySelector('.brgs-carousel');
var flkty = new Flickity(elem, {
     // options
     cellAlign: 'left',
     contain: true,
     autoPlay: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.brgs-carousel', {
     // options
});

$("#targetBtn1").click(function () {
     $('html,body').animate({
          scrollTop: $("#cta-mulai-berjualan").offset().top
     },
          'slow');
});

$("#targetBtn2").click(function () {
     $('html,body').animate({
          scrollTop: $("#simulasi-penghasilan").offset().top
     },
          'slow');
});

