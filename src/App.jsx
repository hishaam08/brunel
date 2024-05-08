import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "https://brunel-fawn.vercel.app/register",
        element: <Form />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
