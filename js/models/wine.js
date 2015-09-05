var wineModule = (function () {
    // Class constructor for the Wine class
    function Wine(name, varietal, price, onHand, year) {
        var vm = this;
    
        // Setup a default list of valid varietals
        var validVarietals = varietalModule.VarietalList();
 
        switch(arguments.length) {
            case 0: name = 'New';
            case 1: varietal = validVarietals[0];
            case 2: price = 0;
            case 3: onHand = 0;
            case 4: year = 2015;
        }
    
        if (varietal === undefined || validVarietals.indexOf(varietal) === -1) {
            console.log("Invalid varietal provided - " + varietal);
            varietal = validVarietals[0];
        }
    
        vm.name = name;
        vm.varietal = varietal;
        vm.price = price;
        vm.onHand = onHand;
        vm.year = year;
    }
    // Public API
    return {
        Wine : Wine
    }
})();   // Immediately-Invoked-Function-Expression