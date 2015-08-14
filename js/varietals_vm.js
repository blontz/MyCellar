function initVarietalListVM () {
    // bind the wineList instance to the KnockOut elements
    ko.applyBindings(new VarietalList());    
}

window.addEventListener("load", initVarietalListVM, false);
