$("document").ready(function(){
    $(".soko").click(function(){
        $("#soko-text").toggle();
        $("#soko-div").toggle();
        

    })
    $(".amaze").click(function(){
        $("#amaze-div").toggle();
        $("#amaze.text").toggle();
        })
    $(".raene").click(function(){
        $("#raene-div").toggle();
        $("#raene-text").toggle();
    })   
    $(".pearl").click(function(){
        $("#pearl-div").toggle();
        $("#pearl-text").toggle();
    }) 
    $(".cil").click(function(){
        $("#cil-div").toggle();
        $("#cil-text").toggle();
    })
    $(".yola").click(function(){
        $("#yola-div").toggle();
        $("#yola-text").toggle();
})
// Changes the navbar color
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll <300) {
        $('.fixed-top').css('background', 'transparent')
    } else {
        $('.fixed-top').css('background', 'rgba(57, 58, 60)')
    }
    

})

// Closes navbar on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
})