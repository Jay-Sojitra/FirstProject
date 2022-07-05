import { useEffect, useState } from "react";
import "./Timer.css";
import volume from "./volume.png";

const Timer = () => {
    const initialMinute = 1, initialSeconds = 0, initialHours = 0;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const reset = () => {
        if (minutes === 0 && seconds === 0) {
            setMinutes(1);
        }
    }


    return (
        <div className="Main">
            <div className="main">
                <div className="left">
                    <span className="p1">Currently on sale</span>
                    <span className="leftR">
                        <button className="btn">
                        
                        done</button>
                        <span className='p2'>ready</span>
                        <img className="vol" src={volume} alt='volume' />
                    </span>

                </div>

                <div className="Timer">
                    {minutes === 0 && seconds === 0
                        ? reset() :
                        <div className="timer">
                            <div id="hour">{initialHours < 10 ? `0${initialHours}` : initialHours}</div>
                            <span> : </span>
                            <div id="minute">{minutes < 10 ? `0${minutes}` : minutes}</div>
                            <span> : </span>
                            <div id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default Timer;
