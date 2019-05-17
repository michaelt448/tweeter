$(document).ready(function(){
  const currentCount = Number($("textarea").siblings(".counter").text());

  $("textarea").keyup(function(){
    update($(this));
  });

  const update = (currentTextObj) => {
    const currentStringLength = currentTextObj.val().length;
    colorText(currentCount,currentStringLength,currentTextObj.siblings(".counter"));
    currentTextObj.siblings(".counter").text(currentCount - currentStringLength);
  };

  const colorText = (currentCount,currentStringLength,counter) => {
    if(currentCount < currentStringLength){
        counter.css("color", "red");
    }else {
      counter.css("color", "black");
    }
  };
});