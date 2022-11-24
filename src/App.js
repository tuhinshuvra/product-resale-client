// import './App.css';

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
