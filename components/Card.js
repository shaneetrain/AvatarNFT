import React from "react";

const Card = (props) => {
    const { img, name, desc } = props;

    return (
        <div class="card bordered w-96 h-120 mx-4 my-4 bg-primary">
            <figure>
                <img src={img} />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">{name}</h2>
                {/* <p>{desc}</p> */}
            </div>
        </div>
    );
};

export default Card;
