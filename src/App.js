import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerMenu from './components/hamburgerMenu';
import GlobalStyle from './globalStyles';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MendedMoments from './pages/portfolio/MendedMoments';
import TNTAutoMart from './pages/portfolio/TNTAutoMart';
import MDS from './pages/portfolio/MDS';
import DOS from './pages/portfolio/DOS';
import Utah from './pages/portfolio/Utah';


const Body = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  background: #222;
`;

const App = () => {
  let location = useLocation();
  return ( 

    <Body> 
    <GlobalStyle />
       <HamburgerMenu />
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/mended-moments' component={MendedMoments} />
          <Route path='/tnt-automart' component={TNTAutoMart} />
          <Route path='/medical-device-success' component={MDS} />
          <Route path='/discount-office-source' component={DOS} />
          <Route path='/utah-engagement' component={Utah} />
        </Switch>
    </Body>
  );
}

export default App;
