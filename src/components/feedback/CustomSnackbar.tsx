import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Check, Report, Info, Warning } from "@mui/icons-material";

export interface CustomSnackbarProps {
  open: boolean;
  onClose: () => void;
  severity: "success" | "error" | "info" | "warning";
  message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  onClose,
  severity,
  message,
}) => {
  const getIcon = () => {
    switch (severity) {
      case "success":
        return <Check fontSize="inherit" />;
      case "error":
        return <Report fontSize="inherit" />;
      case "info":
        return <Info fontSize="inherit" />;
      case "warning":
        return <Warning fontSize="inherit" />;
      default:
        return null;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        icon={getIcon()}
        sx={{ width: "100%", alignItems: "center" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
