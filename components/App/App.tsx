import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRef } from "react";
import "../MainPage/index.scss";
import Home from "../MainPage/Home/Home";
import About from "../MainPage/About/About";
import Projects from "../MainPage/Projects/Projects";
// import NavBar from '../NavBar/NavBar';
import Skills from "../MainPage/Skills/Skills";
import Contacts from "../MainPage/Contacts/Contacts";
import BibPage from "../subpages/BibPage";

function App() {
  const navBarRef = useRef(null);

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/bib-page">
            {/* <NavBar navBarRef={navBarRef} alwaysVisible /> */}
            <BibPage />
          </Route>
          <Route path="/">
            {/* <NavBar navBarRef={navBarRef} /> */}
            <Home navBarRef={navBarRef} />
            <About />
            <Skills />
            <Projects />
            <Contacts />
          </Route>
          {/* <Route path="/memory-game">
						<Home />
					</Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
