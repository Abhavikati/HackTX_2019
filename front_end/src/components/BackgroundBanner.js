import React from "react";


const Banner = ({src}) => {
    return (
        <div className = "Banner">
            <img alt="banner" src={src}>
            <div className="Banner-image-mask" />>
            </img>
        </div>
    );
};

export default Banner;