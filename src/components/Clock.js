import React, {Component, useEffect, useState} from 'react'

import "../Clock.css"

const Clock = ({date}) => {

    const initClockDate = {
        seconds: date.getSeconds(),
	    minutes: date.getMinutes(),
        hours: date.getHours()
    }

    const [clockDate,setClockDate] = useState(initClockDate)
    const [timerId,setTimerId] = useState()
    

	const tick = () => {
        // console.log('tick')
        date = new Date()
        setClockDate({
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours()
        })
        console.log(clockDate)
	}

    useEffect(() => {
        setTimerId(setInterval(() => tick(), 1000))
        return(function cleanup() {
            setTimerId(clearInterval(timerId))
        })
    },[clockDate])
    
	return (
		<div className="container">
            <p>Time: {clockDate.hours}:{clockDate.minutes}:{clockDate.seconds}</p>
			<div className="clock-face">
				<div className="clock">
					<div className="hours-container">
						<div
							className="hours"
							style={{ transform: `rotateZ(${clockDate.hours * 30 + clockDate.minutes / 2}deg)` }}
						></div>
					</div>
					<div className="minutes-container">
						<div className="minutes" style={{ transform: `rotateZ(${clockDate.minutes * 6}deg)` }}></div>
					</div>
					<div className="seconds-container">
						<div className="seconds" style={{ transform: `rotateZ(${clockDate["seconds"] * 6}deg)` }}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Clock