import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Setting from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AppLayout from "./ui/AppLayout";

import { StyleSheetManager } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "bookings",
          element: <Bookings />,
        },
        {
          path: "cabins",
          element: <Cabins />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "settings",
          element: <Setting />,
        },
        {
          path: "update-account",
          element: <Account />,
        },
      ],
    },
    { path: "login", element: <Login /> },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager shouldForwardProp={(prop) => prop}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </StyleSheetManager>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "1,6rem",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            padding: "16px 24px",
          },

          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
