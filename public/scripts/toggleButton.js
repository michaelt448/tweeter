$(document).ready(function() {
    
    const button = $('#nav-bar button');

    button.on('click', function(e) {
        e.preventDefault();
        $('#nav-bar button').toggleClass('clicked');
        $('.new-tweet').slideToggle('slow');
        $('textarea').focus();
    });
})