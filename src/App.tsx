import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

import Index from "./pages/Index";
import Create from "./pages/Create";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
