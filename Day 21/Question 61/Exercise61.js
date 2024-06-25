"use strict";
var modeOfTransport;
(function (modeOfTransport) {
    modeOfTransport[modeOfTransport["Car"] = 0] = "Car";
    modeOfTransport[modeOfTransport["Motorcycle"] = 1] = "Motorcycle";
    modeOfTransport[modeOfTransport["Truck"] = 2] = "Truck";
    modeOfTransport[modeOfTransport["Ship"] = 3] = "Ship";
})(modeOfTransport || (modeOfTransport = {}));
;
console.log(modeOfTransport.Motorcycle);
console.log(modeOfTransport.Truck);
