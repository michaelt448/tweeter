$(document).ready(function(){
    const button = $("input");
    button.click(function(e) {
        e.preventDefault();
        if($('.counter').text() < 0) {
            alert('You have too many characters');
        }
        else if($('.texarea').text() === "") {
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
