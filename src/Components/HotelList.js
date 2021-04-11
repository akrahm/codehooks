 import React from 'react';
import Cards from './Cards';
import HotelBrief from './HotelBrief';


const HotelList =({hotelList}) => {
    return (
        <div className="Hotels" style={{display:"flex"}}>
           { hotelList.map((hotel, index) => (
            <div style={{marginLeft:"5px"}}>
            <Cards className="card-contents">
        <HotelBrief
      rating={hotel.rating}
      name={hotel.name}
      price={hotel.price}
      image={hotel.image}
      property={hotel.property}
      description= {hotel.description}
      category={hotel.category}
      starrating={hotel.starrating}
     
    />
        </Cards>
            </div>
          ))}

        </div>
    
       
    );
}

export default HotelList;
