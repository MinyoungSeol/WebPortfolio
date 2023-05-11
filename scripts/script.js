$(document).ready (function() {

  $("#media_span").click(function() {
    $(".media_menu").toggleClass("toggle");
    if($(".media_menu").css("display")=="block") {
      $("#media_span i").hide().fadeIn(500).attr("class", "fas fa-times").css("color", "#a88987");
    }
    else {
      $("#media_span i").hide().fadeIn(500).attr("class", "fas fa-bars");
    }
  });

  /* $(".aboutnav").on({
    mouseenter : function() {$(this).css("color", "#a98788");}
    mouseleave : function() {$(this).css("color", "#eadede");}
  }) */

  $(window).scroll(function() {

    var scTop = $(this).scrollTop();
    var about = $("#about").offset().top;
    var work = $("#work").offset().top;
    var contact = $("#contact").offset().top;
    var skill = $(".skill h3").offset().top;
    console.log(scTop, about, work, contact);

//about
    if( scTop >= about - 50 && scTop < work -50 ) {
      $(".aboutnav").css({"color":"#a98788", "transition":"1s"});
    }
    else {
      $(".aboutnav").css("color", "#eadede");
    }
    if( scTop >= about - 500 && scTop < work -50 ) {
      $("#about .line_box").css({"top":"0", "opacity":"1"});
      $(".about_right").css({"right" : "0", "opacity":"1"});
    }
    else {
      $("#about .line_box").css({"top":"-50px", "opacity":"0"});
      $(".about_right").css({"right" : "-600px", "opacity":"0"});
    }

//work
    if( scTop >= work - 50 && scTop < contact - 50 ) {
      $(".worknav").css({"color":"#a98788", "transition":"1s"});
    }
    else {
      $(".worknav").css("color", "#eadede");
    }
    if( scTop >= work - 500 && scTop < contact - 50 ) {
      $("#work .line_box").css({"top":"0", "opacity":"1"});
    }
    else {
      $("#work .line_box").css({"top":"-50px", "opacity":"0"});
    }

//contact
    if( scTop >= contact - 50 ) {
      $(".contactnav").css({"color":"#a98788", "transition":"1s"});
      $(".contactbox .line_box").css({"top":"0", "opacity":"1"});
    }
    else {
      $(".contactnav").css("color", "#eadede");
      $(".contactbox .line_box").css({"top":"-50px", "opacity":"0"})
    }

    if( scTop >= skill - 500 && scTop < work -50 ) {
      $(".bluebar1").css("width", "99%")
      $(".bluebar2").css("width", "80%")
      $(".bluebar3").css("width", "99%")
      $(".bluebar4").css("width", "75%")
      $(".bluebar5").css("width", "66%")
      $(".bluebar6").css("width", "60%")
      $(".bluebar7").css("width", "65%")
    }
    else {
      $(".bluebar1").css("width", "0")
      $(".bluebar2").css("width", "0")
      $(".bluebar3").css("width", "0")
      $(".bluebar4").css("width", "0")
      $(".bluebar5").css("width", "0")
      $(".bluebar6").css("width", "0")
      $(".bluebar7").css("width", "0")
    }

  }); //scroll

  $("p.up").click(function() {
    $('html, body').animate({
    scrollTop: '0'
    }, 800);
    return false;
  });

  $(".aboutnav").click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
    }, 800);
    return false;
  });

  $(".worknav").click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
    }, 800);
    return false;
  });

  $(".contactnav").click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
    }, 800);
    return false;
  });


}); //ready