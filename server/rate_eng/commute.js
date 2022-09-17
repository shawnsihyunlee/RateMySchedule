// 0 : ANSYS Hall AN
// 1 : Baker Hall BH
// 2 : Cohon University Center CUC
// 3 : College of Fine Arts CFA
// 4 : Cyert Hall CYH 
// 5 : Doherty Hall DH
// 6 : Gates Hillman Center for Computer Science GHC
// 7 : Hall of the Arts HOA
// 8 : Hamburg Hall HBH
// 9 : Hamerschlag Hall HH
// 10 : Hunt Library HL
// 11 : Integrated Innovation Institute III
// 12 : Margaret Morrison Carnegie Hall MM
// 13 : Mellon Institute MI
// 14 : Newell-Simon Hall NSH
// 15 : Porter Hall PH
// 16 : Posner Center POS
// 17 : Purnell Center for the Arts PCA
// 18 : Roberts Engineering Hall REH
// 19 : Scaife Hall SH
// 20 : Scott Hall SC
// 21 : Smith Hall EDS
// 22 : Software Engineering Institute SEI 
// 23 : TCS Hall TCS
// 24 : Tepper Building TEP
// 25 : Warner Hall WH
// 26 : Wean Hall WEH
// 27 : West Wing WWG
// 28 : Whitfield Hall WF

// API Key : AIzaSyB7fxAIjgUyAx9zt9HZfuAfM5_-NRvHmw4

const buildings = ["ANSYS Hall AN"
, "Baker Hall BH"
, "Cohon University Center CUC"
, "College of Fine Arts CFA"
, "Cyert Hall CYH "
, "Doherty Hall DH"
, "Gates Hillman Center for Computer Science GHC"
, "Hall of the Arts HOA"
, "Hamburg Hall HBH"
, "Hamerschlag Hall HH"
, "Hunt Library HL"
, "Integrated Innovation Institute III"
, "Margaret Morrison Carnegie Hall MM"
, "Mellon Institute MI"
, "Newell-Simon Hall NSH"
, "Porter Hall PH"
, "Posner Center POS"
, "Purnell Center for the Arts PCA"
, "Roberts Engineering Hall REH"
, "Scaife Hall SH"
, "Scott Hall SC"
, "Smith Hall EDS"
, "Software Engineering Institute SEI "
, "TCS Hall TCS"
, "Tepper Building TEP"
, "Warner Hall WH"
, "Wean Hall WEH"
, "West Wing WWG"
, "Whitfield Hall WF"];


src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7fxAIjgUyAx9zt9HZfuAfM5_-NRvHmw4&callback=initMap"

function create_routes(buildings) {
    origins = [];
    destinations = [];
    for (let i = 0; i < buildings.length; i++) {
        for (let j = 0; j < buildings[i].length; j++) {
            if (buildings[i] !== buildings[j]) {
                origins.push(buildings[i]);
                destinations.push(buildings[j]);
            }
        }
    }
    return {"origins" : origins, "destinations" : destinations};
}

let routes = create_routes(buildings);
console.log(routes.origins);
console.log(routes.destinations);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    transitOptions: TransitOptions,
    drivingOptions: DrivingOptions,
    unitSystem: UnitSystem,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
}