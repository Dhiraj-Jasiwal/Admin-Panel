$(document).ready(function (){
    // Delete that line if you don't want the first Div to be displayed by default
    $("div:first").css("display", "block");
    
    // 
    $("h3").click(function () {
      $(this).next().slideToggle(500);
      $("div").not($(this).next()).slideUp(500);
      
      // how to rotate the icon JUST h3>i
      // $("i").css({'transform':'rotate(180deg)'});
      
    });
    
  });