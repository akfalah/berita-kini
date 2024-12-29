import { Routes, Route } from "react-router";

import routes from "./Routes/Routes";

import Layout from "./Components/Layout/PageLayout";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
