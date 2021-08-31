import React from 'react';
import { useState, useEffect } from "react";
import * as axios from "axios";

import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Draggable from "../components/draggable.jsx";
import Droppable from "../components/droppable.jsx";

const URL = "https://poetrydb.org/random,author/1;Dickinson";

function Random() {
  const poem = useState([]);

  const getPoem = () => {
    axios
      .get(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(({ data }) => {
        this.setState({
          poem: data
        });
      })
      .catch(err => {});
  };

  useEffect(() => {
    this.getPoem();
  }, []);

  const handleClick = e => {
    e.preventDefault();
    this.getPoem();
  };

  return (
    <>
      <button type="button" onClick={e => this.handleClick(e)}>
        next
      </button>

      <DndProvider backend={HTML5Backend}>
        <Draggable />
        <Droppable />
      </DndProvider>
    </>
  );
}

export default Random;
