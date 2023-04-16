import { useEffect, useReducer, useState } from 'react';
import './BookingPage.css'
import {fetchAPI,submitAPI} from '../api'
import ConfirmedBooking from './ConfirmedBooking'

function BookingForm ({avaliableTimes, dispatch,submitForm}) {
    const [formData,setformData]=useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm(formData)
      }

    return(
        <form className='reservation_details' onSubmit={handleSubmit}>
            <label htmlFor='firstName' >First Name</label>
            <input type='text' id='firstName' defaultValue={formData.firstName} />

            <label htmlFor='secondName' >Last Name</label>
            <input type='text' id='secondName' defaultValue={formData.lastName} />

            <label htmlFor='contactNumber' >Contact Number</label>
            <input type='tel' id='contactNumber' defaultValue={formData.contactNumber} />

            <label htmlFor="res-date"  data-testid="date">Choose date</label>
            <input type="date" id="res-date" onChange={(e)=> dispatch({type:'Update_Time', payload: e.target.value})}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " >
                {avaliableTimes.map((e) =>{
                        return(<option key={e}>{e}</option>)
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