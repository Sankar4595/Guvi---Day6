function uberPrice (){
    this.price;
    this.distance;
}
var perkm = 7;

var passenger1 = new uberPrice();
passenger1.distance = 12;
passenger1.price = passenger1.distance*perkm;
console.log(passenger1.price); // // Output : 84