import React from "react";
import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );

  function handleChange(e) {
    // console.log(e);
    setTerm(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }
}
