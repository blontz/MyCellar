// Class constructor for the Varietal class.  This will be implemented at a
// later point.  Initially, the varietal is being treated as a single deminsion.
function Varietal (grape, color) {
    var self = this;
    
    self.grape = grape || "Unknown";
    self.color = color || "Red";
}

function VarietalList () {
    // Temporary list of valid varietals until the save and load are complete
    var listItems = ["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];
    
    return listItems;
}
