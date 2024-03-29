import "./App.scss";
import {
  Header,
  Navbar,
  Welcome,
  Portfolio,
  FourOhFour,
  Contact,
} from "./components/index.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/portfolio/:project" */}
        <Route path="/contact" component={Contact} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
