$(document).ready(function () {

  jQuery("#btnVerMas").click(function () {
    $("#parrCorp").toggleClass("hidden shown");
    var uno = document.getElementById('btnVerMas');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
  jQuery("#btnVerMasLi").click(function () {
    $("#parrCorpLi").toggleClass("hidden shown");
    var uno = document.getElementById('btnVerMasLi');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
  jQuery("#btnVerMasLab").click(function () {
    $("#parrLab").toggleClass("hidden shown");
    var uno = document.getElementById('btnVerMasLab');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
  jQuery("#btnVerHow").click(function () {
    $("#parrhow").toggleClass("hiddenHow shownHow");
    var uno = document.getElementById('btnVerHow');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
  jQuery("#btnVerHow2").click(function () {
    $("#parrhow2").toggleClass("hiddenHow shownHow");
    var uno = document.getElementById('btnVerHow2');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
  jQuery("#btnVerHow3").click(function () {
    $("#parrhow3").toggleClass("hiddenHow shownHow");
    var uno = document.getElementById('btnVerHow3');
    if (uno.innerHTML == 'Ver Menos') 
        uno.innerHTML = 'Ver Mas';
    else uno.innerHTML = 'Ver Menos'; 
  });
});

jQuery(window).scroll(function () {
  if ($("#menu").offset().top > 790) {
    $("#menu").addClass("fijo");
    $("#hidden").addClass("titleShow");
    
  } else {
    $("#menu").removeClass("fijo");
    $("#hidden").removeClass("titleShow");
    $("#hidden").addClass("titleHidden");
    
  }
});
