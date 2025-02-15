var context;
var mycanvas;
var nodesize = 30;

function init() {
    mycanvas = document.getElementById("canvas");
    context = mycanvas.getContext("2d");
}

function drawnode(node) {
    ///draw a circle
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

    ///apply color
    context.fillStyle = node.color;
    context.fill();

   
}

function clear(node) {
    ///draw a circle
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

    ///apply color
    context.fillStyle = "white";
    context.fill();

    context.strokeStyle = "white";
    context.stroke();
}

function isfeasible(node, x, y) {
    //check if node will be within the canvas or not
    let check = true;

    //1. check if node will go beyond left boundary?
    //2. check if node will go beyond right boundary?
    //3. check if node will go beyond upper boundary?
    //4. check if node will go beyond lower boundary?
    return check;
}

function move(node, x, y) {
    if (isfeasible(node, x, y)) {
        //clear the node on the current location
        clear(node);

        //assign new location to the node
        node.x = x;
        node.y = y;

        //re-draw the node on the new location
        drawnode(node);
    }
}

function moveleft() {
    let x = node1.x - 10;
    let y = node1.y;
    move(node1, x, y)
}

function moveright() {
    let x = node1.x + 10;
    let y = node1.y;
    move(node1, x, y)
}

function moveup() {
    let x = node1.x;
    let y = node1.y - 10;
    move(node1, x, y)
}

function movedown() {
    let x = node1.x;
    let y = node1.y + 10;
    move(node1, x, y)
}

//initiate canvas
init();

var node1 = new node(1, 300, 200, 20, "blue");
drawnode(node1);

var node2 = new node(2, 150, 270, 30, "red");
drawnode(node2);

var node3 = new node(3, 350, 330, 10, "green");
drawnode(node3);

var node4 = new node(4, 400, 100, 40, "purple");
drawnode(node4);