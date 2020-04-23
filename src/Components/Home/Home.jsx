import React from 'react';
import MediaCard from '../Card/card'
import './Home.css'
import { Link } from "react-router-dom";
import ShenzhenNAVI from '../../img/深センNAVI_トップ.png' 
import Portfolio from '../../img/Portfolio_トップ.png' 


const Home = () =>{
    return(
        <div>
            <div class="section-title">
                <h1>WORKS</h1>
                <p>各ページにて制作物の概要や制作過程などをご紹介しています。
                </p>
            </div>
            <div className='container'>
                <div>
                <Link to="/work-portfolio" style={{ textDecoration: 'none'}}>
                <MediaCard 
                text="Portfolio"
                comment="ポートフォリオサイトです。レスポンシブ対応サイトになっています。"
                img={Portfolio}
                />
                </Link>
                </div>
                <div>
                <Link to="/work-guide" style={{ textDecoration: 'none'}}>
                <MediaCard 
                text="深センNAVI"
                comment="中国(深セン)出張者や駐在者のための情報交換サービスです。PHPを使って制作しました。"
                img={ShenzhenNAVI}
                />
                </Link>
                </div>
                <div>
                <Link to="/work-spa" style={{ textDecoration: 'none'}}>
                <MediaCard 
                text="制作物紹介サイト（当サイト）"
                comment="現在閲覧頂いているサイトです。Reactを用いてSPAサイトにしました。"
                img={Portfolio}
                />
                </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;
