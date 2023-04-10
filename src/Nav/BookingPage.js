import { useReducer, useState } from 'react';
import './BookingPage.css'

function BookingForm (props) {
    return(
        <form className='reservation_details'>
            <label for="res-date"  data-testid="date">Choose date</label>
            <input type="date" id="res-date"/>
            <label for="res-time">Choose time</label>
            <select id="res-time " data-testid="time">
                {props.avaliableTimes()?.map((e) =>{
                        return(
                        <option>{e}</option>
                        )
                        })}
            </select>
            <label for="guests" >Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            <label for="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}
export default BookingForm;