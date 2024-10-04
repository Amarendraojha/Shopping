import React from 'react'
import '../contactus/ContactUs.css'
import path from'../../helper/path'
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';
import QuestionAnswer from'../contactus/QuestionAnswer'

function ContactUs() {
  return (<>
  <div className='contactUs-firstDiv'> 
    <div className='contactUs-firstDiv-content' >
      <h1 className='contactUs-firstDiv-heading'> HELP  CENTER </h1>
      <p className='contactUs-firstDiv-para'>Let us know how we may help you?</p>
      <div className='contactUs-firstDiv-searchdiv' >
         <input className='contactUs-firstDiv-searchInput' type='text' placeholder='search for answers....'/>
         <button className='contactUs-firstDiv-searchButton'> Search</button>
      </div>
    </div>
  </div>

  <div className='contactUs-secondDiv'>
    <div className='contactus-ordertrackingDiv'> 
      <img className='contactus-ordertrackingDiv-Img' src={path.ORDERTRACKING} alt="order-tracking"/>
      <h2 className='contactus-ordertrackingDiv-heading'> Order Tracking</h2>
      <p className='contactus-ordertrackingDiv-para'> Log in to check the status of your order</p>
      <button className='contactus-ordertrackingDiv-button'>Track your order <TbArrowNarrowRight className='contactus-ordertrackingDiv-NextArrow'/></button>
    </div>
    <div className='contactus-ordertrackingDiv'> 
      <img className='contactus-ordertrackingDiv-Img' src={path.RETURNEXCHANGE} alt="Return & Exchange"/>
      <h2 className='contactus-ordertrackingDiv-heading'> Return & Exchange</h2>
      <p className='contactus-ordertrackingDiv-para'> We make easy return and exchange styles.</p>
      <button className='contactus-ordertrackingDiv-button'>Start a return <TbArrowNarrowRight className='contactus-ordertrackingDiv-NextArrow'/></button>
    </div>
  </div>

  <div  className='contactUs-thirdDiv'>
    <h1> Browse our help desk</h1>
    <div className='contactUs-thirdDiv-Helpdesk'>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.SIZEGUARD} alt=" size Guide"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Size Guide</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'> Ensure your customers get the right fit</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.LOYALTYPROGRAM} alt="Loyalty Program"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Loyalty Program</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'> Offer exclusive rewards</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.ORDERSHIPPING} alt="Order & Shipping"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Order & Shipping</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'> Looking for your order status</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.PAYMENTGIFTCARD} alt="Payment & Gift cards"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Payment & Gift cards</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'> Wonder of what payment we accept?</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.DISCOUNTCODE} alt="Discount Codes"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Discount Codes</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'>Have a discount you like to use?</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

       <div className='contactUs-thirdDiv-HelpdeskBlocks' >
          <img className='contactUs-thirdDiv-HelpdeskBlocks-img' src={path.STORELOCATION} alt=" Store Location"/>
          <h1 className='contactUs-thirdDiv-HelpdeskBlocks-heading'>Store Location</h1>
          <p className='contactUs-thirdDiv-HelpdeskBlocks-para'> Want to find a store near you?</p>
          <Link className='contactUs-thirdDiv-HelpdeskBlocks-viewmore' to="https://www.youtube.com/">View More</Link>
       </div>

    </div>
  </div>

  <div className='contactUs-fourthdiv'>
    <h1 className='contactUs-fourthdiv-heading'>Popular Searched Questions</h1>
    <div className='contactUs-fourthdiv-Accordion'>
      <QuestionAnswer/>  
    </div>
  </div>

  <div className='contactUs-fifthdiv'>
     <h1 className='contactUs-fifthdiv-heading'> Any other questions?</h1>
     <p className='contactUs-fifthdiv-para'>We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT. </p>

    <div  className='contactUs-fifthdiv-AnswerSupport'>

     <div className='contactUs-fifthdiv-AnswerSupport-FirstBlock' >
          <img  className='contactUs-fifthdiv-AnswerSupport-FirstBlock-Img' src={path.CALL} alt=" size Guide"/>
          <h1 className='contactUs-fifthdiv-AnswerSupport-FirstBlock-heading'>Call</h1>
          <Link className='contactUs-fifthdiv-AnswerSupport-FirstBlock-navigate' to="https://www.youtube.com/">012-345-6789</Link>
      </div> 

      <div className='contactUs-fifthdiv-AnswerSupport-FirstBlock' >
          <img className='contactUs-fifthdiv-AnswerSupport-FirstBlock-Img' src={path.CHAT} alt="chat"/>
          <h1 className='contactUs-fifthdiv-AnswerSupport-FirstBlock-heading'>Chat</h1>
          <Link className='contactUs-fifthdiv-AnswerSupport-FirstBlock-navigate' to="https://www.youtube.com/">Chat Now</Link>
      </div>

      <div className='contactUs-fifthdiv-AnswerSupport-FirstBlock' >
          <img  className='contactUs-fifthdiv-AnswerSupport-FirstBlock-Img' src={path.EMAIL} alt=" Email"/>
          <h1 className='contactUs-fifthdiv-AnswerSupport-FirstBlock-heading'>Email</h1>
          <Link className='contactUs-fifthdiv-AnswerSupport-FirstBlock-navigate' to="https://www.youtube.com/">Contact Us</Link>
      </div>

      <div className='contactUs-fifthdiv-AnswerSupport-FirstBlock' >
          <img  className='contactUs-fifthdiv-AnswerSupport-FirstBlock-Img' src={path.MESSSAGE} alt="Message"/>
          <h1 className='contactUs-fifthdiv-AnswerSupport-FirstBlock-heading'>Message</h1>
          <Link className='contactUs-fifthdiv-AnswerSupport-FirstBlock-navigate' to="https://www.youtube.com/">Support Now</Link>
      </div>

    </div>
  </div>

  <div className='contactUs-sixthdiv'>

      <div className='contactUs-sixthdiv-firstBlock'>
        <button className='contactUs-sixthdiv-firstBlock-button'><img className='contactUs-sixthdiv-firstBlock-button-img' src={path.VINCE}/> </button>
        <p className='contactUs-sixthdiv-firstBlock-para'> Email:<Link className='contactUs-sixthdiv-firstBlock-paraLink' to='https://www.flaticon.com/'>info@ecomposershop.com</Link></p>
        <p className='contactUs-sixthdiv-firstBlock-para'> Phone:<Link className='contactUs-sixthdiv-firstBlock-paraLink' to='https://www.flaticon.com/'> (212) 555-1234</Link></p>
        <p className='contactUs-sixthdiv-firstBlock-para1'>Sign up for sale, new arrivals & more</p>
        <span className='contactUs-sixthdiv-firstBlock-LoginAddress'>
          <img className='contactUs-sixthdiv-firstBlock-emaiIcon' src={path.Email} alt="email-icon"/>
          <input className='contactUs-sixthdiv-firstBlock-EmailInputbox' type='email' placeholder='Email Address'/>
          <button className="contactUs-sixthdiv-firstBlock-LoginAddress-button" >Sign Up</button>
          </span>
      </div>

      <div className='contactUs-sixthdiv-secondBlock'>
          <h3 className='contactUs-sixthdiv-secondBlock-heading'> About Us</h3>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>About Us</Link></p> 
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Careers</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Blog</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Affiliate</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Contact Us</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Terms of use</Link></p>
      </div>

      <div className='contactUs-sixthdiv-thirdBlock'>
        <h3 className='contactUs-sixthdiv-secondBlock-heading'> Resource</h3>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'> Return policy</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>My Account</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Find a Store</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Legal & Privacy</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Contact</Link></p>
      </div>

      <div className='contactUs-sixthdiv-fourthBlock'>
         <h3 className='contactUs-sixthdiv-secondBlock-heading'> Information</h3>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Our Story</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Visit Our Store</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Contact Us</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Legal & Privacy</Link></p>
         <p><Link className='contactUs-sixthdiv-secondBlock-link'>Account</Link></p>
      </div>

      <div className='contactUs-sixthdiv-fifthBlock'>
        <h3 className='contactUs-sixthdiv-secondBlock-heading'>Help</h3>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>FAQ</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Terms of Use</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Privacy Policy</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Cookie Policy</Link></p>
        <p><Link className='contactUs-sixthdiv-secondBlock-link'>Sitemap</Link></p>
      </div>

  </div>

  <div className='contactUs-seventhdiv'>
     <p>© 2024 EComposer Store. All Rights Reserved. </p>
     <img className='contactUs-seventhdiv-img' src={path.FOOTERCOPYRITE} alt="copyright"/>
  </div>
  </>)
}

export default ContactUs