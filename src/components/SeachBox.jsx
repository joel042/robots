import React from "react";
import "../assets/SearchBox.css";

const SeachBox = ({searchField , searchChange}) => {
  return (

  <>
  
    <div>
      <input type="Search"  className="pa3 ba searchBox b--none bg-lightest-blue" 
      placeholder="Search robots" 
      onChange={searchChange}
      ></input>
    </div>
   
  </>

   )
};

export default SeachBox;
