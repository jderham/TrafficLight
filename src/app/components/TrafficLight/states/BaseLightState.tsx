import React, { ReactElement } from "react";

export default class BaseLightState {
    changeParentState: (newState: string, oldState: BaseLightState) => void;
    active:boolean = false;
    maxCounter:number = 10;

    ProcessTick() {
        throw new Error("Method not implemented.");
    }

    constructor( f_scs: (newState: string, oldState: BaseLightState) => void, nc:number = this.maxCounter ) {
        this.changeParentState = f_scs;
        this.active = false
        this.maxCounter = nc;
    }

    onEntry() : void{
        // console.log("Entering TrafficLight state", this.constructor.name );
        this.active = true;
    }

    onExit() : void{
        this.active = false;
        // console.log("Exiting TrafficLight state", this.constructor.name, this );
    }

    onTimerExpired( ) {
        this.active && console.log("Timer expired in TrafficLight state", this.constructor.name );
        // return 10;
    }

    onNextState() {
        throw new Error("Method not implemented.");
    }

    onFault() {
        console.log("Fault in TrafficLight state", this.constructor.name );
        this.changeParentState( "RedLightState", this );
    }

    render() : ReactElement {
        // console.log("Rendering state", this.constructor.name, this.active);
        // console.log( this );

        // Here you would typically return a React component or similar to render the light
        // For example:
        // return (
        //     <div
        //         style={{
        //             width: 40,
        //             height: 40,
        //             borderRadius: "50%",
        //             margin: "0 auto",
        //             boxShadow: this.active ? `0 0 20px 5px ${this.constructor.name.toLowerCase()}` : "none",
        //             ...lightStyles[this.constructor.name.toLowerCase() as keyof typeof lightStyles]
        //         }}
        //     />
        // );
                // {/* {lights.map((color:string, idx:number) => { 

                //     let style = lightStyles.off;
                //     if (idx === active) {
                //         style = lightStyles[color as keyof typeof lightStyles];
                //     }

                //     const ls = (active === idx) ? style.background : "off";

                //     return (
                //     <div
                //         key={color}
                //         style={{
                //             width: 40,
                //             height: 40,
                //             borderRadius: "50%",
                //             margin: "0 auto",
                //             boxShadow: active === idx ? `0 0 20px 5px ${color}` : "none",
                //             ...lightStyles[ls as keyof typeof lightStyles]
                //         }}
                //     />
                // )})} */}

        return (
            <div>-----------------------------------bbbbbbbbbbbbbbbbbase state render</div>
        );
    }
}

