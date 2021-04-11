import React, { useEffect, useRef, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {
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
        if (f.name.toString().toLowerCase().includes(term.toString().toLowerCase()) ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filterList = props.hotels;
    }
    props.onSearch(filterList);
  };
  return (
    <div className="search-field">
      <form onSubmit={onFormSubmit} className="form-field">
        <div className="field" style={{display:"flex"}}>
          <input
            ref={textInput}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search Hotels.."
          />
          <div>
          <SearchIcon/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
