
export function Triangle(side1, side2, this) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
}

Triangle.prototype.notTriangle = function(){
  if (this.side1 + this.side2 <= this.side3 || this.side2 + this.side3 <= this.side1 || this.side3 + this.side1 <= this.side2){
    $("#notATriangle").show();
    $("#scalene").hide();
    $("#isosceles").hide();
    $("#equilateral").hide();  
  }
}

Triangle.prototype.equilateral = function(){
  if (this.side1 === this.side2 && this.side2 === this.side3){
    $("#equilateral").show();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#notATriangle").hide();
  }
}

Triangle.prototype.isosceles = function(){
  if (this.side1 === this.side2 && this.side1 !== this.side3 || this.side1 === this.side3 && this.side1 !== this.side2 || this.side2 === this.side3 && this.side2 !== this.side1){
    $("#isosceles").show();
    $("#equilateral").hide();
    $("#scalene").hide();
    $("#notATriangle").hide();
  }
}
Triangle.prototype.scalene = function(){
  if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3){
    $("#scalene").show();
    $("#isosceles").hide();
    $("#equilateral").hide();
    $("#notATriangle").hide(); 
  }
}


  exports.triangleModule = Triangle;