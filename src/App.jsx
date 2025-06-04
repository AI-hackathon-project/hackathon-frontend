import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import Questionnaire from "./components/questionnaire";
import Phq9Form from "./components/phq9-form";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/phq9-form", element: <Phq9Form /> },
    { path: "/questionnaire", element: <Questionnaire /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
