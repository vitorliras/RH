import React from 'react'
import Header from '../Components/Header';
import {  useParams } from 'react-router-dom';


function Calendar() {
  const { userName } = useParams();
  
  return (
    <>
      <Header userName={ !userName ? userName : ""}  />

      <div className='container'>

        <h1>
        Calendar
        </h1>
      </div>
    </>
  )
}

export default Calendar