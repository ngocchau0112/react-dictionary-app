import React from "react";

export default function Synonyms(props) {
  if (props.synomyms) {
    return (
      <div className="synonyms mt-3">
        {props.synomyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonyms-word">
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
