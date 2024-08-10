import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RegisterPage from "./components/RegisterPage";
import NewApp from "./components/NewApp";
import NewApp2 from "./components/NewApp2";
import MainProvider from "./provider/MainProvider";

const router = createBrowserRouter([
  {
    path: "/registerPage",
    element: <RegisterPage />,
  },
  {
    path: "/:component",
    element: <App />,
  },
  {
    path: "/home/:courseId",
    element: <NewApp />,
  },
  {
    path:"/dashboard/:testId",
    element:<App />
  },
  {
    path:"/dashboard/:testId/:result",
    element:<NewApp2 />
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainProvider>
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </QueryClientProvider>
  </MainProvider>
);
