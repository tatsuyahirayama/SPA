import React from 'react';
import MediaCard from '../Card/card';
import './Home.css';
import { Link } from "react-router-dom";
import PortfolioImg from '../../img/portfolio-top.png';
import ShenzhennaviImg from '../../img/shenzhen-top.png'; 
import SampleImg from '../../img/flowers-5059174_640.jpg';


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
                img={PortfolioImg}
                />
                </Link>
                </div>
                <div>
                <Link to="/work-guide" style={{ textDecoration: 'none'}}>
                <MediaCard 
                text="深センNAVI"
                comment="中国(深セン)出張者や駐在者のための情報交換サービスです。PHPを使って制作しました。"
                img={ShenzhennaviImg}
                />
                </Link>
                </div>
                <div>
                <Link to="/work-spa" style={{ textDecoration: 'none'}}>
                <MediaCard 
                text="制作物紹介サイト（当サイト）"
                comment="現在閲覧頂いているサイトです。Reactを用いてSPAサイトにしました。"
                img={SampleImg}
                />
                </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;
