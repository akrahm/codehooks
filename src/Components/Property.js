import React, { useState } from "react";

const Property = (props) => {
  const [property, setProperty] = useState([]);
 

  const handleCheckboxChange = event => {
    let newArray = [...property, event.target.value];
    let filterList=[]
    console.log(props.hotels)
   
    if (property.includes(event.target.value)) {
      newArray = newArray.filter(data => data !== event.target.value);
    } 
   setProperty(newArray);
   if (newArray.length!==0) {
     console.log(newArray)
    console.log(filterList)
    filterList = props.hotels.filter((f) => {
      if (newArray.includes(f.property)) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    filterList = props.hotels;
  }
  props.onProperty(filterList);

  };

  return (
    <div className="ui segment" style={{width:"150px"}}>
     
        <div className="field">
          <label>Property Type</label>
          <br/>
          <ul>
                   <li><input type="checkbox"
                    value="Apartment"
                    onChange={(e) => handleCheckboxChange(e)}/>Apartments</li>
                    <li><input type="checkbox" 
                     value="Holiday"
                     onChange={(e) =>  handleCheckboxChange(e)}/>Holiday</li>
                    <li><input type="checkbox"
                    value="Guest"
                    onChange={(e) =>  handleCheckboxChange(e)}/>Guest</li>
                   <li><input type="checkbox"
                    value="Resort"
                    onChange={(e) =>  handleCheckboxChange(e)}/>Resort</li>
               </ul>
        </div>
     
    </div>
  );
};

export default Property;
