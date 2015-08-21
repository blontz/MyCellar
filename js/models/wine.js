// Class constructor for the Wine class
function Wine(name, varietal, price, onHand, year) {
    var self = this;
 
    switch(arguments.length) {
        case 0: name = 'New';
        case 1: varietal = varietalList[0];
        case 2: price = 0;
        case 3: onHand = 0;
        case 4: year = 2015;
    }
    
    if (varietal === undefined || varietalList.indexOf(varietal) === -1) {
        console.log("Invalid varietal provided - " + varietal);
        varietal = varietalList[0];
    }
    
    this.name = name;
    this.varietal = varietal;
    this.price = price;
    this.onHand = onHand;
    this.year = year;
}
