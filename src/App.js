import "./App.css";
import Facility from "./componets/Facility";
import Facts from "./componets/Facts";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Review from "./componets/Review";
import Team from "./componets/Team";
import Contact from "../src/pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Appoiment from "./pages/Appoiment";
import Ourteam from "./pages/Ourteam";
import Error from "./pages/Error";
import React, {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/appoiment">
            <Appoiment />
          </Route>
          <Route path="/team">
            <Ourteam />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Facts />
            <Facility />
            <Team />
            <Review />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
