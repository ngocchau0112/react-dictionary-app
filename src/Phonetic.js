import React from "react";
import Audio from "./Audio";

export default function Phonetics(props) {
  return (
    <div className="phonetic">
      <span className="phonetic-word mb-2">{props.phonetic.text}</span>
      <span className="audio-player">
        <Audio link={props.phonetic.audio} />
      </span>
    </div>
  );
}
