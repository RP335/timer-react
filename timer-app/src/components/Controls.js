import React, { useState } from 'react';
const Controls = (props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({minutes: minutes, seconds: seconds});
    }
    const handleChangeMinutes = e =>{
        setMinutes(e.target.value);
        
    }
    const handleChangeSeconds = e => {
        setSeconds(e.target.value);
    }
    const handleReset = () =>{
        props.onReset();
    }
    const handlePausePlay = () =>
    {
        props.onPause(!props.paused);
    }
    return (
        <div className='controls'>
            <form className='controls-form'>
                <input type = 'text' placeholder='Enter Minutes' onChange = {handleChangeMinutes} value={minutes} name = 'text' className='minutes-input'>

                </input>
                <input type  = 'text' placeholder='Enter Seconds' onChange={handleChangeSeconds} value = {seconds} name = 'text' className='seconds-input'>

                </input> 
                         
            </form>
            <button className='set-time-button' onClick ={handleSubmit}>Start Counting</button> 
            <button className= 'reset-button' onClick = {handleReset}>Reset</button>     
            <button className= 'pause-button' onClick = {handlePausePlay}>{props.isReset? 'Pause': props.paused? 'Resume' : 'Pause'}</button>     
        </div>
    )
}
export default Controls;