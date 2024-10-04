import React from 'react'
import'../collectionFooter/CollectionFooter.css'
import path from'../../helper/path'

function CollectionFooter() {

return ( <>
  <div className='collec-footer-firstdiv'>

     <div className='durable-furniture-div'>
       <p> <img className='durable-furniture-img' src={path.DURABLEICON} alt="Durable Furniture"/></p>
       <h1 className='durable-furniture-name'> Durable Furniture</h1>
       <p className='durable-furniture-content'>Invest in long-lasting furniture built with sturdy </p>
       <p className='durable-furniture-content'>materials</p>
     </div>

     <div className='durable-furniture-div'>
       <p> <img className='durable-furniture-img' src={path.STYLISHDESIGNICON} alt="Stylish Designs"/></p>
       <h1  className='durable-furniture-name'> Stylish Designs</h1>
       <p  className='durable-furniture-content'>Make a statement with our elegant and on-</p>
       <p  className='durable-furniture-content'>trend furniture options</p>
     </div>

     <div className='durable-furniture-div'>
       <p> <img className='durable-furniture-img'  src={path.ECOFRIENDLYICON} alt="Eco-Friendly Choices"/></p>
       <h1  className='durable-furniture-name'> Eco-Friendly Choices</h1>
       <p  className='durable-furniture-content'>Support a healthier planet by choosing</p>
       <p  className='durable-furniture-content'>furniture made with sustainable</p>
     </div>

  </div>

  <div className=' collec-footer-seconddiv'>
     <div className=' collec-footer-seconddiv-firstsec'></div>
     
     <div className=' collec-footer-seconddiv-Secondsec'>
       <div className=' collec-footer-seconddiv-Secondsec-firstdiv'>
          <h1 className=' collec-footer-seconddiv-Secondsec-heading'> Stay Connected</h1>
          <p className='collec-footer-seconddiv-Secondsec-content'>Keep in touch with us by subscribing to our newsletter</p>
          <span className='collec-footer-seconddiv-Secondsec-EmailAddress'>
            <input className='collec-footer-seconddiv-Secondsec-EmailInputbox' type='email' placeholder='Email Address'/>
            <img className='collec-footer-seconddiv-Secondsec-emaiIcon' src={path.Email} alt="email-icon"/>
          </span>
        </div>
     </div>
  </div>
 </>)
}

export default CollectionFooter