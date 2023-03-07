// let canvasReal = document.getElementById("canvas-real");
// let ctxReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let ctxDraft = canvasDraft.getContext("2d");





//global variable
//let currenFunction;
//let dragging = false;
let prevMouseX, prevMouseY, snapshot,
isDrawing = false; //can specify later cuz, when we enter the canvas, it starts drawing
draw_color = "black";
brushWidth = 2;
selectedTool = "pen";

//undo 
let restore_array = [];
let index = -1;
let erasing = false;

//change_color
function change_color(element) {
    draw_color = element.style.background;
}

window.addEventListener("load", () => {
    canvasDraft.width = canvasDraft.offsetWidth;
    canvasDraft.height = canvasDraft.offsetHeight;
    // canvasReal.width = canvasReal.offsetWidth;
    // canvasReal.height = canvasReal.offsetHeight;
})




const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; //mouseX position as prevMouse value
    prevMouseY = e.offsetY;
    ctxDraft.beginPath(); //create a new path to draw instead of connect from the last point
    ctxDraft.lineWidth = brushWidth; //which is = 2
    snapshot = ctxDraft.getImageData(0, 0, canvasDraft.width, canvasDraft.height);
}

const drawing = (e) => {
    if(!isDrawing) return; //if not drawing, return starts here
    ctxDraft.putImageData(snapshot, 0, 0);

    if(selectedTool === "pen") {
        ctxDraft.lineTo(e.offsetX, e.offsetY);
        ctxDraft.stroke();
    } else if(selectedTool === "rectangle") {
        drawRect(e);
    }
        ctxDraft.strokeStyle = draw_color; 


    e.preventDefault();

    //undo 
    if(e.type != "mouseout") {
        restore_array.push(ctxDraft.getImageData(0, 0, canvasDraft.width, canvasDraft.height));
        index += 1;  
    }
}

// const erase = () => context.globalCompositeOperation = "destination-out";
// const changeColor =  color => {
//     ctxDraft.strokeStyle = color;
//     ctxDraft.globalCompositeOperation = "source-over";

//     if(e.type != "mouseout") {
//         restore_array.push(ctxDraft.getImageData(0, 0, canvasDraft.width, canvasDraft.height));
//         index += 1;  
//     }
// }

function clear_canvas() {
    ctxDraft.fillStyle = "#ecedef";
    ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    ctxDraft.fillRect(0, 0, canvasDraft.width, canvasDraft.height);

    restore_array = [];
    index = -1;
}

function undo_last() {
    if (index <= 0) {
        clear_canvas();
    } else {
        index -= 1;
        restore_array.pop();
        ctxDraft.putImageData(restore_array[index], 0, 0);
    }
}

toolBtns = document.querySelectorAll(".shapes");

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // document.querySelector(".tool .active").classList.remove("active");
        // btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});



canvasDraft.addEventListener("mousedown", startDraw); //when clicked, start draw
canvasDraft.addEventListener("mouseup", () => isDrawing = false); //when release click, stop draw
canvasDraft.addEventListener("mousemove", drawing);
canvasDraft.addEventListener("mouseout", () => isDrawing = false)