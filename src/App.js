import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import HamburgerMenu from './components/hamburgerMenu';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Body = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  background: #222;
`;

function App()  {
  let location = useLocation();
  return ( 

    <Body> 
    <GlobalStyle />
      
       <HamburgerMenu />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
     
    </Body>
  );
}

export default App;
