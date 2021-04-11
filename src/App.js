import React, { useState } from 'react';
import Header from './Components/Header';
import HotelList from './Components/HotelList';
import Hotels  from './hotel.json';
import Search from './Components/Search';
import Rating from './Components/Rating';
import Property from './Components/Property';
import StRarting from './Components/StRating';
import Price from './Components/Price';



const App =() =>{
  
   const [filterHotel, setFilterHotel] = useState(Hotels);
  

 const  filterByName = (e) =>{
    console.log("filterByName", e);
    setFilterHotel(e);
  }
  const  filterByRating = (e) =>{
    console.log("filterByRating", e);
    setFilterHotel(e);
  };
  const  filterByProperty = (e) =>{
    console.log("filterByProperty", e);
    setFilterHotel(e);
  };
  const  filterByStRating = (e) =>{
    console.log("filterByStRating", e);
    setFilterHotel(e);
  }


  return(
    <div>
      <div className="main-header" >
      <Header/>
      </div>
      <br/>

      <div className="search" style={{marginLeft:"450px"}}>
      <Search
        hotels={Hotels}
        onSearch={(e)=>filterByName(e)}
      />
      </div>
      <br/>
      <div style={{display:"flex"}}>
     <div className="filter-area"  style={{width:"150",}}>
        <div>
        <h2>Set Filters</h2>
        </div>
        <hr/>
        <div style={{marginTop:"2px"}}>
        <Price/>
        </div>
        <Rating
         hotels={Hotels}
          onRating={(e)=>filterByRating(e)}
          />
          <br/>
        <Property
          hotels={Hotels}
          onProperty={(e)=>filterByProperty(e)}
          />
          <br/>
          <StRarting
          hotels={Hotels}
          onStRating={(e)=>filterByStRating(e)}
          />
        </div>
      
       <div style=
        {{marginLeft:"10px",
        }}>
       <HotelList hotelList={filterHotel}/>
      </div>
      </div>
    </div>
  )
}

export default App;