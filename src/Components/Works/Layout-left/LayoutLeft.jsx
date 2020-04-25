import React from 'react';
import Picture from '../Picture/Picture'
import PortfolioImg from '../../../img/Portfolio_トップ.png' 
import '../works.css'

const LayoutLeft = (props) =>{
    return(
    <div style={{width:"45%"}}>
        <Picture picture={props.picture} link={props.link}/>
        <h3>使用言語</h3>
        <p>{props.language}</p>
        <h3>使用技術</h3>
        <p>{props.skill}</p>
        <h3>リンク</h3>
        <p><a href="">{props.link}</a></p>
    </div>
    )
};

export default LayoutLeft;