  $(document).ready(function(){

    // $("textarea").keypress(function(){
    //   let currentVal = $(this).siblings(".counter").text();
    //   if(currentVal < 0) {
    //     $(this).siblings(".counter").css("color", "red");
    //   }
    //   $(this).siblings(".counter").text(currentVal - 1);
    // });

    // pasteFunction() {
    //  let currentVal = $(document).getElementById(".counter").text();
    //  $(document).getElementById(".counter").text()
    // }

    // WORKING COPY NOT REFACTORED
    // const currentCount = Number($("textarea").siblings(".counter").text());
    // $("textarea").oninput(function(){
    //   const currentStringLength = $(this).val().length;
    //   //console.log(currentStringLength);
    //    if(currentCount < currentStringLength) {
    //      $(this).siblings(".counter").css("color", "red");
    //    }
    //    $(this).siblings(".counter").text(currentCount - currentStringLength);
    // });


    //REFACTOR ATTEMPT
      const currentCount = Number($("textarea").siblings(".counter").text());

      $("textarea").keyup(function(){
        update($(this));
      });

      const update = (currentTextObj) => {
        const currentStringLength = currentTextObj.val().length;
        colorText(currentCount,currentStringLength,currentTextObj.siblings(".counter"));
        currentTextObj.siblings(".counter").text(currentCount - currentStringLength);
      }

      const colorText = (currentCount,currentStringLength,counter) => {
         if(currentCount < currentStringLength) {
           counter.css("color", "red");
        } else {
          counter.css("color", "black");
        }
      }
    });