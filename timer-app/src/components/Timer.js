
import React from 'react';
import { useState } from 'react';
const Timer = (props) =>{
    const sleep = (ms) =>   (
        new Promise(resolve => setTimeout(resolve, ms))
    )
    
    
    
    return (
        <div className='timer-body'>
            <div className='timer-text-container'>
                <div className= {props.color}>
                    {props.minutes < 10 ? "0" + props.minutes : props.minutes} : {props.seconds < 10? "0" + props.seconds :props.seconds}
                </div>
            </div>
        </div>
        
    )
}
export default Timer;