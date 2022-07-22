// A $( document ).ready() block.
$( document ).ready(function() {


    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        
        $(this).toggleClass('active');
        
      });



    
});