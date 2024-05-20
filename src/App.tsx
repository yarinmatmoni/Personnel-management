import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, People } from "./pages/index";
import { Header, CreatePerson ,PersonDetails, Approve} from "./components/index";

export const App = () => {
  return (
    <div className="main-layout">
      <Router>
        <Header />
        <div className="page-layout">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/people" element={<People />}>
              <Route path="/people/create" element={<CreatePerson />} />
              <Route path="/people/details/:id" element={<PersonDetails />} />
              <Route path="/people/approve" element={<Approve />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
