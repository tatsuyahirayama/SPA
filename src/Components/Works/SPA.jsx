import React from 'react';
import LayoutLeft from './Layout-left/LayoutLeft';
import LayoutRight from './Layout-right/LayoutRight';
import SpaImg from '../../img/spa-top.png' ;
import './works.css';


const SPA = (props) =>{
    return(
    <div className='container-introduction'>
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        <div className='grid-list'>
        <LayoutLeft 
        picture={SpaImg} 
        link="https://tatsuyahirayama.github.io/tatsuya-works/"
        language="React"
        skill="React Router, Material-UI, GitHub Pages"
        />
        <LayoutRight
        summary1="各制作物の紹介サイト（当サイトです。）"
        summary2="Reactを使用したSPAサイトとなっています。"
        background1="・各制作サイトについて、制作背景や各種機能等をご紹介するため。"
        background2="・勉強中のReactのアウトプットとして、SPAサイトにしました。"
        function1="・React Routerを使ってSPA化。"
        function2="・Material-UIを使用して、HeaderやCardコンポーネントを実装。"
        struggled1="・Reactを独学で学習しながら手探りで制作したため、コンポーネントの理解から苦戦。"
        struggled2="・SPAにするためReact Routerを導入しましたが、上手くルーティングされずこちらも苦戦。"
        actionItem1="・Atomic Designを学習し、コンポーネント粒度を最適化。"       
        actionItem2="・今後はRedux等の学習も進め、Reactを使ったWebサービスの制作を進めたいです。"       
        />
        </div>

    </div>
    )
};

export default SPA;