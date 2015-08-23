function VarietalListViewModel() {
    var self = this;
 
    // Define the possible set of wine colors
    self.availableColors = ko.observableArray(["Red", "White", "Rose", "Gray", "Orange", "Tawny", "Yellow"]);
    
    // Load varietals into the array
    self.varietals = ko.observableArray();
    
    // Replace this with a service call to load Varietals via JSON from DB
    var validVarietals = VarietalList();
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


function initVarietalListVM () {
    // bind the wineList instance to the KnockOut elements
    ko.applyBindings(new VarietalListViewModel());    
}

window.addEventListener("load", initVarietalListVM, false);
