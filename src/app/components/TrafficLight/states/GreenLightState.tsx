// import YellowLightState from "@/testComponents/YellowLightState";
import BaseLightState from "@/app/components/TrafficLight/states/BaseLightState";
import { ReactElement } from "react";

// const lights = ["red", "yellow", "green"];

const lightStyles = {
    // red: { background: "red" },
    // yellow: { background: "yellow" },
    green: { background: "green" },
    off: { background: "#333" }
};

export default class GreenLightState extends BaseLightState {

    constructor( f_scs: (newState: string, oldState: BaseLightState) => void ) {
        super(f_scs, 10);
        // console.log("GreenLightState constructor called");
    }

    // onEntry() {
    //     super.onEntry();
    // }

    // onExit(): void {
    //     super.onExit();
    // }

    ProcessTick() {
        console.log("Green light processing tick...");
    }

    onTimerExpired(): void {
        console.log("Green light timer expired" );
        this.changeParentState( "YellowLightState", this );
    }

    render() : ReactElement {
        return (
            <div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: this.active ? `0 0 20px 5px green` : "none",
                    ... (this.active ? lightStyles.green : lightStyles.off)
                }}
            />
        );
    }
}
