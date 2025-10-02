import React, { useState, useEffect } from "react";

export default function Time({ startTime }) {
  const dat = startTime;

  const [currentTime, setCurrentTime] = React.useState(new Date());

  const currentTime1 = dat.toLocaleTimeString();

  setTimeout(() => {
    setCurrentTime(new Date());
  }, 1000);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1>Hello World</h1>
        {/* <h2>{currentTime.toLocaleTimeString()}</h2> */}
        <h3>{dat.toLocaleTimeString()}</h3>
        {currentTime1}
      </div>
    </div>
  );
}
