import { HashRouter, Route, Routes, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Counter } from "./components/Counter";

import { styles } from "./style/routeStyles";

const RouteConfig = () => {
  return (
    <HashRouter>
      <div style={styles.container}>
        <Link to="/" style={styles.title}>
          Home
        </Link>
        <Link to="/about" style={styles.title}>
          About
        </Link>
        <Link to="/counter" style={styles.title}>
          Counter
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteConfig;
