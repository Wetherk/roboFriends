import React from 'react';

const Scroll = (props) =>{
 return (
  <div style={{ overflowY: 'scroll', border:'4px solid #3a8cf8', height:'460px',borderRadius:'10px'}}>
   {props.children}
  </div>
 );
};


export default Scroll;