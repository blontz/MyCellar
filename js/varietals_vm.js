function Varietal(name) {
    var self = this;
    self.name = name;
}

function VarietalListViewModel(res) {
    var self = this;
    
    self.varietals = ko.mapping.fromJS(res);

    //Operations
    self.addVarietal = function () {
        self.varietals.push(new Varietal("New"));
    }

    self.removeVarietal = function (varietal) { 
        self.varietals.remove(Varietal); 
    }
}

ko.applyBindings(new VarietalListViewModel());