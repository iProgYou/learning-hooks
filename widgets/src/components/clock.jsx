import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date())
    // let intervalId = null;
    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    })

    function getDate() {
        return time.toDateString()
    }

    function getTime() {
        return time.getTime()
    }
    return(
        <div>
            <h1>Clock</h1>
            <h3>{getDate()}</h3>
            <h3>{getTime()}</h3>
        </div>
    )
};
