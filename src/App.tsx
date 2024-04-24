import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/layout/Layout";
import { CustomContainer } from "./components/layout/styles";
import theme from "./config/theme";
import { SnackbarProvider } from "./hooks/snackbarHook";
import { Pages } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { ListProvider } from "./hooks/listHooks";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <BrowserRouter>
                <Layout>
                  <CustomContainer>
                    <ListProvider>
                      <Pages />
                    </ListProvider>
                  </CustomContainer>
                </Layout>
              </BrowserRouter>
            </SnackbarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
