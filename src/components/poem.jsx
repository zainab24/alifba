import React, { useRef } from "react";
import { useDrag } from "react-dnd";


    
export const Poem = props => {
  
    const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "word",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      {props.poem.map((item, i) => (
        <div key={"block-" + i}>
          {item.lines.map((line, i) => (
            <div key={"line-" + i}>
              {line.split(" ").map((word, i) => (
                 <Word key={"word-" + i} word={word}>;
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
