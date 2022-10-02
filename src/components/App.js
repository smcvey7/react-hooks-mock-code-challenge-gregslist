import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [query, setQuery] = useState("")

  const narrowedSearch = listings.filter(item=>{
    if (query === "") return true
    else return item.description.toLowerCase().includes(query.toLowerCase())
  })

  useEffect(()=>{
    fetch("http://localhost:6001/listings", {
      method: "GET",
      headers: {
        "Content-Type" : "Application/json",
      },
    })
    .then(res=>res.json())
    .then(data=>setListings(data))
  } , [])

  function rememberSearchTerm(receivedQuery){
    setQuery(receivedQuery)
  }

  function deleteItem(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

    const filteredList = narrowedSearch.filter((item)=>item.id !== id)
    setListings(filteredList)
  }

  return (
    <div className="app">
      <Header sendSearchTerm={rememberSearchTerm} />
      <ListingsContainer narrowedSearch={narrowedSearch} onHandleDelete={deleteItem}/>
    </div>
  );
}

export default App;
