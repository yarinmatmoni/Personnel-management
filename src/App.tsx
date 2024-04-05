import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, People } from "./pages/index";
import { Header } from "./components/index";

export const App = () => {
  return (
    <div className="main-layout">
      <Router>
        <Header />
        <div className="page-layout">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
