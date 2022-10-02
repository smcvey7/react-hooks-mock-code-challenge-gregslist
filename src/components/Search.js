import React, {useState} from "react";

function Search({ performSearch }) {
  const [searchTerm, setSearchTerm] = useState("")


  return (
    <form className="searchbar" onSubmit={(e)=>{e.preventDefault(); performSearch(searchTerm)}}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
