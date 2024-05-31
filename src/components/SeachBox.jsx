import React from "react";

const SeachBox = ({searchField , searchChange}) => {
  return (

  <>
  
    <div>
      <input type="Search"  className="pa3 ba b--green bg-lightest-blue" 
      placeholder="Search robots" 
      onChange={searchChange}
      ></input>
    </div>
   
  </>

   )
};

export default SeachBox;
