import "./App.scss";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import MyHome from "./pages/MyHome/MyHome";

function App() {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSplashScreen(false);
    }, 2000);
  }, []);

  const Main = (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/myhome" component={MyHome} />
      </Switch>
      <Menu />
    </main>
  );

  return renderSplashScreen ? <SplashScreen /> : Main;
}

export default App;
