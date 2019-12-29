
$(document).ready(function(){

    $('#js-navbar-toggle').on('click',function (){
       $('.menu').toggleClass('open')
    })



  //code to make sticky navbar
  var sticky = $('.topnav').offset().top;
  $(window).bind('scroll', function () {

    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    // Link Highlighting
    if (pos2 > $('#home').offset().top)       { highlightLink('home'); }
    if (pos2 > $('#about').offset().top)      { highlightLink('about'); }
    if (pos2 > $('#experience').offset().top)  { highlightLink('experience'); }
    if (pos2 > $('#work').offset().top)       { highlightLink('work'); }
    if (pos2 > $('#contact').offset().top ||
        pos + $(window).height() === $(document).height()) {
          highlightLink('contact');
    }


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

function highlightLink(anchor) {
  $('.menu .active').removeClass('active');
  $(".menu").find('[dest="' + anchor + '"]').addClass('active');
}

// EVENT HANDLERS
$('.nav-links').click(function() {
  var anchor = $(this).attr("dest");
   $('.menu').removeClass('open');

  $('.menu .active').removeClass('active');
  $(".menu").find('[dest="' + anchor + '"]').addClass('active');

  $('html, body').animate({
    scrollTop: $('#' + anchor).offset().top
  }, 400);
});



})