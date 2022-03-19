import { Route } from "wouter";
import "./App.css";
import { NavBar } from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
