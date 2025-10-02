import React, { useState } from "react";
import State from "../../utils/State.json";

export const AutoSearch = () => {
  const [state, setState] = React.useState(State);
  const [search, setSearch] = React.useState('');
  const [fState, setFState] = React.useState('');
  const [filteredState, setFilteredState] = React.useState([]);

  const filterStateList = (search: any) => {
    return state
      .filter((item: any) =>
        item.StateName.toLowerCase().includes(search.toLowerCase())
      )
      .map((item: any) => item.StateName);
  };
  const filterList = (s: any) => {
    const sList = filterStateList(s);
    setFState(sList.join(", "));
  };
  console.log("Search Value: ", search);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => filterList(search)}>Search</button>
      <br />
      {fState}
    </div>
  );
};
