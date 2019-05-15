$(document).ready(function(){
    const button = $("input");
    button.on('click',function(e) {
        e.preventDefault();
        // console.log($('textarea').text());
        if($('.counter').text() < 0) {
            alert('You have too many characters');
        }
        else if($('.counter').text() == 140) {
            alert('Cannot submit empty message');
        }
        else {
            $.ajax( {
                type : "POST",
                url : "/tweets",
                data : $('textarea').serialize() 
            })
            .then(function() {
                console.log("successfully posted");
            })
            $('textarea').val("");
            $('.counter').text("140");
        }
    });
});
