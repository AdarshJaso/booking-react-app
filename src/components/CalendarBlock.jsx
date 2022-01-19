import React, {useState} from 'react'
import Calendar from 'react-calendar';

const CalendarBlock = () => {

    const [value, onChange] = useState(new Date());
    console.log(value);

    return (
        <>
           <div className="col-lg-6 p-3 border-end border-bottom">
                <Calendar
                    onChange={onChange}
                    minDate={new Date()}
                    tileContent={({ date, view }) => view === 'month' && date.getDay() === 2 ? <div style={{fontSize: "10px", color: "#F54D0D"}}>Available</div> : null}
                    tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
                    value={value}
                />
           </div> 
        </>
    )
}

export default CalendarBlock
