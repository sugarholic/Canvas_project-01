// class DrawingRectangle extends PaintFunction {
//     constructor(ctxReal, contxDraft) {
//       super();
//       this.ctxReal = ctxReal;
//       this.ctxDraft = ctxDraft;
//     }
  
//     onMouseDown(coord, event) {
//       this.ctxReal.fillStyle = "#f44";
//       this.origX = coord[0];
//       this.origY = coord[1];
//     }
  
//     onDragging(coord, event) {
//       // Manipulating the context draft
//       this.ctxDraft.fillStyle = "#f44";
//       // Allows you to actually draw out your squares
//       this.ctxDraft.clearRect(
//         0,
//         0,
//         canvasDraft.width,
//         canvasDraft.height
//       );
//       // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
//       this.ctxDraft.fillRect(
//         this.origX,
//         this.origY,
//         coord[0] - this.origX,
//         coord[1] - this.origY
//       );
//     }
  
//     onMouseMove() {}
  
//     // Committing the element to the canvas
//     onMouseUp(coord) {
//       // Clearing the rectangle first
//       this.ctxDraft.clearRect(
//         0,
//         0,
//         canvasDraft.width,
//         canvasDraft.height
//       );
//       // Commit that drawing to context real
//       // Without this commit, it won't actually draw
//       this.ctxReal.fillRect(
//         this.origX,
//         this.origY,
//         coord[0] - this.origX,
//         coord[1] - this.origY
//       );
//     }
//     onMouseLeave() {}
//     onMouseEnter() {}
//   }
  