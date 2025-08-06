import React, { useState, useEffect } from "react";

const lights = ["red", "yellow", "green"];

const lightStyles = {
    red: { background: "red" },
    yellow: { background: "yellow" },
    green: { background: "green" },
    off: { background: "#333" }
};

function CountdownTimer() {
    const [active, setActive] = useState(0);

    const nextLight = () => setActive((active + lights.length - 1) % lights.length);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // setTime(prevTime => prevTime - 1); // For a countdown
            // Or setTime(prevTime => prevTime + 1); // For a stopwatch
            }, 1000); // Update every 1000ms (1 second)
          return () => clearInterval(intervalId); // Cleanup function
        }, []); // Empty dependency array to run once on mount

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
            <div style={{
                width: 60,
                background: "#222",
                padding: 10,
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                gap: 20
            }}>
                {lights.map((color, idx) => (
                    <div
                        key={color}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            margin: "0 auto",
                            boxShadow: active === idx ? `0 0 20px 5px ${color}` : "none",
                            ...lightStyles[active === idx ? color : "off"]
                        }}
                    />
                ))}
            </div>
            <button onClick={nextLight} style={{ marginTop: 30, padding: "10px 20px" }}>
                Next
            </button>
        </div>
    );
}

export default CountdownTimer;