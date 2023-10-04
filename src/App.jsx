import Cadastro from "./Container/Cadastro";
import Home from "./Container/Home";
import LoginPage from "./Container/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Receber from "./Container/Receber";
import Oferecer from "./Container/Oferecer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/receber",
    element: <Receber />,
  },
  {
    path: "/oferecer",
    element: <Oferecer />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;



