import React from 'react';

const Footer = () => {
    return (
        <div className='zq-footer-container'>
            <div className='zq-footer'> 
                <div className='zq-footer-msg'>
                    <p>
                        Copyright © 2022 Zenquip
                    </p>
                </div>
                <div className='zq-media'>
                    <a href='https://www.facebook.com/' target='_blank'>
                        <i className='fab fa-facebook icon-color'></i>
                    </a>
                    <a href='https://www.facebook.com/' target='_blank'>
                        <i className='fab fa-twitter icon-color'></i>
                    </a>
                    <a href='https://www.facebook.com/' target='_blank'>
                        <i className='fab fa-instagram icon-color'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;