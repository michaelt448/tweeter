$(document).ready(function() {
    
    const button = $('button');
    let count = false;

    button.on('click', function(e) {
        e.preventDefault();
        switchColor();
        $('.new-tweet').slideToggle('slow');
        $('textarea').focus();
    });

    const switchColor = () => {
        count ? button.css('color', 'black') : button.css('color', '#00a087');
        count = !count;
    };
})