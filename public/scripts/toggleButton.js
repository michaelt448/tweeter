$(document).ready(function() {
    const button = $('button');
    let count = 0;
    button.on('click', function(e) {
        e.preventDefault();
        switchColor();
        $('.new-tweet').slideToggle('slow');
        $('textarea').focus();
    })
    const switchColor = () => {
        if(count === 1) {
            button.css('color', '#00a087');
            count = 0;
            // console.log('green', count);
        } else {
            button.css('color', 'black');
            count = 1;
            // console.log('black', count);
        }
    }
    // const toggleWindow = () => {
    //     if(count === 0) {
    //         $('.new-tweet').toggle();
    //     } else {
    //         $('.new-tweet').toggle();
    //     }
    // }
})