import React from "react";
import Home from "./Components/Home/Home";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
function App() {
  //type Routes = { path: string; name: string; Component: Element }[];
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: Technologies },
    { path: "/projects", name: "Projects", Component: Projects },
  ];
  const onEnter = (node: Element) => {
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        rotateY: -90,
        delay: 1.1,
        ease: "power3.InOut",
      }
    );
  };
  const onExit = (node: Element) => {
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.3,
      {
        rotateY: 90,
        ease: "power3.InOut",
      }
    );
  };
  return (
    <div className="App">
      <Nav />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                onExit={onExit}
                onEntering={onEnter}
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
      <Contact />
    </div>
  );
}

export default App;
