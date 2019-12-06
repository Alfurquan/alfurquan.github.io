var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(document).ready(function() {
  $(window).scroll(function(event) {
    didScroll = true;
  });

  $("nav")
    .find("a")
    .click(function(e) {
      e.preventDefault();
      $("nav")
        .find(".active")
        .removeClass("active");
      $(this).addClass("active");
      var section = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(section).offset().top
      });
    });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header")
        .removeClass("nav-down")
        .addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header")
          .removeClass("nav-up")
          .addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }

  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".hideme").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "nav-down") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-down";
//   }
// }

function openContent(evt, contentName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  $(contentName).fadeIn("slow");
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
