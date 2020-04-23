import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Guide from './Components/Works/ShenzhenNAVI';
import SPA from './Components/Works/SPA';
import Portfolio from './Components/Works/Portfolio';


ReactDOM.render(
    <BrowserRouter>
    <Header />
    <Route path="/" exact component = {Home}/>
    <Route path="/work-guide/" render={()=> <Guide title="深センNAVI" />}/>
    <Route path="/work-spa/" render={()=> <SPA title="成果物紹介サイト(SPA)" />}/>
    <Route path="/work-portfolio/" render={()=> <Portfolio title="Portfolio" />}/>

    </BrowserRouter>,
  document.getElementById('root')
);