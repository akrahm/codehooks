import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import  Slider from "@material-ui/core/Slider";

const Price =() =>{
    const [value, setValue] = useState([2,10]);
  
    //Changing state when volume increases/decreases
    const rangeSelector = (event, newValue) =>{
        setValue(newValue);
        console.log(newValue)
    }

    return(
        <div className="price-slider" style={{marginTop:"2px"}}>
            <Typography id="range-slider" gutterBottom>
                Price Range
            </Typography>
            <Slider
            value={value}
            onChange={rangeSelector}
            valueLabelDisplay="auto"/>
           Price Range:{value[0]}k/- and {value[1]}k/-
        </div>
    )
}

export default Price;