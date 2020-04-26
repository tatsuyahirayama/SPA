import React from 'react';
import '../works.css';

const LayoutRight = (props) =>{
    return(
    <div style={{width:"45%"}}>
        <h3>概要</h3>
        <p>{props.summary1}</p>
        <p>{props.summary2}</p>
        <h3>用途・目的</h3>
        <p>{props.background1}</p>
        <p>{props.background2}</p>
        <h3>実装機能/こだわり</h3> 
        <p>{props.function1}</p>
        <p>{props.function2}</p>
        <p>{props.function3}</p>
        <h3>苦労した点</h3>
        <p>{props.struggled1}</p>
        <p>{props.struggled2}</p>
        <p>{props.struggled3}</p>
        <h3>今後の課題</h3>
        <p>{props.actionItem1}</p>
        <p>{props.actionItem2}</p>
    </div>
    )
};

export default LayoutRight;