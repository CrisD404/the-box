import icons from "../Assets/specs/specs.json";
import React, { useState, useEffect } from 'react';

const Icons = (props) => {

    const [svg, setSvg] = useState(null);
    
    useEffect(()=> {
        fetch(icons.icons[props.iconName])
        .then((res) => res.text())
        .then((svg) => {
            setSvg(svg)
        });
    })

  return (<> <div className="fill-blue-500" dangerouslySetInnerHTML={{__html: svg}} ></div></>);
};

export default Icons;
