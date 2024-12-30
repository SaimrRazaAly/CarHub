"use client"

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const Searchbar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
};

export default Searchbar;
