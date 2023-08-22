import React, { useState } from "react"
import DatePicker from "react-datepicker"


export default function DateRangePicker({ onDatesChange }) {
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
                onDatesChange={(date) => handleDatesChange({ departureDate: date, arrivalDate })}
                selectsDeparture
                departureDate={departureDate}
                arrivalDate={arrivalDate}
                placeholderText="Select Departure Date"
            />
            <DatePicker
                selected={arrivalDate}
                onDatesChange={(date) => handleDatesChange({ departureDate, arrivalDate: date })}
                selectsArrival
                departureDate={departureDate}
                arrivalDate={arrivalDate}
                placeholderText="Select Arrival Date"
                minDate={departureDate}
            />
        </div>
    )
}