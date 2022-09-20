
import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
const Timer = (props) =>{
    const sleep = (ms) =>   (
        new Promise(resolve => setTimeout(resolve, ms))
    )
    
    console.log(props.initialTime);
    console.log((((props.minutes*60)+props.seconds)/props.initialTime)*100)
    
    return (
        
        <div className='timer-body' >
            <Progress className='progress-bar' percent ={(((props.minutes*60)+props.seconds)/props.initialTime)*100}type = 'circle'  width = '290px' showInfo = {false}>
            
            </Progress> 
        
            <div className='timer-text-container'>
                <div className= {props.color}>
                    {props.minutes < 10 ? "0" + props.minutes : props.minutes} : {props.seconds < 10? "0" + props.seconds :props.seconds}
                </div>
                
            </div>
            
        </div>
        
        
    )
}
export default Timer;