import "./App.css";
import AppRouter from "./components/Router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AppRouter></AppRouter>
      </Router>
    </>
  );
}

export default App;
