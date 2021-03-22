import React, { useState } from 'react'
import "./Search.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'

function Search() {

    const history = useHistory()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    // func to control the range of the date
    function handleSelect(ranges) {
        setStartDate(ranges.selection.StartDate)
        setEndDate(ranges.selection.EndDate)
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input
                min={0}
                defaultValue={2}
                type="number"
            />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search