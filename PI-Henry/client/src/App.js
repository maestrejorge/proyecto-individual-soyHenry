import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from '../src/components/Welcome/Welcome.jsx';
import Home from './components/Home/Home.jsx'
import CreaRecipe from './components/CreaRecipe/CreaRecipe';
import Error404 from '../src/components/Error404/Error404.jsx'
import Recipedetail from '../src/components/Recipedetail/Recipedetail.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} /> 
        <Route path="/detalle/:id"component= {Recipedetail}/>
        <Route path="/createrecipe" component={CreaRecipe}/> 
        <Route path="*" component={Error404}/>

       
      </Switch>
    </Router>
  
  );
}

export default App;
