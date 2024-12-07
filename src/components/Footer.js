import React from 'react';
import { faCalendarAlt, faShoppingBag, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                <h4>Schedule</h4>
                <p>Plan your laundry days easily with our scheduling feature.</p>
            </div>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faShoppingBag} className='icon' />
                <h4>Pickup</h4>
                <p>We'll pick up your laundry at your convenience.</p>
            </div>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faTruck} className='icon' />
                <h4>Delivery</h4>
                <p>Get your clean laundry delivered right to your door.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
