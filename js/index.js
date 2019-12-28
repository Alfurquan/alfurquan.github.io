
$(document).ready(function(){

    $('#js-navbar-toggle').on('click',function (){
       $('.menu').toggleClass('open')
    })



  //code to make sticky navbar
  var sticky = $('.topnav').offset().top;
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() >= sticky) {
        $('.topnav').addClass('sticky');
    } else {
        $('.topnav').removeClass('sticky');
    }

    //SCROLL ANIMATIONS
    function onScrollInit( items, elemTrigger ) {
        var offset = $(window).height() / 1.6
        items.each( function() {
          var elem = $(this),
              animationClass = elem.attr('data-animation'),
              animationDelay = elem.attr('data-delay');
    
              elem.css({
                '-webkit-animation-delay':  animationDelay,
                '-moz-animation-delay':     animationDelay,
                'animation-delay':          animationDelay
              });
    
              var trigger = (elemTrigger) ? trigger : elem;
    
              trigger.waypoint(function() {
                elem.addClass('animated').addClass(animationClass);
                if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
                },{
                    triggerOnce: true,
                    offset: offset
              });
        });
      }
    
      setTimeout(function() { onScrollInit($('.waypoint')) }, 10);

});

})