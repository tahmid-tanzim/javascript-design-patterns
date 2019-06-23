/* Singleton Pattern */

var vehicle = (function () {
    var v;

    function init(w, p, g) {
        var wheels = w || 0;
        var passengers = p || 0;
        var hasGas = g || false;

        return {
            set_num_of_wheels: function (w) {
                wheels = w;
                return wheels;
            },
            set_num_of_passengers: function (p) {
                passengers = p;
                return passengers;
            },
            has_gas: function () {
                return hasGas;
            },
            print: function () {
                console.log("No of wheels: " + wheels);
                console.log("No of passengers: " + passengers);
                console.log("Gas: " + hasGas + "\n");
            }
        };
    }

    return {
        create: function (wheels, passengers, hasGas) {
            if (typeof v === 'undefined') {
                v = init(wheels, passengers, hasGas);
            }

            return v;
        }
    };
})();

var car = vehicle.create(4, 5, false);
var plane = vehicle.create(3, 100, true);

car.set_num_of_passengers(2);
plane.set_num_of_wheels(18);

car.print();
plane.print();