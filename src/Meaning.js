import React from "react";
import Synomyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition);
        return (
          <div className="meaning pt-2" key={index}>
            <p>
              <strong>{index}.</strong> {definition.definition}
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
