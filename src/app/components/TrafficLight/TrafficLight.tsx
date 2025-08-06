import React, { useState, useEffect } from "react";
import BaseLightState from "@/app/components/TrafficLight/states/BaseLightState";
// import TrafficLightStateMachine from "@/testComponents/TrafficLightStateMachine";
import RedLightState from "@/app/components/TrafficLight/states/RedLightState";
import YellowLightState from "@/app/components/TrafficLight/states/YellowLightState";
import GreenLightState from "@/app/components/TrafficLight/states/GreenLightState";

// const lights = ["red", "yellow", "green"];

function TrafficLight() {
    const [counter, setCounter] = useState<number>(10);
    const stateMap:Map<string, BaseLightState> = new Map<string, BaseLightState>();

    const [redLight] = useState<BaseLightState>(() => new RedLightState(changeState, true));
    const [yellowLight] = useState<BaseLightState>(() => new YellowLightState(changeState));
    const [greenLight] = useState<BaseLightState>(() => new GreenLightState(changeState));

    const [blinking, setBlinking] = useState<boolean>(false);

    const [rerender, setRerender] = useState<number>(0);

    function forceRerender() : void{
        setRerender(prev => prev + 1);
    }

    // const [states] = useState<BaseLightState[]>([redLight, yellowLight, greenLight]);
    // states.forEach(state => {
    //     stateMap.set(state.constructor.name, state);
    // });

    stateMap.set("RedLightState", redLight);
    stateMap.set("YellowLightState", yellowLight);
    stateMap.set("GreenLightState", greenLight);

    const [currentState, setCurrentState] = useState<BaseLightState>(redLight);

    function changeState(newState: string, oldState: BaseLightState) {
        // console.log("Changing state from", oldState.constructor.name, "to", newState);
        oldState.onExit();


        const ns = stateMap.get( newState ) as BaseLightState;

        setCurrentState( ns );
        ns.onEntry();

        setCounter(ns.maxCounter);
    }


    function nextLight() {
        currentState.onTimerExpired();
    }

    function onFault() {
        currentState.onFault();
        setBlinking( true );
    }

    function toggleBlinkLight() {
        console.log("Toggling blinking state", blinking, "->", !blinking);
        // Toggle the blinking state
        if ( blinking ) {
            currentState.active = true;
        }
        setBlinking( !blinking );
    }

    function tick() {

        // console.log( "blinking = ", blinking );
        if ( blinking ) {
            currentState.active = !currentState.active;
            // console.log( "Blinking light is now", currentState.active ? "on" : "off" );
        }
        else {
            currentState.active = true; // Ensure the light is on when not blinking
        }

        setCounter( previousCount => previousCount - 1 );

        currentState.ProcessTick();

        if ( (counter-1 < 1) && !blinking ) {
            currentState.onTimerExpired();
        }
    }

    function Fault() {
        currentState.onFault();
        setBlinking( true );
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            tick();
        }, 500); // Update every 500ms (0.5 seconds)

        return () => {clearInterval(intervalId)}; // Cleanup function
    }, [counter]); // Use an empty dependency array to run once on mount

    // console.log( "Rendering TrafficLight with current state:", currentState.constructor.name, "active:", currentState.active, blinking );
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
                {redLight.render()}
                {yellowLight.render()}
                {greenLight.render()}
            </div>

            <button id="next-button" onClick={nextLight} style={{ marginTop: 30, padding: "10px 20px" }}>
                Next
            </button>

            <button id="blink-button" onClick={toggleBlinkLight} style={{ marginTop: 30, padding: "10px 20px" }}>
                Blink
            </button>

            <button id="fault-button" onClick={onFault} style={{ marginTop: 30, padding: "10px 20px" }}>
                Fault
            </button>

            Next light in: {counter>=0?counter:0} seconds
        </div>
    );
}


export default TrafficLight;