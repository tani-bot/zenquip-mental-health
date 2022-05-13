import React from 'react';

import '../../Style/zq-contact.css';
const Contact = () => {
    return (
        <div className='zq-contact'>
            <div className='zq-contact-container'>
                <div className='zq-left-section'>
                    <div className='zq-home-heading large-text contact-text'>
                        Contact
                    </div>
                    <div className='zq-contact-details'>
                        <div className='zq-mobile'>
                            <div className='zq-mobile-icon'>
                                <i className='fas fa-phone'></i>
                            </div>
                            <div className='zq-mobile-details'>
                                <span>
                                    CALL US
                                </span>
                                <span>
                                    9650097870
                                </span>
                            </div>
                        </div>
                        <div className='zq-email'>
                            <div className='zq-email-icon'>
                                <i className='fas fa-envelope'></i>
                            </div>
                            <div className='zq-email-details'>
                                <span>
                                    EMAIL US
                                </span>
                                <span>
                                    mail@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='zq-right-section'>

                </div>
            </div>
        </div>
    )
}

export default Contact;