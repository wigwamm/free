import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

function Count(props) {
    const [next, setNext] = useState()

    useEffect(() => {
        let current = new Date();
        current.setMonth(current.getMonth() + 1)
        current.setDate(1)
        current.setHours(2)
        current.setMinutes(0)
        current.setMilliseconds(0)
        current.setSeconds(0)
        setNext(current.valueOf())
    }, [])

    return (
        <div>
            {next ? <Countdown
                date={next}
                renderer={props => <div>
                    <div className='column'>
                        <div className='date-section'>
                            <div className='date'>{props.days}</div>
                            <div className='unit'>days</div>
                        </div>

                        <div className='date-section'>
                            <div className='date'>{props.hours}</div>
                            <div className='unit'>hours</div>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='date-section'>
                            <div className='date'>{props.minutes}</div>
                            <div className='unit'>minutes</div>
                        </div>

                        <div className='date-section'>
                            <div className='date'>{props.seconds}</div>
                            <div className='unit'>seconds</div>
                        </div>
                    </div>
                </div>}
            /> : null}
        </div>
    );
}

export default Count;