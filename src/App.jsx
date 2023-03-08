import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Errors from "./pages/Errors";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>,
    loader: dashboardLoader,
    errorElement: <Errors/>
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
