import * as React from "react";
import { Snackbar, Alert, AlertProps, AlertColor, IconButton } from '@mui/material';
import { Slide, SlideProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface MuiToastProps extends AlertProps {
  open: boolean;
  onClose?: () => void;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  action?: React.ReactNode;
  variant?: 'standard' | 'filled' | 'outlined';
}

const MuiToast = ({
  open,
  onClose,
  message,
  severity = 'info',
  autoHideDuration = 6000,
  action,
  variant = 'standard',
  ...props
}: MuiToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={(props: SlideProps) => <Slide {...props} direction="left" />}
    >
      <Alert 
        onClose={onClose} 
        severity={severity}
        variant={variant}
        action={action}
        {...props}
        sx={{ width: '100%', ...props.sx }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

// Type exports
type ToastProps = MuiToastProps;
type ToastActionElement = React.ReactNode;

// Add the missing components
const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const ToastTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="toast-title font-medium">{children}</div>;
};

const ToastDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="toast-description text-sm opacity-90">{children}</div>;
};

const ToastClose: React.FC = () => {
  return (
    <IconButton size="small" aria-label="close" className="toast-close">
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

// Component exports
export {
  // MUI Toast exports
  type ToastProps,
  type ToastActionElement,
  MuiToast as ToastComponent,
  Snackbar as ToastViewport,
  Alert as ToastAlert,
  MuiToast,
  // Add these new exports
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastClose
};

export { Snackbar as Toaster };
export { Alert as Toast };