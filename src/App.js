import Footer from "../src/components/footer/Footer";
import Mainabout from '../src/pages/about/Mainabout'
import Home from "./pages/Home/Home";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Allservices from "./pages/services/Allservices";
import Mainhome from "./pages/Home/Mainhome";
import './App.css'
import Maincontact from "./pages/contact/Maincontact";
import Mainsolution from './pages/solutions/Mainsolution'
function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Navbar />
        <Switch>
          
          <Route exact path="/" component={Mainhome} />
          <Route exact path = '/solution' component={Mainsolution}/>
          <Route exact path="/about" component={Mainabout} />
          <Route exact path="/services" component={Allservices} />
          <Route exact path="/contact" component={Maincontact} />
        </Switch>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
