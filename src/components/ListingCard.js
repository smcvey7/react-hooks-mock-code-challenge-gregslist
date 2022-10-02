import React, { useState } from "react";

function ListingCard({ id, description, image, location, handleDelete }) {
  const [liked, setLiked] = useState(false)

  function onClickStar(){
    setLiked(!liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={onClickStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onClickStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=>handleDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
