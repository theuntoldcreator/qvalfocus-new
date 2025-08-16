import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import { Toaster } from "./components/ui/toaster";

// A layout component that includes the Toaster for notifications
const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      // Other routes can be added here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;