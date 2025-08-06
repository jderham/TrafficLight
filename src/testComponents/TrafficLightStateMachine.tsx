// import React, { useState, useEffect, FC, ReactElement } from "react";
// import BaseLightState from "@/testComponents/BaseLightState";
// import RedLightState from "@/testComponents/RedLightState"; 


export default class TrafficLightStateMachine {
    // private currentState : BaseLightState= new RedLightState(undefined);

    // constructor( firstState: BaseLightState ) {
    //     this.currentState = firstState;
    //     this.currentState.onEntry();
    // }

    // changeState(newState: BaseLightState) {
    //     console.log( "\nTLSM:CS ", this.currentState.constructor.name, "->", newState.constructor.name );
    //     this.currentState.onExit();
    //     this.currentState = newState;
    //     this.currentState.onEntry();
    // }

    // ProcessTick() {
    //     console.log("TLSM: Processing tick in state", this.currentState.constructor.name);
    //     // this.currentState.ProcessTick();
    // }
    // TimerExpired() {
    //     console.log("TLSM: Timer expired in state", this.currentState.constructor.name);
    //     this.currentState.TimerExpired();
    // }
    // render() : ReactElement {
    //     console.log("TLSM: Rendering state", this.currentState.constructor.name);
    //     return this.currentState.render();
    // }
}