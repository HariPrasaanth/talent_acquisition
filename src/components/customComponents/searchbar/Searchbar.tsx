import React from 'react'
import SearchIcon from './../../../assets/other_icons/search_icon.png';
import './searchbar.scss';

const Searchbar = () => {
  return (
    <>
        <div className='searchContainer'>
        <input type='text' placeholder='Search'/>
        <div className='searchIconContainer'>
          <img src={SearchIcon} alt='searchIcon' />
        </div>
        {/* <SearchOutlined /> */}
      </div>
    </>
  )
}

export default Searchbar