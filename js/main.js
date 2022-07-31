$(document).ready(function () {
  new WOW().init();

  jQuery("#btnVerMas").click(function () {
    $("#parrCorp").toggleClass("hidden shown");
  });
  jQuery("#btnVerMasLi").click(function () {
    $("#parrCorpLi").toggleClass("hidden shown");
  });
  jQuery("#btnVerMasLab").click(function () {
    $("#parrLab").toggleClass("hidden shown");
  });
  jQuery("#btnVerHow").click(function () {
    $("#parrhow").toggleClass("hiddenHow shownHow");
  });
  jQuery("#btnVerHow2").click(function () {
    $("#parrhow2").toggleClass("hiddenHow shownHow");
  });
  jQuery("#btnVerHow3").click(function () {
    $("#parrhow3").toggleClass("hiddenHow shownHow");
  });
});

jQuery(window).scroll(function () {
  if ($("#menu").offset().top > 790) {
    $("#menu").addClass("fijo");
  } else {
    $("#menu").removeClass("fijo");
  }
});
