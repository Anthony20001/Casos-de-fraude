$("#nav").hide();
  var $hamburger = $(".hamburger");

  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    $(this).addClass("hamburger--collapse"); 
    $("#nav").slideToggle(200);
});

$(".container-fluid").css("padding", "0px");

$("#animate1").children().on("mouseenter", function(){ //index para saber el indice de un elemnto
  $(this).toggleClass("hover-color");
  $(this).children().animate({marginLeft: '34px'}, 100);
});

$("#animate1").children().on("mouseleave", function(){
  $(this).toggleClass("hover-color");
  $(this).children().animate({marginLeft: '0px'}, 100);
});
 
/*const eq = $("#hover").index();
alert("este es el indice: " + eq);*/