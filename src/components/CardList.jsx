import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const CardArray = robots.map(( user , i ) => {

        return  <Card
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    })

  return ( 
    <div>
     {CardArray} 
    </div>
  );
};

export default CardList;
