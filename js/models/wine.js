// Class constructor for the Wine class
function Wine(name, varietal) {
    var self = this;
 
    switch(arguments.length) {
        case 1: name = 'New';
        case 2: varietal = varietalList[0];
    }
    
    if (varietal === undefined || varietalList.indexOf(varietal) === -1) {
        console.log("Invalid varietal provided - " + varietal);
        varietal = varietalList[0];
    }
    
    self.name = name;
    self.varietal = varietal;
}
