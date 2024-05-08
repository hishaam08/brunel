import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/brunel/",
    element: <Home />,
  },
  {
    path: "/brunel/register",
    element: <Form />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
