import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const AddKeyword = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="">
        <input
          type="search"
          placeholder="search for a keyword"
          className=""
          value={search}
        />
        <span>< GoSearch size={30}/></span>
        <h4>Search for a keyword</h4>

        <input type="text" placeholder="Add" className="" />
      </div>
    </div>
  );
};

export default AddKeyword;
{/**    width: 40%;
    height: 60%;
    background-color: antiquewhite;
    padding: 6.5rem;
    margin-left: auto;
    margin-right: auto; */}
