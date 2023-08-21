import React, { useState } from "react"
import DatePicker from "react-datepicker"


export default function DateRangePicker({ onChange }) {
    const [departureDate, setDepartureDate] = useState(null)
    const [arrivalDate, setArrivalDate] = useState(null)
    
    const handleDatesChange = ({ departureDate, arrivalDate }) => {
        setDepartureDate(departureDate)
        setArrivalDate(arrivalDate)
    }

    return (
        <div className="date-picker-container">
            <DatePicker
                selected={departureDate}
                onChange={(date) => handleDatesChange({ departureDate: date, arrivalDate })}
                selectsDeparture
                departureDate={departureDate}
                arrivalDate={arrivalDate}
                placeholderText="Select Departure Date"
            />
            <DatePicker
                selected={arrivalDate}
                onChange={(date) => handleDatesChange({ departureDate, arrivalDate: date })}
                selectsArrival
                departureDate={departureDate}
                arrivalDate={arrivalDate}
                placeholderText="Select Arrival Date"
                minDate={departureDate}
            />
        </div>
    )
}