import React from 'react';
import StarIcon from '@material-ui/icons/Star';


const HotelBrief =(props) => {
    
    return (
       <div className="hotels">
           <div>
               <h3 style={{display:"flex"}}>{props.rating}<div style={{marginTop:"1px"}}><StarIcon/></div></h3>
               <h4>{props.name}</h4>
               <h5>{props.price}</h5>
               <img src= {props.image} alt="" width="220"/>
               <h4>{props.property}</h4>
               <p>{props.description}</p>
               <hr/>
               <p>{props.starrating}</p>
               </div>
       </div>
    );
}


export default HotelBrief;