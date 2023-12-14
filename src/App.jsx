import "./App.css";
import ParticlesContainer from "./components/ParticlesContainer";
import AppRouter from "./components/Router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ParticlesContainer />
        <AppRouter></AppRouter>
      </Router>
    </>
  );
}

export default App;
