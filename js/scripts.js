$(document).ready(function(){
    $("form#triangleCalculator").submit(function(event) {
        // console.log("button works");
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
        // console.log(side1, side2, side3)

        if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2){
            $("#notATriangle").show();
            $("#scalene").hide();
            $("#isosceles").hide();
            $("#equilateral").hide();   
        } else if (side1 === side2 && side2 === side3) {
            $("#equilateral").show();
            $("#isosceles").hide();
            $("#scalene").hide();
            $("#notATriangle").hide();
        } else if (side1 === side2 && side1 !== side3 || side1 === side3 && side1 !== side2 || side2 === side3 && side2 !== side1) {   
            $("#isosceles").show();
            $("#equilateral").hide();
            $("#scalene").hide();
            $("#notATriangle").hide();    
        } else if (side1 !== side2 && side1 !== side3 && side2 !== side3){
            $("#scalene").show();
            $("#isosceles").hide();
            $("#equilateral").hide();
            $("#notATriangle").hide();  
        }
        event.preventDefault();
    });
});
