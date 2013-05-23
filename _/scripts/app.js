$(function(){
  $("h1").css("visibility", "hidden");
  function slabTextHeadlines() {
    $("h1").slabText({
      "viewportBreakpoint":200
    });
  $("h1").css("visibility", "visible");

  };
  setTimeout(slabTextHeadlines, 100);
  $.backstretch("/_/images/no.gif");
});