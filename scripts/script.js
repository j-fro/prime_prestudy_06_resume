$(document).ready(function() {
  $('main').slideUp();
  $('nav').on('click', 'a', function() {
    $('main').slideDown();
  });
});
