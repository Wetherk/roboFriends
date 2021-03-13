import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) =>{
 return(
  <div className='pa2'>
    <input 
    className='search_box'
    type='search' 
    placeholder='search for robots' 
    onChange={searchChange}
    />
  </div>
 )
}


export default SearchBox;