import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import Questionnaire from "./components/questionnaire";
import Phq9Form from "./components/phq9-form";
import DailyCheckIn from "./components/daily-checkin";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/phq9-form", element: <Phq9Form /> },
    { path: "/questionnaire", element: <Questionnaire /> },
    { path: "/checkin", element: <DailyCheckIn /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
