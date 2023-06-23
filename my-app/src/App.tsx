import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./Pages/Main/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Winner } from "./Pages/Winner/Winner";
import { CookiesProvider } from 'react-cookie';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/winner",
      element: <Winner/>
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
