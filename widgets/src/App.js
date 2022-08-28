import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why us React?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown
      </button>
      {showDropDown ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
