// let canvasReal = document.getElementById("canvas-real");
// let ctxReal = canvasReal.getContext("2d");
// let canvasDraft = document.getElementById("canvas-draft");
// let ctxDraft = canvasDraft.getContext("2d");

// let currenFunction;
// let dragging = false;

// // mousedown, mousemove, mouse up, mouseleave, mouseenter
// // mousedown
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