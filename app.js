const exp=require("express");
const bp=require("body-parser");
const ejs=require("ejs");
const date =require( __dirname+"/date.js");
const app=exp();
app.use(bp.urlencoded({extended:true}));
app.use(exp.static("public"));
app.set("view engine","ejs");
var items=["buy food","cook food","eat food"];
let workItems=[];

// console.log(date());  // getting access of exports of a module



app.get("/",function(req,res){

// It has now become a module now we can easily get it
  // var today = new Date();
  // var cday=today.getDay();
  // var options={
  //   Weekday:"long",
  //   day:"numeric",
  //   month:"long"
  // };
  // var day=today.toLocaleDateString("en-us",options);

  // var day=" ";
  // if(today.getDate()===6 || today.getDate()===0){
  //   day="Weekend";
  // }else{
  //   day="Weekday";
  // }

  // let day = date.getdate();
  let day = date.getday();

  // switch(cday){
  //   case 0:
  //   day="Sunday";
  //   break;
  //   case 1:
  //   day="Monday";
  //   break;
  //   case 2:
  //   day="Tuesday";
  //   break;
  //   case 3:
  //   day="Wednesday";
  //   break;
  //   case 4:
  //   day="Thursday";
  //   break;
  //   case 5:
  //   day="Friday";
  //   break;
  //   case 6:
  //   day="Saturday";
  //   break;
  // }

  res.render("index",{listTitle:day,newlistitem:items});
})
app.get("/work",function(req,res){
  res.render("index",{listTitle:"Work List" , newlistitem:workItems})
})
app.get("/about",function(req,res){
  res.render("about");
})
// app.post("/work",function(req,res){
//   var anotheritem=req.body.newItem;
//   // console.log(newItem);
//   workItems.push(anotheritem);
//   res.redirect("/work");
// })
app.post("/",function(req,res){
  // console.log(req.body);
  var item=req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{

  // console.log(item);
  items.push(item);
  res.redirect("/");
}
})
app.listen(3000,function(){
  console.log("Server is set up and running");
})
