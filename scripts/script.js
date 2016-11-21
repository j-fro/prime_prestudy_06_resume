$(document).ready(function() {
    $('main').hide();
    $('nav').on('click', 'a', function() {
        $('main').slideDown();
    });
});
