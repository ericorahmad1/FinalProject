
// Activate Carousel
$("#carouselExampleIndicator").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#caraouselExampleIndicator").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
  $("#caraouselExampleIndicator").carousel("prev");
});