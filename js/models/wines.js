function Wine(name, varietal) {
    var self = this;
    self.name = name || "New Wine";

    if (varietal === undefined || validVarieties.indexOf(varietal) === -1) {
        varietal = validVarieties[0];
    }
    self.varietal = varietal;
}

function VarietalList() {
    var self = this;
 
    // Editable properties
    self.varietes = ko.observableArray(["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"]);

    // Methods
    // Create a method to add a variety to the list
    self.addVariety = function (varietal) {
        var varietal = varietal || "Unknown";
        self.varietes.push(varietal);
    }
}

var validVarieties = new VarietalList();
