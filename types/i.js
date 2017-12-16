function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
p1['z'] = 5; // error!
