function WineListViewModel() {

    // Non-editable properties - will come from database
    var self = this;
 
    // Editable properties
    this.wines = ko.observableArray();
    this.availableVarietals = ko.observableArray(VarietalList());

    // Methods
    // Create a method to add a wine to the list
    this.addWine = function (name, varietal, price, onHand, year) {
        self.wines.push(new Wine(name, varietal, price, onHand, year));
    }

    // Create a method to remove a wine from the wine list
    this.removeWine = function (wine) { 
        self.wines.remove(wine); 
    }
    
    // Create a method to load the wine list with wines
    this.retrieveWine = function () {
        var wineString = '{ "name": "First Taste", "varietal": "Merlot", "price": 24.99, "onHand": 0, "year": 2012}';
        self.wines.push(JSON.parse(wineString));
        self.addWine("Second Taste", "Cab", 19.99, 2, 2010);
    }
    
    // Create a method to save the wines in the wine list
    this.saveWine = function () {
        console.log("Saving " + this.wines().length + " wines...");
        for (i=0; i < this.wines().length; i++) {
            console.log(this.wines()[i]);
        }
    }
}

function initWineListVM () {
    // create a wineList View Model object and load it with wines
    var wineListVM = new WineListViewModel();
    wineListVM.retrieveWine();
    
    // bind the wineList instance to the KnockOut elements
    ko.applyBindings(wineListVM);    
}

window.addEventListener("load", initWineListVM, false);