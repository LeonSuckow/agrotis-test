import { createContext, useContext, useState, ReactNode } from "react";
import CustomSnackbar, {
  CustomSnackbarProps,
} from "../components/feedback/CustomSnackbar";

interface SnackbarContextType {
  openSnackbar: (
    message: string,
    severity: CustomSnackbarProps["severity"]
  ) => void;
}

interface SnackbarProviderProps {
  children: ReactNode;
}
const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
    open: false,
    onClose: () => {},
    severity: "info",
    message: "",
  });

  const openSnackbar = (
    message: string,
    severity: CustomSnackbarProps["severity"]
  ) => {
    setSnackbarProps({
      open: true,
      onClose: closeSnackbar,
      severity,
      message,
    });
  };

  const closeSnackbar = () => {
    setSnackbarProps((prevProps) => ({
      ...prevProps,
      open: false,
    }));
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <CustomSnackbar {...snackbarProps} />
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar deve ser usado dentro de um SnackbarProvider");
  }
  return context;
};
