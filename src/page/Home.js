import React from 'react'
import Header from '../Components/Header';
import Slide from '../Components/Slide';

function Home() {
    return (
        <>
            <Header />


            <div id='home' className='container' >

                {/* <h1>HOME</h1> */}
                <Slide/>
               

            </div>
        </>
    )
}

export default Home