$(document).ready(function () {
  new WOW().init();
});

jQuery(window).scroll(function () {
  if ($("#menu").offset().top > 790) {
    $("#menu").addClass("fijo");
  } else {
    $("#menu").removeClass("fijo");
  }
});

jQuery("ul.navbar-nav > li").click(function (e) {
  console.log("first");
  e.preventDefault();
  $("ul.navbar-nav > li").removeClass("active");
  $(this).addClass("active");
});
