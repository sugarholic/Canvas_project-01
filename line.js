
// class line extends PaintFunction {
//     constructor(ctxReal) {
//         super();
//         this.context = ctxReal;
//     }
//     onMouseDown(coord, events) {
//         this.context.strokeStyle = "#black";
//         // Kind of line
//         this.context.lineJoin = "round";
//         // Width of line
//         this.context.lineWidth = 2;
//         // Drawing the line here
//         this.context.beginPath();
//         this.context.moveTo(coord[0], coord[1]);
//     }
//     onDragging(coord, events) {
//         this.draw(coord[0], coord[1]);
//     }
//     onMouseMove() {}
//     onMouseUp() {}
//     onMouseLeave() {}
//     onMouseEnter() {}
  
//     draw(x, y) {
//       this.context.lineTo(x, y);
//       this.context.stroke();
//     }
// }









// // function line() {
// //     var ctxDraft = document.getElementById("canvas-draft").getContext("2d");
// //     ctxDraft.moveTo(10, 10);
// //     ctxDraft.lineTo( 50, 50);
// //     ctxDraft.stroke();
// // }
// // window.onload = line;