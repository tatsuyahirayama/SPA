import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import Shenzhennavimg from '../../img/shenzhen-top.png' ;
import './works.css';


const Navi = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={Shenzhennavimg} 
        link="https://shenzhennavi.net/"
        language="PHP"
        skill="MySQL"
        />
        <LayoutRight 
        summary1="中国(深セン)赴任者や出張者のための情報交換サービス"
        summary2="フレームワークは使わず、生のPHPでコーディングしました。"
        background1="深セン地区の日本人同士が交流できる場を提供し、中国で生活する上で役立つ情報をシェアしあったり、オフラインでも交流できる場を提供するため。私自身中国出張の機会が多く、ネット情報の少なさから困った経験が何度もあったため、本サービスを制作しました。"
        function1="・ユーザー登録、ログイン/ログアウト、退会、プロフィール編集、各種掲示板機能。"
        function2="・掲示板内でユーザー情報表示。コメント削除も可能。"
        function3="・各機能でバリデーションチェック実装。"
        struggled1="・データベースへの情報の受け渡し。"
        struggled2="・ユーザー情報と掲示板情報をDBで紐付けし、掲示板内でユーザー情報を表示、管理。"
        struggled3="・ローカル環境からレンタルサーバーへのデプロイする際、MySQLの移行に苦戦。"
        actionItem1="・各ユーザーが個人間でやりとりできるDM機能の実装。"
        actionItem2="・レスポンシブ対応へ。"
        />
        </div>
    </div>
    )
};

export default Navi;