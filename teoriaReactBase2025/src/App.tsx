import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { routes } from "./routes/routesConfig";
import { Suspense } from "react";
import Ejem_21 from "./pages/Ejem_21";

function App() {
  return (
    
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {routes
              .filter(({ to }) => to !== null)
              .map(({ to, component: Component }) => (
                <Route key={to} path={to || ""} element={<Component />} />
              ))}
            
            <Route path="*" element={<NotFound />} />
            <Route path="Ejem21/:id" element={<Ejem_21 />} />

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;