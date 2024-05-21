$(document).ready(function(){



  $(function() {
    var $accordions = $(".accordion").accordion({
        active: false,
        animate: 200,
        header: "h3",
        collapsible: true,
        heightStyle: "content",
        autoHeight: false,
        clearStyle: true,
        icons: false
    })
  });


  //main logo
	$("h1 span").lettering('');


  //fix the orphans
  $('#intro p:nth-child(3), #work h3.ui-state-default').widowFix();



  //hamburger menu
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('#menu').slideToggle("fast", function(){});
  });



  //bxSlider
	//$('#slider1,#slider2,#slider3,#slider4,#slider5,#slider6,#slider7,#slider8,#slider9,#slider10,#slider11').bxSlider({
	//	mode: 'horizontal',
  //	auto: false,
  //	autoControls: false,
  //	pause: 2000,
  //  preloadImages: 'all',
	//});

  //lightb
  lightbox.option({
   'resizeDuration': 200,
   'wrapAround': true
  })

  // Add smooth scrolling to all links
  $("a.btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
