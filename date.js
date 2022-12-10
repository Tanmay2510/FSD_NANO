
// our module is not exporting something
// but now it is,
// module.exports("Hello world");

// module.exports=getDatee;  //exporting the function from module

//now what if we have more than 1 function how are we gonna export interval

module.exports.getdate=getDatee;


//Declaring js function with different types of method
// function getDatee(){

//1 method
var getDatee = function(){
  var today = new Date();
  var cday = today.getDate();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  return today.toLocaleDateString("en-us",options);
  // return day;
}

// 2 method
// also we can just delete module from it, it's gonna be the same thing
exports.getday= function(){
  var today = new Date();
  var cday = today.getDate();
  var options={
    weekday:"long"
  };
  return today.toLocaleDateString("en-us",options);
  // return day;
}

console.log(module.exports);
