import React from "react";
import { useState } from "react";

import { connect } from "react-redux";

import { getGifs } from "../actions";

const GifForm = (props) => {
  const [searchterm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getGifs(searchterm);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default connect(null, { getGifs })(GifForm);
