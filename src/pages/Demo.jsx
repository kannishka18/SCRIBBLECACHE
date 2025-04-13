// src/pages/Demo.jsx
import React, { useRef, useEffect, useState } from "react";

const Demo = () => {
  const canvasRef = useRef(null);
  const [textOutput, setTextOutput] = useState("Your converted text will appear here...");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Setup drawing styles
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        pressure: e.pressure || 1, // 0.0 - 1.0
      };
    };

    let drawing = false;

    const handlePointerDown = (e) => {
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineWidth = 2 * pos.pressure;
      drawing = true;
    };

    const handlePointerMove = (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.lineWidth = 2 * pos.pressure;
      ctx.stroke();
    };

    const handlePointerUp = () => {
      drawing = false;
    };

    // Add listeners
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerUp);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl font-bold text-center py-4">Try Our Smart Writing Demo</h1>
      <div className="flex flex-1">
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="border-2 border-gray-400 rounded-lg bg-white touch-none"
          />
        </div>

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
