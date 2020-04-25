import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import Pokemon from '../../img/Portfolio_トップ.png' 
import './works.css';


const SPA = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={Pokemon} 
        link="http//com"
        language="React"
        skill="github"
        />
        <LayoutRight
        summary="中国赴任者のためのマッチングツール"
        background="中国出張"
        function="ユーザー登録、ログイン/ログアウト、退会、プロフィール編集、各種掲示板"
        struggled="サンプル"
        future="レスポンシブ"
        
        />
        </div>

    </div>
    )
};

export default SPA;