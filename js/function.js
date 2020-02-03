$(document).ready(function () {
  $('body').on('click', '.navbar-toggler', function () {
    //$(".menu").width("40%");
    $(".menu").animate({
      width: "40%",
    }, 1000 );
    $(".overlay").css("display", "block");
    $("#collapsibleNavbar").css("display", "block");
    $(".menu").css("display", "block");
  });
  $('body').on('click', '.overlay', function () {
    $("#collapsibleNavbar").width("0%");
    $(".menu").animate({
      width: "0%",
    }, 1000 );
    $(".overlay").css("display", "none");
    $("#collapsibleNavbar").css("display", "none");
    $(".menu").css("display", "contents");
  });

  var btn = $('#scroll-button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
  $('[data-fancybox]').fancybox({
    protect: true
});
});