function VarietalListViewModel() {
    var vm = this;
 
    // Define the possible set of wine colors
    vm.availableColors = ko.observableArray(["Red", "White", "Rose", "Gray", "Orange", "Tawny", "Yellow"]);
    
    // Load varietals into the array
    vm.varietals = ko.observableArray();
    
    // Replace this with a service call to load Varietals via JSON from DB
    var validVarietals = varietalModule.VarietalList();
    for (i=0; i < validVarietals.length; i++) {
        vm.varietals.push(new varietalModule.Varietal(validVarietals[i], "Red"));
    }

    // Methods
    // Create a method to add a varietal to the list
    vm.addVarietal = function (varietal) {
        vm.varietals.push(new varietalModule.Varietal(varietal, "Red"));
    }
    
    // Create a method to remove a varietal from the list
    vm.removeVarietal = function (varietal) {
        vm.varietals.remove(varietal);
    }
    
    // Create a method to save the varietals list
    vm.saveVarietals = function () {
        console.log("Saving " + vm.varietals().length + " varietals.");
        for (i=0; i < vm.varietals().length; i++) {
            console.log(vm.varietals()[i]);
        }
    }
}


function initVarietalListVM () {
    // bind the wineList instance to the KnockOut elements
    ko.applyBindings(new VarietalListViewModel());    
}

window.addEventListener("load", initVarietalListVM, false);
