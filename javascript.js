/**
 * Constructing this in javascript just to implement in my website
 */
class Building {
    constructor(name) {
        this.name = name;
        this.value = 0;
        this.isSeen = false;
    }
};

function createBuilding() {
    var buildings = [];
    createBuildings();
}
/**
 * This function will create the buildings and put them
 * in an array to be examined.
 */
function createBuildings() {
    buildings = [];
    let buildingA = new Building("A");
    let buildingB = new Building("B");
    let buildingC = new Building("C");
    let buildingD = new Building("D");
    let buildingE = new Building("E");

   buildings.push(buildingA,buildingB,
    buildingC,buildingD,buildingE);

    // need to be able to to map on the input lables
    document.getElementById("buildingA").value = buildings[0].value;
}

function changeBuilding(building, newValue) {
    buildings[building].value = newValue;
    buildingAlg();
    document.getElementById("building1").value = buildings[0].value;
    document.getElementById("building2").value = buildings[1].value;
    document.getElementById("building3").value = buildings[2].value;
    document.getElementById("building4").value = buildings[3].value;
    document.getElementById("building5").value = buildings[4].value;
}

function getBuildingA(){
    var m = document.getElementById('A');
    m.setAttribute("data-percentage", "100");

}

function buildingAlg() {
    // Created a highest building to keep track

    let highestBuilding = 0;
    for (let index = 0; index < buildings.length; index++) {
        if (index == 0){
            if (buildings[index].value == 0){
                buildings[index].isSeen = false;
                continue;
            }
            else{
                buildings[index].isSeen = true;
                highestBuilding = buildings[index].value;
                continue;
            }
        }
        if (buildings[index].value > 0){
            let current = buildings[index].value;
            let previous = buildings[index - 1].value;
            if (current > previous && current > highestBuilding){
                buildings[index].isSeen = true;
                highestBuilding = buildings[index].value;
            }
            else{
                buildings[index].isSeen = false;
            }
        
        }
        else{
            buildings[index].isSeen = false;
        }
    }
}

function updateBuildings(){

    let a = document.getElementById("buildingA").value;
    let b = document.getElementById("A");
    let d = document.getElementById("B")
    //let c = a.toString();
    b.setAttribute("data-percentage",a);

}

function updateGraph(){
    $(function graph() {
        $('.bars li .bar').each(function (key, bar) {
            var percentage = $(this).data('percentage');
            $(this).animate({
                'height': percentage + '%'
            }, 1000);
        });
    });
}
function returnData(){
    updateBuildings();
    updateGraph();
}