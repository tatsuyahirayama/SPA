import React from 'react';
import '../works.css'

const Picture = (props) =>{
    return(
    <div>
        <img src={props.picture} style={{width:500,height:300}} />
    </div>
    )
};

export default Picture;