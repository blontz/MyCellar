// Utilize the Revealing Module Pattern
// Class constructor for the Varietal class.  This will be implemented at a
// later point.  Initially, the varietal is being treated as a single deminsion.
var varietalModule = (function() {
    function Varietal (grape, color) {
        var vm = this;
    
        vm.grape = grape || "Unknown";
        vm.color = color || "Red";
    }

    function VarietalList () {
        // Temporary list of valid varietals until the save and load are complete
        var listItems = ["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];
    
        return listItems;
    }
    // Public API
    return {
        Varietal : Varietal,
        VarietalList : VarietalList
    }
})();  // Immediately-Invoked-Function-Expression
