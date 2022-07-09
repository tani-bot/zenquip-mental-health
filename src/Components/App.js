import React from 'react';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Footer from './Footer';
import Home from './Home/Home';
import Header from './Header';
import Contact from'./Contact/Contact';
import Team from './Team/Team';
import NavigationBar  from './NavigationBar';
import Product from './Product/Product';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path = "/" exact element = { <Home />} />
                    <Route path = "/Home" exact element = { <Home />} />
                    <Route path = "/Contact" exact element = { <Contact />} />
                    <Route path = "/Team" exact element = { <Team />} />
                    <Route path = "/Product" exact element = { <Product />} />
                </Routes>
             <NavigationBar />
            </Router>
            <Footer />
            
        </div>
    )
}

export default App;