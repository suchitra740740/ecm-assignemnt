import React from "react";
import './Media.css'
export interface MediaProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

const Media = (props: MediaProps) => {
  return <div className="my-media" key={props.id}>
    <h4>{props.title}</h4>
    <img src={props.image}>
    </img>
    <h6>{props.description}</h6>
  </div>
};

export default Media;