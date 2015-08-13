﻿function WineListViewModel() {

    // Non-editable properties - will come from database
    var self = this;
    self.availableVarieties = ["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];
 
    // Editable properties
    self.wines = ko.observableArray();

    // Methods
    // Create a method to add a wine to the list
    self.addWine = function (name, varietal) {
        var name = name || "New";

        if (varietal === undefined || this.availableVarieties.indexOf(varietal) === -1) {
            varietal = self.availableVarieties[0];
        }
                        
        self.wines.push(new Wine(name, varietal));
    }

    // Create a method to remove a wine from the wine list
    self.removeWine = function (wine) { 
        self.wines.remove(wine); 
    }
    
    // Create a method to load the wine list with wines
    self.retrieveWine = function () {
        var wineString = '{ "name": "First Taste", "varietal": "Merlot"}';
        self.wines.push(JSON.parse(wineString));
        self.addWine("Second Taste", "Cab");
    }
    
    // Create a method to save the wines in the wine list
    self.saveWine = function () {
        console.log("Saving " + self.wines().length + " wines...");
        for (i=0; i < self.wines().length; i++) {
            console.log(self.wines()[i]);
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