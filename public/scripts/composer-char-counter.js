$(document).ready(function(){
  // $("textarea").change(function(){
  //   console.log("The text has been changed.");
  // });

  $("textarea").keydown(function(){
    let currentVal = $(this).siblings(".counter").text();
    let newVal = currentVal - 1;
    console.log(newVal);
    console.log($(this).siblings(".counter").text(newVal));

  });

  // $("textarea").keyup(function() {
  //   console.log("The key has been lifter");
  // });

  // $("textarea").blur(function() {
  //   console.log("There is a blur");
  // });

  // $("textarea").keypress(function() {
  //   console.log(this);
  // });
});
