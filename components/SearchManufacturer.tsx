"use client";

import { SearchManufactureProps } from "@/types/types";
import { Combobox, Transition } from "@headlessui/react";
import React, { useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setmanufacturer,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");

  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer ml-10">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute  top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input px-10"
            placeholder="Search for a car"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transtion ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterManufacturer.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option p-2 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
