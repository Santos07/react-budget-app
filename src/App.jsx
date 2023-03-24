import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main, { mainLoader } from "./layouts/Main";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Errors from "./pages/Errors";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Errors/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Errors/>
      },
    ]
  },
  
  // {
  //   path: "*",
  //   element: <Errors/>,
  // }
]);


function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
