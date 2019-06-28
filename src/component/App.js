import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import Gallery from './Gallery';
import Contact from './Contact'
import Blog from './Blog';
import Single_post from './Single_post';
import CallToAction from './CallToAction';
import Error_404 from './Error_404'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Switch>
                            <Route path='/' exact component={ Home } />
                            <Route path='/about' component={ About } />
                            <Route path='/service' component={ Service } />
                            <Route path='/gallery' component={ Gallery } />
                            <Route path='/contact' component={ Contact } />
                            <Route path='/blog' component={ Blog } />
                            <Route path='/single-post' component={ Single_post } />
                            <Route path='/404' component={ Error_404 } />
                        </Switch>
                        <CallToAction />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
