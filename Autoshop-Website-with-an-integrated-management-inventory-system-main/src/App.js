
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Forside/MainPage";
import Home from "./Home";
import Dashboard from "./Dashboard/Dashboard";
import kontakt from "./Kontakt/Kontakt";
import ViTilbyder from "./ViTilbyder/ViTilbyder";
import ProtectedRoute from './ProtectedRoute';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MainPage" component={MainPage} />
        <Route path="/Kontakt" component={kontakt} />
        <Route path="/ViTilbyder" component={ViTilbyder} />
        <ProtectedRoute path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}




//<Footer />//

