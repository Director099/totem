'use strict';

$(function () {
    $.scrollUp({
        scrollText: '',
    });
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
