$(document).ready(function () {
  let navlink = $(".nav-link");

  //Smooth scrolling (modified from code by Kevin Powell https://codepen.io/kevinpowell/pen/dWzGox?editors=0010)
  navlink.click(function(event){
    event.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 1000);
  });

  //Scrollspy effect

  //section offsets
  let offsets = [
    0,
    $("#about").offset().top - 50,
    $(".divider-bg-1").offset().top - 50,
    $(".divider-bg-2").offset().top - 40
  ];

  $(window).scroll(function() { 
    let scrollbarPosition = $(this).scrollTop();

    //select which nav-link to add .active to based on scroll position
    let n = 0;
    while(scrollbarPosition >= offsets[n] && n < 4) {
      n++;
    }

    //add active to current nav-link and remove it from the others
    navlink.eq(n-1).addClass("active");
    navlink.eq(n-1).siblings().removeClass("active");
  });


});