import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from "./Components/SearchPage"

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
// start from 2.39.15