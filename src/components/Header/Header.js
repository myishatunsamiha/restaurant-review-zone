import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='navbar-container'>
                <nav>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/reviews'>Reviews</CustomLink>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink to='/Blogs'>Blogs</CustomLink>
                    <CustomLink to='/About'>About</CustomLink>
                </nav>
            </div>
            <hr />
        </div>
    );
};

export default Header;