import React, { useRef, useState } from "react";

const Demo = () => {
  const canvasRef = useRef(null); // Ref for the canvas
  const [textOutput, setTextOutput] = useState("Your converted text will appear here...");

  // Function to start drawing on the canvas
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    canvas.isDrawing = true;
  };

  // Function to draw while the mouse is moving
  const draw = (e) => {
    if (!canvasRef.current.isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  // Function to stop drawing when mouse is up
  const stopDrawing = () => {
    canvasRef.current.isDrawing = false;
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center py-4">Try Our Smart Writing Demo</h1>

      <div className="flex flex-1">
        {/* Left side: Drawing Area */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <canvas
            ref={canvasRef}
            width={500}
            height={400}
            className="border-2 border-gray-400 rounded-lg bg-white"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          ></canvas>
        </div>

        {/* Right side: Converted Text Area */}
        <div className="w-1/2 bg-blue-50 p-6 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Converted Text</h2>
          <div className="p-4 bg-white border rounded shadow min-h-[200px]">
            {textOutput}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
