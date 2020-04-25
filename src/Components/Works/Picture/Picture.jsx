import React from 'react';
import '../works.css'

const Picture = (props) =>{
    return(
    <div>
        <a href={props.link}><img src={props.picture} style={{width:500,height:300}} /></a>
    </div>
    )
};

export default Picture;