$(document).ready(function() {
        // initializing wow.js 
        new WOW().init();
    
        $('.navbar').hide();
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 0) { 
              
              $('.navbar').addClass('solid').show();
          } else {
              $('.navbar').removeClass('solid').hide();
          }
        });  
});


