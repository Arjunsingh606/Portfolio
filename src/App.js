import './App.css';
import { Route,Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import About from './Pages/About';
import Education from './Pages/Education';

function App() {
  
  return (
    
     <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      
     </div>
  
  );
}

export default App;
