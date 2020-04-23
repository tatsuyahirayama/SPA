import React from 'react';
import '../works.css';

const LayoutRight = (props) =>{
    return(
    <div>
        <h3>概要</h3>
        <p>{props.summary}</p>
        <h3>背景</h3>
        <p>{props.background}</p>
        <h3>実装機能/こだわり</h3>
        <p>{props.function}</p>
        <h3>苦労した点</h3>
        <p>{props.struggled}</p>
        <h3>課題</h3>
        <p>{props.future}</p>
    </div>
    )
};

export default LayoutRight;