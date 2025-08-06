import BaseLightState from "@/app/components/TrafficLight/states/BaseLightState";
// import GreenLightState from "@/testComponents/GreenLightState";
import { ReactElement } from "react";

// const lights = ["red", "yellow", "green"];

const lightStyles = {
    red: { background: "red" },
    // yellow: { background: "yellow" },
    // green: { background: "green" },
    off: { background: "#333" }
};

export default class RedLightState extends BaseLightState {

    constructor( f_scs: (newState: string, oldState: BaseLightState) => void, active: boolean = false ) {
        super(f_scs, 10);
        this.active = active;
        // console.log("RedLightState constructor called");
    }

    // onEntry() {
    //     super.onEntry();
    //     // console.log("\t\t\t\tRed light is ", this.active ? "on" : "off");
    // }

    // onExit(): void {
    //     super.onExit();
    //     // this.active = false; // Set active to false on exit
    //     // console.log("Processing Exiting RedLightState", this.constructor.name, this.active);
    // }

    ProcessTick() {
        console.log("Red light processing tick..." );
    }

    onTimerExpired(): number {
        console.log("Red light timer expired");
        this.changeParentState( "GreenLightState", this );
        return 10;
    }

    render() : ReactElement{
        // console.log( "Rendering RedLightState", this.active );
        return (
            <div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: this.active ? `0 0 20px 5px red` : "none",
                    ... (this.active ? lightStyles.red : lightStyles.off)
                }}
            />
        );
    }
}

