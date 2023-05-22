import React from "react";

export function ImageShow({image}){
    const {id, alt_description} = image;
    return <div>{id} -- {alt_description} </div>;
}