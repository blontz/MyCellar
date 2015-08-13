function Varietal(name) {
    var self = this;
    self.name = name;
}

function VarietalListViewModel(parms) {
    var self = this;
    
    self.name = ko.observable('Merlot');
    self.id = ko.observable(parms.id);
    
    //Operations
    self.addVarietal = function () {
        self.varietals.push(new Varietal("New"));
    }

    self.removeVarietal = function (varietal) { 
        self.varietals.remove(Varietal); 
    }
}

ko.applyBindings(new VarietalListViewModel(data));