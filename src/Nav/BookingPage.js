import './BookingPage.css'
import BookingForm from './BookingForm';
import { useEffect, useReducer, useState } from 'react';
import {fetchAPI,submitAPI} from '../api'
import { useNavigate } from "react-router-dom";

function BookingPage () {
    const date = new Date();
    function initializeTimes (){
        return (fetchAPI(date));
    }

    function updateTimes (state, action){
        let newState;
        switch (action.type){
            case 'Update_Time':
                const newDate = new Date(action.payload);
                return fetchAPI(newDate)
                break;
            default:
                throw new Error()
        }
        return newState;
    }
    const [state, dispatch] = useReducer(updateTimes, initializeTimes())

    const navigate = useNavigate();

    function submitForm(formData) {
      const isSubmitted = submitAPI(formData);
  
      if (isSubmitted) {
        navigate("/confirmed");
      }
    }

    return(
        <BookingForm avaliableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
    );
}
export default BookingPage;