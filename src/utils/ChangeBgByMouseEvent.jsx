"use client";
import { useState } from "react";

const ChangeBgMouseEvent = () => {
  const [backgroundPosition, setBackgroundPosition] =
    useState("1209px 3358.33px");

  const handleMouseMove = (event) => {
    // Calculate the new background position based on mouse coordinates
    const { clientX, clientY } = event;
    const x = clientX - event.target.offsetLeft;
    const y = clientY - event.target.offsetTop;
    const newBackgroundPosition = `${x}px ${y}px`;

    // Update the background position state
    setBackgroundPosition(newBackgroundPosition);
  };

  return (
    <div
      className="w-full h-full absolute inset-0"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${backgroundPosition}, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default ChangeBgMouseEvent;
