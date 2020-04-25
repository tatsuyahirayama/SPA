import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import ShenzhennaviImg from '../../img/深センNAVI_トップ.png' 
import './works.css';


const Navi = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={ShenzhennaviImg} 
        link="http//com"
        language="PHP"
        skill="github"
        />
        <LayoutRight 
        summary="中国赴任者のためのマッチングツール"
        background="サンプル"
        function1="ユーザー登録、ログイン/ログアウト、退会、プロフィール編集、各種掲示板"
        struggled="サンプル"
        future="レスポンシブ"
        />
        </div>
    </div>
    )
};

export default Navi;