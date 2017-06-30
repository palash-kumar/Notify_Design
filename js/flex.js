/*var $flexslider = $('.flexslider');
$flexslider.flexslider({
  animation: "slide",
  manualControls: ".flex-control-nav li",
  useCSS: false /!* Chrome fix*!/
});*/

$(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        manualControls: ".flex-control-nav li",
        useCSS: false /* Chrome fix*/
    });
});
