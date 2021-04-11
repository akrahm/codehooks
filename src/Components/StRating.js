import React, { useEffect, useRef, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

const StRarting = (props) => {
  const [term, setTerm] = useState("");
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  const onFormSubmit = (event) => {
    event.preventDefault();
    let filterList = [];
    if (term) {
      console.log(filterList)
      filterList = props.hotels.filter((f) => {
        if (f.starrating.toString().toLowerCase().includes(term.toString().toLowerCase()) ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filterList = props.hotels;
    }
    props.onStRating(filterList);
  };
  return (
    <div className="StRarting-field">
      <form onSubmit={onFormSubmit} className="form-field">
        <div className="field">
          <label>Search Rating</label>
         <div style={{marginTop:"7px", display:"flex"}}>
         <input
            ref={textInput}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder=" Hotels.."
          />
          <div>
          <SearchIcon/>
          </div>
         </div>
        </div>
      </form>
    </div>
  );
};

export default StRarting;
