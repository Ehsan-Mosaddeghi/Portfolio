import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
