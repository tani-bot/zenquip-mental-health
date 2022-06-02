import React from 'react';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

import Footer from './Footer';
import Home from './Home/Home';
import Header from './Header';
import Contact from'./Contact/Contact';
import Team from './Team/Team';
import NavigationBar  from './NavigationBar';

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
                </Routes>
             <NavigationBar />
            </Router>
            <Footer />
            
        </div>
    )
}

export default App;