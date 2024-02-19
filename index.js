

// hide certain member on the outside
// we will define as local var

function Car (name , color, cost ) {
   this.name = name;
   this.color = color; 
   this.cost = cost;
   this.increasedCost = 100;

   // calculate
   this.calFinalCost = function () {
    let final = this.cost + this.increasedCost;
    console.log(`Final Cost is : ${final}`)
   }

   // car info
   this.carDetails = function () {
    console.log(`Name: ${this.name}  Color: ${this.color} Cost: ${this.cost}`)
   }
}

let emp = new Car("Toyoto","black",800);
emp.carDetails();
emp.calFinalCost();
