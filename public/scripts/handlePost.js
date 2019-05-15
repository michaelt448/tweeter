$(document).ready(function(){
    const button = $("input");
    button.click(function(e) {
        e.preventDefault();
        // console.log("The button was clicked!!");
        $.ajax( {
            type : "POST",
            url : "/tweets",
            data : $('textarea').serialize() 
        })
        .then(function() {
            console.log("successfully posted");
        })
    });
});
