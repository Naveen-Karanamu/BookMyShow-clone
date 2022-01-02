import React from "react";

export const NextArrow = (props) => {
    return (
        <>
            <div {...props} 
            className={props.className}
            style={{...props.style, background:"default"}}
            onClick={props.onClick}
            />
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
            <div {...props} />

        </>
    )
}
