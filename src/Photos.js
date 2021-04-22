import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="container photos shadow">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col photo" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={index}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
