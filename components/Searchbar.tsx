"use client";

import React, { use, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { SearchButton } from "./Search_Btn";
import { useRouter } from "next/router";

const Searchbar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === "" && model.trim() === "") {
      alert("Please provide input..");
    }

    updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: "string", manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Search Models"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm-hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
