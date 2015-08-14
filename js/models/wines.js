// Class constructor for the Wine class
function Wine(name, varietal) {
    var self = this;
    self.name = name || "New Wine";

    if (varietal === undefined || validVarietals.indexOf(varietal) === -1) {
        console.log("Invalid varietal provided - " + varietal);
        varietal = validVarietals[0];
    }
    self.varietal = varietal;
}

// Class constructor for the Varietal class.  This will be implemented at a
// later point.  Initially, the varietal is being treated as a single deminsion.
function Varietal (grape, color) {
    var self = this;
    
    self.grape = grape || "Unknown";
    self.color = color || "Red";
}

function VarietalList() {
    var self = this;
 
    // Load varietals into the array
    self.varietals = ko.observableArray();
    
    for (i=0; i < validVarietals.length; i++) {
        self.varietals.push(new Varietal(validVarietals[i], "Red"));
    }

    // Methods
    // Create a method to add a varietal to the list
    self.addVarietal = function (varietal) {
        self.varietals.push(new Varietal(varietal, "Red"));
    }
    
    // Create a method to remove a varietal from the list
    self.removeVarietal = function (varietal) {
        self.varietals.remove(varietal);
    }
    
    // Create a method to save the varietals list
    self.saveVarietals = function () {
        console.log("Saving " + self.varietals().length + " varietals.");
        for (i=0; i < self.varietals().length; i++) {
            console.log(self.varietals()[i]);
        }
    }
}

// Temporary list of valid varietals until the save and load are complete
var validVarietals = ["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];