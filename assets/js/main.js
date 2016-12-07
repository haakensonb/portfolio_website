$(document).ready(function () {
    //Change active class of navbar based on click
    $('ul.nav > li').click(function () {
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
    });
});