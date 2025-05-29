import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
