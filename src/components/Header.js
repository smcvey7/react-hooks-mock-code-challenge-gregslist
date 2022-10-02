import React from "react";
import Search from "./Search";

function Header({sendSearchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search performSearch={sendSearchTerm} />
    </header>
  );
}

export default Header;
