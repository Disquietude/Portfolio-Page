$(document).ready(function () {
  let navlink = $(".nav-link");

  //Smooth scrolling (modified from code by Kevin Powell https://codepen.io/kevinpowell/pen/dWzGox?editors=0010)
  navlink.click(function(event){
    event.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 1000);

    //On small screens, hide the menu after a link is clicked
    if($(".responsive-menu").css("display") !== "none") {
      $("#navbar .nav-link").hide();
    }
  });

  //Scrollspy effect
  $(window).scroll(function() { 
    let scrollbarPosition = $(this).scrollTop();
    //section offsets
    let offsets = [
      0,
      $("#about").offset().top - 51,
      $(".divider-bg-1").offset().top - 50,
      $(".divider-bg-2").offset().top - 50
    ];

    //select which nav-link to add .active to based on scroll position
    let n = 0;
    while(scrollbarPosition >= offsets[n] && n < 4) {
      n++;
    }

    //add active to current nav-link and remove it from the others
    navlink.eq(n-1).addClass("active");
    navlink.eq(n-1).siblings().removeClass("active");
  });

  //Responsive navbar
  $(".fa-bars").click(function() { 
    $("#navbar .nav-link").toggle();
  });

   //Show navbar if window is resized to > 1024px and hide it if < 1024px
  $(window).resize(function() {
    if($(".responsive-menu").css("display") == "none") {
      $("#navbar .nav-link").show();
    }
    else {
      $("#navbar .nav-link").hide();
    }
  });

   //Hide responsive menu if user clicks anywhere outside the menu 
  $("#navbar").siblings().click(function() { 
    if($(".responsive-menu").css("display") !== "none") {
      $("#navbar .nav-link").hide();
    }
  });
});