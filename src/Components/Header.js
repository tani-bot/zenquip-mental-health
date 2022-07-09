import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='zq-header-container'>
            <div className='zq-header'>
                <div className='zq-logo'>

                </div>
                <div className='zq-routes'>
                    <Link to='Home'>
                        <span>Home</span>
                    </Link>
                    <Link to='Product'>
                        <span>Product</span>
                    </Link>
                    <Link to='Team'>
                        <span>Team</span>
                    </Link>
                    <Link to='Contact'>
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;