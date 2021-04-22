import React from "react";
import useSound from "use-sound";

export default function Audio(props) {
  console.log(props);
  const [play] = useSound(props.link);

  return (
    <button onClick={play} className="audio d-flex justify-content-center">
      <i class="fas fa-volume-up"></i>
    </button>
  );
}
