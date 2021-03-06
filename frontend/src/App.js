import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Post from "./Post";
import ImageUpload from "./ImageUpload";

function App() {
  return (
    <div className="App">
      <h1>App page</h1>
      <Router>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/upload" component={ImageUpload} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
