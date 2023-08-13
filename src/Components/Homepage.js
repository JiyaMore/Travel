import React from 'react'
import Navbar from '../Blocks/Navbar'
import '../Styles/Homepage.css'

const Homepage = () => {
  return (
    <>
      <Navbar/>
     <section className='header-section'>


     <div className='sec-main'>
      <div className='container'>
       <div class="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
          <div class="col">
          <h1 className='sec-heading'>Travel With Us <br></br>Now!</h1>
          <p className='sec-paragraph'>Dummy Paragraph Is here</p>
          <button className='sec-btn'>Search Now!</button>
          </div>


          <div class="col">
          
          </div>
      
        </div>
       </div>
     </div>


     </section>





{/* <div class="container">
  <div class="row row-cols-2 row-cols-sm-1 row-cols-md-4">
    <div class="col" id='block-css'>Column</div>
    <div class="col" id='block-css'>Column</div>
    <div class="col" id='block-css'>Column</div>
    <div class="col" id='block-css'>Column</div>
    <div class="col" id='block-css'>Column</div>
    <div class="col" id='block-css'>Column</div>
  </div>
</div> */}


    </>
  )
}

export default Homepage
