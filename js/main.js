$(document).ready(function(){
  $(".our-recent-story").owlCarousel({

  	items:2,
  	loop:true,
  	margin:30,
  	autoplay:true,
  	autoplayTimeout:5000,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:1,
        },
        600:{
            items:1,
        },
        800:{
            items:2,
        },
        1000:{
            items:2,
        },
        1200:{
            items:2,
        }
    }

  });

 $(".our-feedback").owlCarousel({

  	items:2,
  	loop:true,
  	margin:30,
  	autoplay:true,
  	autoplayTimeout:5000,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
         500:{
            items:1,
        },
        600:{
            items:1,
        },
        800:{
            items:2,
        },
        1000:{
            items:2,
        },
        1200:{
            items:2,
        }
    }

  });

 $('.counter').counterUp({
    delay: 100,
    time: 5000
});


});


var config = document.querySelector('.myMixitUp');
var mixer = mixitup(config);


var myCarousel = document.querySelector('#our-slider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true
})
