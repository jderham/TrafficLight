import React from "react";
import BaseLightState from "@/app/components/TrafficLight/states/BaseLightState";
import { ReactElement } from "react";

// const lights = ["red", "yellow", "green"];

const lightStyles = {
    // red: { background: "red" },
    yellow: { background: "yellow" },
    // green: { background: "green" },
    off: { background: "#333" }
};

export default class YellowLightState extends BaseLightState {

    constructor( f_scs: (newState: string, oldState: BaseLightState) => void ) {
        super(f_scs, 4);
        console.log("YellowLightState constructor called");
        this.active = false; // Initialize active state
    }

    // onEntry() {
    //     super.onEntry();
    //     // console.log("\t\t\t\tYellow light is ", this.active ? "on" : "off");
    // }

    // onExit(): void {
    //     super.onExit();
    //     // console.log("Processing Exiting YellowLightState", this.constructor.name, this.active);
    // }

    ProcessTick() {
        console.log("Yellow light processing tick...");
    }

    onTimerExpired(): void {
        console.log("Yellow light timer expired",);
        this.changeParentState( "RedLightState", this );
    }

    render() : ReactElement{
        return (
            <div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: this.active ? `0 0 20px 5px yellow` : "none",
                    ... (this.active ? lightStyles.yellow : lightStyles.off)
                }}  
            />
        );
    }
}

