import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<div className="mx-auto max-w-7xl px-6">Home</div>}
          />
          <Route path="/employees" element={<div>Employees</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
