var num1= Math.floor(Math.random()*6)+1;
var num2= Math.floor(Math.random()*6)+1;

var image1= "dice"+num1+".png";
var image2= "dice"+num2+".png";



var img1= document.querySelectorAll("img")[0];
var img2= document.querySelectorAll("img")[1];

img1.setAttribute("src",image1);
img2.setAttribute("src",image2);

if(num1>num2){
    document.querySelector("h1").innerHTML = "First is Winner";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML = "Second is Winner";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw";
}
