//rectangle
const drawRect = (e) => {
    if (!fillColor.checked) {
        return ctxDraft.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
     ctxDraft.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}


//circle
const drawCircle = (e) => {
    ctxDraft.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctxDraft.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    fillColor.checked ? ctxDraft.fill() : ctxDraft.stroke();
}


//triangle
const drawTriangle = (e) => {
    ctxDraft.beginPath();
    ctxDraft.moveTo(prevMouseX, prevMouseY); // moving the mouse to a mouse pointer
    ctxDraft.lineTo(e.offsetX, e.offsetY); //creating first line accoring to mouse pointer
    ctxDraft.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctxDraft.closePath();
    fillColor.checked ? ctxDraft.fill() : ctxDraft.stroke(); 
}


//line
const drawLine = (e) => {
    ctxDraft.beginPath();
    ctxDraft.moveTo(prevMouseX, prevMouseY);
    ctxDraft.lineTo(e.offsetX, e.offsetY);
    ctxDraft.stroke();
}

//curve



// const drawCurve = (e) => {
//     let pointX = Math.floor((prevMouseX + e.offsetX)/2);
//     let pointY = Math.floor(e.offsetY / 2)
//     let cObject = {
//         beginPoint: { x: prevMouseX, y: prevMouseY},
//         controlPoint: {x:pointX, y: pointY},
//         endPoint:{x: e.offsetX, y: e.offsetY}
//     }

//     ctxDraft.beginPath();
//     ctxDraft.moveTo(cObject.beginPoint.prevMouseX, cObject.beginPoint.prevMouseY);
//     ctxDraft.qaudraticCurveTo(cObject.controlPoint, cObject.controlPoint, cObject.endPoint, cObject.endPoint);
//     ctxDraft.stroke();
// }

  