$(document).ready(function(){
      var fistName = $document.getElementById("fname")
      var lastName = $document.getElementById("lname")
      var email = $document.getElementById("email")
      var number = $document.getElementById("number")
      if (firstName === "" && lastName === "" &&  email === ""){
        alert("please insert your credentials")
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
 