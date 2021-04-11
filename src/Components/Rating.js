import React, { useState } from "react";

const Rating = (props) => {
  const [rating, setRating] = useState([]);
 

  const handleCheckboxChange = event => {
    let newArray = [...rating, event.target.value];
    let filterList=[]
    console.log(props.hotels)
   
    if (rating.includes(event.target.value)) {
      newArray = newArray.filter(data => data !== event.target.value);
    } 
   setRating(newArray);
   if (newArray.length!==0) {
     console.log(newArray)
    console.log(filterList)
    filterList = props.hotels.filter((f) => {
      if (newArray.includes(f.rating)) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    filterList = props.hotels;
  }
  props.onRating(filterList);

  };

  return (
    <div className="ui segment" style={{width:"150px"}}>
     
        <div className="field">
          <label>Star Category</label>
          <br/>
          <ul>
                   <li><input type="checkbox"
                  
                   value="3"
                   onChange={(e) => handleCheckboxChange(e)}/>Three</li>
                    <li><input type="checkbox" 
                 
                    value="4"
                   onChange={(e) =>  handleCheckboxChange(e)}/>Four</li>
                    <li><input type="checkbox"
                    
                    value="5"
                   onChange={(e) =>  handleCheckboxChange(e)}/>Five</li>
               </ul>
        </div>
     
    </div>
  );
};

export default Rating;
