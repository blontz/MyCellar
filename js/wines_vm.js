function Wine(name, varietal) {
    var self = this;
    self.name = name;
    self.varietal = varietal;
}

function WineListViewModel() {
    var self = this;

    // Non-editable data - will come from database
    self.availableVarieties = ["Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];
    self.test = "Just Testing";
 
    // Editable data
    self.wines = ko.observableArray([
        new Wine("First Taste", "Merlot"),
        new Wine("Second Taste", "Cab")
    ]);

    //Operations
    self.addWine = function () {
        self.wines.push(new Wine("New", "New"));
    }

    self.removeWine = function (wine) { self.wines.remove(wine); }
}

ko.applyBindings(new WineListViewModel());