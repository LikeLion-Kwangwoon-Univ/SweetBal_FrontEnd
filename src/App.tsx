import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import router from "./Routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const RouterObject = createBrowserRouter(router);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retryOnMount: true,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={RouterObject} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
