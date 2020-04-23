import React from 'react';
import Picture from '../Picture/Picture'
import Pokemon from '../../../img/Portfolio_トップ.png' 
import '../works.css'

const LayoutLeft = (props) =>{
    return(
    <div>
        <Picture picture={props.picture}/>
        <h3>使用言語</h3>
        <p>{props.laguage}</p>
        <h3>使用技術</h3>
        <p>{props.skill}</p>
        <h3>リンク</h3>
        <p>{props.link}</p>
    </div>
    )
};

export default LayoutLeft;