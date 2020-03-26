
function NaT(side1, side2, side3){
  var NaT = false;
  if ((side1 + side2)<=side3) {
     NaT=true;
  }
  else if ((side2 + side3)<=side1){
    NaT=true;
  } 
  else if ((side1 + side3)<=side2){
    NaT=true;
  } 
  else {
    NaT=false;
  }
  return NaT;
};

function sidesSame(s, t) {
  if (s===t) {
    return true;
  }
  else {
    return false;
  }
};



$(document).ready(function() {
  $("#triangleFun").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (NaT(side1, side2, side3)===true) {
      var text = "That won't make a triangle, because the sides can't reach each other!";
    }
    
    else if ((sidesSame(side1, side2)===true) && (sidesSame(side2, side3)===true) && (sidesSame(side1, side3)===true)) {
      var text = "You made an equilateral triangle!  So even!";
    }

    else if ((sidesSame(side1, side2)===true) || (sidesSame(side2, side3)===true) || (sidesSame(side1, side3)===true)) {
      var text = "You made an isoceles triangle! Is it wide and flat or tall and narrow?";
    }

    else {
      var text = "You made a scalene triangle!  Way to think different!";
    }

    $("#output").empty().append(text);
    $("#output").show();
  
    event.preventDefault();
  
  });
});