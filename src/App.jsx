import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./Container/Login";
import Owner from "./Container/owner";
import User from "./Container/User";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/owner/lastactivity" component={Owner} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
