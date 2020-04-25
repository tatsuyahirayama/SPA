import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import PortfolioImg from '../../img/Portfolio_トップ.png' 
import './works.css';


const Portfolio = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={PortfolioImg} 
        link="https://portfolio-ce4ea.web.app/"
        language="HTML, CSS, JavaScript"
        skill="Sass, Firebase Hosting"
        />
        <LayoutRight
        summary="ポートフォリオサイト"
        background="ポートフォリオサイトとして、自身の経歴、スキルや制作物を紹介するため。"
        function1="・レスポンシブデザインを意識したレイアウト設計。"
        function2="・カルーセルスライダーやアコーディオンメニューなどを用いたUI/UXの向上。"
        function3="・CSSはSassを使用して、なるべくシンプルに。"
        struggled1="・レスポンシブ設計の経験が浅く、何度もデベロッパーツールでスマホレイアウトを確認しながらコーディングを進めた。
                      "
        struggled2="・ハンバーガーメニューやアコーディオンメニューの実装にあたり、色々な記事を読み漁り実装に至った。
                      "
        struggled3="・animate.cssやSwiper.jsなど初めて使用するツールにトライしたため、実装に苦戦した。"
        actionItem1="プロフィールページやお問い合わせフォームの実装などコンテンツを充実させると共に、レイアウトにも更にこだわっていきたい。"
        />
        </div>

    </div>
    )
};

export default Portfolio;