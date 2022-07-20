import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div
        className='header--search'>
            <input
                className='header--searchBar'
                type='text'
            />
            <SearchIcon className='header-searchIcon'/>
        </div>

        <div className='hedaer--nav'>
            <div className='header--comp'>
                <span className='header--compOne'>
                Hello guest
                </span>
                <span className='header--compTwo'>
                Sign in
                </span>
            </div>
            <div className='header--comp'>
                <span className='header--compOne'>
                Returns
                </span>
                <span className='header--compTwo'>
                & Orders
                </span>
            </div>
            <div className='header--comp'>
                <span className='header--compOne'>
                Your
                </span>
                <span className='header--compTwo'>
                Prime
                </span>
            </div> 
        </div>

        <div className='header--basket'>
            <ShoppingBasketIcon />
            <span className='header--compTwo header--basketCount'>0</span>
        </div>

    </div>
  )}

export default Header