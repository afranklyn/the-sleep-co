// A $( document ).ready() block.
$( document ).ready(function() {


    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        
        $(this).toggleClass('active');
        
      });

// Animate on scroll - activate
      AOS.init({
        duration:500
        // can change any defaults such as duration etc in here - view options in github
      }); 
    
});