import React from 'react';
import './Card.css';

const Card = ({name,email,id}) =>{
return(
  <div className='card-styling dib bg-light-green br3 pa3 ma2 grow shadow-5 bw2 tc'>
    <img 
    src={`https://robohash.org/KEKW${id}?size=200x200`} 
    alt='robot' />
    <div>
      <h2 className="text_style">{name}</h2>
    <p className="text_style">{email}</p>
    </div>
  </div>
);
}

export default Card;