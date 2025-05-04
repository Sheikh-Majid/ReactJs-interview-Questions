import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const SwitchingComponents = ({page}) => {
   if (page === "home") {
     return <Home />;
   } else if (page === "about") {
     return <About />;
   } else if (page === "contact") {
     return <Contact />;
   } else {
     return <NotFound />;
   }
}

export default SwitchingComponents