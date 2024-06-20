import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<div>Employees</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
