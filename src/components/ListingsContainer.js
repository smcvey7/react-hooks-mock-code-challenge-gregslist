import React, {useState} from "react";
import ListingCard from "./ListingCard";

// "id": 1,
// "description": "heater",
// "image": "./images/heater.jpg",
// "location": "BROOKLYN"

function ListingsContainer({ narrowedSearch, onHandleDelete }) {

  const listingComponents = narrowedSearch.map((item)=>{
    return <ListingCard handleDelete={onHandleDelete} id={item.id} key={item.id} description={item.description} image={item.image} location = {item.location} />
  })

  return (
    <main>
      <ul className="cards">
        {listingComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
