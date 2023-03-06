let canvasReal = document.getElementById("canvas-real");
let ctxReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let ctxDraft = canvasDraft.getContext("2d");

//buttons
// buttons = document.querySelectorAll(".btn");


let currenFunction;
let dragging = false; //can specify if we want to drag later or not


//global variable
let isDrawing = false; //can specify later cuz, when we enter the canvas, it starts drawing
let draw_color = "black";
let brushWidth = 2;

//change_color
function change_color(element) {
    draw_color = element.style.background;
}

window.addEventListener("load", () => {
    canvasDraft.width = canvasDraft.offsetWidth;
    canvasDraft.height = canvasDraft.offsetHeight;
    canvasReal.width = canvasReal.offsetWidth;
    canvasReal.height = canvasReal.offsetHeight;
})

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; //mouseX position as prevMouse value
    prevMouseY = e.offsetY;
    ctxDraft.beginPath(); //create a new path to draw instead of connect from the last point
    ctxDraft.lineWidth = brushWidth; //which is = 3
}

const drawing = (e) => {
    if(!isDrawing) return; //if not drawing, return starts here
    ctxDraft.lineTo(e.offsetX, e.offsetY);
    ctxDraft.stroke();
    ctxDraft.strokeStyle = draw_color;
}

canvasDraft.addEventListener("mousedown", startDraw); //when clicked, start draw
canvasDraft.addEventListener("mouseup", () => isDrawing = false); //when release click, stop draw
canvasDraft.addEventListener("mousemove", drawing);




// mousedown, mousemove, mouse up, mouseleave, mouseenter
// mousedown
// $("#canvas-draft").mousedown(function(e){
//     let mouseX = e.offsetX; //read-only property, used for returning x-coordinate of mouse pointer
//     let mouseY = e.offsetY;
//     currentFunction.onMouseDown([mouseX, mouseY], e);
//     dragging = true;
// });

// //mousemove
// $("#canvas-draft").mousemove(function(e){
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     if(dragging){
//         currenFunction.onDragging([mouseX, mouseY],e);
//     }    
//         currentFunction.onMouseMove([mouseX, mouseY], e);
    
// });

// //mouseup
// $("#canvas-draft").mouseup(function(e){
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     dragging = false;
//     currentFunction.onMouseUp([mouseX, mouseY], e);
// });

// //mouseleave
// $("#canvas-draft").mouseleave(function(e){
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     dragging = false;
//     currentFunction.onMouseLeave([mouseX, mouseY], e);
// });

// //mouseenter
// $("#canvas-draft").mouseenter(function(e){
//     let MouseX = e.offsetX;
//     let MouseY = e.offsetY;
//     currenFunction.onMouseEnter([mouseX, mouseY],e);
// });

// //blue-print (class)
// class PaintFunction{
//     constructor () {}
//     onMouseDown() {}
//     onDragging() {}
//     onMouseMove() {}
//     onMouseUp() {}
//     onMouseLeave() {}
//     onMouseEnter() {}
// }