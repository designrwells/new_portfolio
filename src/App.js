import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Body = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  background: #222;
`;

function App()  {
  let location = useLocation();
  return ( 

    <Body> 

    <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </Body>
  );
}

export default App;
