
import './App.css';
import Landing from './components/Landing'
import Experience from './components/Experience'
import Introduction from './components/Intro'
import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';


function App() {
  return (
    // <HashRouter>
    //   <AnimatedSwitch>
    //     <Route exact path="/" render={()=><Landing/>} />
    //     <Route path="/intro" render={()=><Introduction/>} />
        
    //     <Route path="/experience" render={()=><Experience/>} /> 

    //   </AnimatedSwitch>
      
  
    // </HashRouter>
    <>
      <div id="home">
        <Landing />
      </div>
      <div id="intro">
        <Introduction />
      </div>
      <div id="experience">
        <Experience id="experience"/>
      </div>
      
    </>
    
  );
}

export default App;
