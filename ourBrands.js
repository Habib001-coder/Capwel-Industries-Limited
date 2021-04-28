function Name(FirstName,LastName, message,phoneNumber,email,subject){
    this.firstName = FirstName;
    this.lastName = LastName;
    this.message = message;
    this.phone = phoneNumber;
    this.email = email;
    this.subject = subject;
}
Name.prototype.fullName = function(){
    return this.firstName+ " "+ this.lastName;
}

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
$("form#contact-form").submit(function(e){
    
    
    let first_name = $("#first-Name").val();
    let second_name=$("#last-Name").val();
    let Message= $("#message").val();
    let phoneNumber=$("#phone-number").val();
    let Email=$("#email").val();
    let subject=$("#subject").val();
    let Details= new Name(first_name,second_name,Message,phoneNumber,Email,subject);
    alert(`Hello ${Details.fullName()}. Thank-you for your ${Details.subject} message. `)
    
})

})