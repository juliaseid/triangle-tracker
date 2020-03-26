
//Business Logic:
//Function checks if it's a triangle at all: If (side1 + side2)<=side3 || (side2 + side3)<=side1, NaT
var side1 = parseInt($("#side1").val());
var side2 = parseInt($("#side2").val());
var side3 = parseInt($("#side3").val());

function NaT(side1, side2, side3){
  var NaT = Boolean;
  if ((side1 + side2)<=side3), NaT=true;
  else if ((side2 + side3)<=side1), NaT=true;
  else

}

//If NaT===False, Function checks equivalency pairs (1+2, 2+3, 1+3), returns booleans
//If  side1=side2 True || side2=side3 || side1=side3 True, but (side2!=side1 || side2 != side3), isoceles;
//Else If side 1=side2 True && side2=side3 True, equilateral;
//Else, scalene;




//User Interface:
//If isoceles, "You made an isoceles triangle! Is it wide and flat or tall and narrow?"
//If equilateral, "You made an equilateral triangle!  So even!"
//If scalene, "You made a scalene triangle!  Way to think different!"
//If NaT, "That won't make a triangle, because the sides can't reach each other!"

$(document).ready(function() {
  $("form#triangleFun").submit(function() {
    if 