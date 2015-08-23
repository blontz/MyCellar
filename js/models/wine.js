// Class constructor for the Wine class
function Wine(name, varietal, price, onHand, year) {
    var self = this;
    
    // Setup a default list of valid varietals
    var validVarietals = VarietalList();
 
    switch(arguments.length) {
        case 0: name = 'New';
        case 1: varietal = validVarietals[0];
        case 2: price = 0;
        case 3: onHand = 0;
        case 4: year = 2015;
    }
    
    if (varietal === undefined || validVarietals.indexOf(varietal) === -1) {
        console.log("Invalid varietal provided - " + varietal);
        varietal = validVarietals[0];
    }
    
    this.name = name;
    this.varietal = varietal;
    this.price = price;
    this.onHand = onHand;
    this.year = year;
}
