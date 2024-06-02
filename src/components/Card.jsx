import "../assets/Card.css";
import React from "react";



const Card = (props) => {
  const { name, username, email, id } = props;

  return (
    <>
      <div className="robotContainer dib bg-light-blue br3 ma2 grow shadow-5 bw2">
        <img alt="" src={`https://www.robohash.org/${id}?200/200`} />
        <div className="user tc">
          <h4>{name}</h4>
          <h5>{username}</h5>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
