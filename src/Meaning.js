import React from "react";
import Synomyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="h3">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition);
        return (
          <div className="meaning pt-2" key={index}>
            <p>
              <div className="main-meaning">
                <strong>{index}.</strong> {definition.definition}
              </div>
              <br />
              <div className="example">
                <em>{definition.example}</em>
              </div>
              <Synomyms synomyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
