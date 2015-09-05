function WineListViewModel() {

    // Non-editable properties - will come from database
    var vm = this;
 
    // Editable properties
    vm.wines = ko.observableArray();
    vm.availableVarietals = ko.observableArray(varietalModule.VarietalList());

    // Methods
    // Create a method to add a wine to the list
    vm.addWine = function (name, varietal, price, onHand, year) {
        vm.wines.push(new wineModule.Wine(name, varietal, price, onHand, year));
    }

    // Create a method to remove a wine from the wine list
    vm.removeWine = function (wine) { 
        vm.wines.remove(wine); 
    }
    
    // Create a method to load the wine list with wines
    vm.retrieveWine = function () {
        var wineString = '{ "name": "First Taste", "varietal": "Merlot", "price": 24.99, "onHand": 0, "year": 2012}';
        vm.wines.push(JSON.parse(wineString));
        vm.addWine("Second Taste", "Cab", 19.99, 2, 2010);
    }
    
    // Create a method to save the wines in the wine list
    vm.saveWine = function () {
        console.log("Saving " + vm.wines().length + " wines...");
        for (i=0; i < vm.wines().length; i++) {
            console.log(vm.wines()[i]);
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