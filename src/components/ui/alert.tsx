import * as React from "react";
import { 
  Alert as MuiAlert, 
  AlertTitle as MuiAlertTitle, 
  AlertProps as MuiAlertProps,
  AlertTitleProps as MuiAlertTitleProps
} from "@mui/material";
import { cn } from "@/lib/utils";

interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'action'>, 
  Pick<MuiAlertProps, 'severity' | 'onClose' | 'icon' | 'action'> {
  variant?: "default" | "destructive";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", children, ...props }, ref) => (
    <MuiAlert
      ref={ref}
      severity={variant === "destructive" ? "error" : props.severity || "info"}
      className={cn(
        "relative w-full rounded-lg border p-4",
        variant === "destructive" && "border-destructive/50 text-destructive dark:border-destructive",
        className
      )}
      {...props}
    >
      {children}
    </MuiAlert>
  )
);
Alert.displayName = "Alert";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <MuiAlertTitle
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
export type { AlertProps, AlertTitleProps, AlertDescriptionProps };