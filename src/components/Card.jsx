import React from "react";

function Card(props) {
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={props.title}>
                {props.image}
            </span>
            <span className="title">{props.title}</span>
          </dt>
          <dd>
            {props.content}
          </dd>
        </div>
    );
}

export default Card;