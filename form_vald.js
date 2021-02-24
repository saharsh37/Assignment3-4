
//---------------------------jquery--------------------------------------------

$(document).ready(function(){

$("#phone_no").keyup(function()
{
  var a = $("#phone_no").val();
  //alert(a);
               
               
           if(a=="") {
            $("#val_phone").html("Phone number is empty");
        
           
           }
           else if(isNaN(a)){
        $("#val_phone").html("Phone number is not a number... please enter a number");
           
           }
           else if(a.length<10){
        $("#val_phone").html("Phone number should be in 10 digit");
           
           } 
           else if(a.length==10){
        $("#val_phone").html("");
           
           } 
           else if(a.length>10){
        $("#val_phone").html("Phone number length is more");
           
           } 

});

 $("#email").keyup(function(){
        var email = $("#email").val();
        //alert("saharsh");
        
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     var emailaddressVal = $("#email").val();
  if(!regex.test(emailaddressVal)) {
    $("#check_email").html("Enter proper email id");
  }else{

$("#check_email").html("");
     
     }
  });

   });


//---------------------------javascript--------------------------------------------

function check_data()
{
var email=document.getElementById("email").value;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var phoneVal = document.getElementById("phone_no").value;

var pre=document.getElementById("pre").value;

var f_name=document.getElementById("f_name").value;
var l_name=document.getElementById("l_name").value;
var Gender=document.getElementById("gender").value;
var Destination=document.getElementById("Destination").value;

 var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if(!(regex.test(email) && phoneno.test(phoneVal)))
{
  alert("check all data is entered properly");
  // window.history.back();
  return false;

  }
  else if(pre,f_name,l_name,Gender,Destination=="")
  {
alert("check all data is filled");
  // window.history.back();
  return false;
  }
  
  alert("form submitted successfully");
  return true;
}

  

