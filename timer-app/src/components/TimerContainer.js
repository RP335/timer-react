import React from 'react';
import Timer from './Timer';
import Controls from './Controls';
import { useState, useEffect } from 'react';
const TimerContainer = () =>{
    
    const [started, setStarted] = useState(false);
    const [paused, setPaused] = useState(false);
    const [isReset, setIsReset] = useState(true);
    const [initialTime, setInitialTime] = useState(0);

    var timer;
    const startClock =(time) =>{
        console.log(time.minutes);
        setInitialTime(Number(time.minutes)*60+Number(time.seconds));
        setMinutes(time.minutes);
        if (time.seconds > 60)
        {
            const add = Math.floor(time.seconds/60);
            const rem = time.seconds % 60;
            console.log(rem);
            setMinutes(Number(time.minutes)+Number(add));
            setSeconds(rem);
            console.log(seconds);
        }
        else {
            setSeconds(time.seconds);
            
            console.log('started');
        }
        setIsReset(false);
        setStarted(true);
        console.log(started);
    

    }
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] =  useState(0);
    useEffect(()=> {
        
        
            if (started && (minutes*60+seconds)>0 )
                timer = setInterval(()=> {
                    updateTime();
                }, 1000);
            else {
                setColor('timer-normal');
                clearInterval(timer);
            }
        
        
        return ()=> clearInterval(timer);
    });
    const [color, setColor] = useState('timer-normal');
    
    
    const colors = [ 'timer-yellow', 'timer-orange', 'timer-red']
    const updateTime =()=>{
        if (minutes === 0){
            if (seconds <= 30 && seconds >= 21)
                setColor(colors[0]);
            else if (seconds <= 20 && seconds >= 11)
                setColor(colors[1]);
            else if (seconds <= 10 && seconds >=1)
                setColor(colors[2]);
            else
                setColor('timer-normal');
        }
        
        if (seconds <= 0)
        {
            console.log('gone')
            setSeconds(59);
            setMinutes(minutes-1);
        } 
        else
            setSeconds(seconds-1);
        
    }
    
    const resetClock =() => {
        setSeconds(0);
        setMinutes(0);
        setStarted(false);
        setIsReset(true);
    }
    const pauseOrPlayClock =(pause) =>{
        if (isReset === true ){
            
            return;
        }
        if (pause === true && isReset === false)
        {
            setPaused(true);
            setStarted(!started);
        }
        if (pause === false && isReset === false)
        {
            setPaused(false);
            setStarted(!started);
        }

        
        
    }
    
    return(
        <div className='timer-container'>
            <Timer minutes = {minutes} seconds = {seconds} color = {color} initialTime={initialTime}  >

            </Timer>
            <Controls onSubmit = {startClock} onReset = {resetClock} onPause ={pauseOrPlayClock} paused ={paused} isReset={isReset}>

            </Controls>
        </div>
    )
}
export default TimerContainer;