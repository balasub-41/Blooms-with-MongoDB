import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fade,
  Backdrop,
  DialogProps,
  ButtonProps,
  TypographyProps
} from "@mui/material";
import { cn } from "@/lib/utils";

interface AlertDialogProps extends Omit<DialogProps, 'open'> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const AlertDialog = ({ open, onOpenChange, children, ...props }: AlertDialogProps) => (
  <Dialog
    open={open || false}
    onClose={() => onOpenChange?.(false)}
    TransitionComponent={Fade}
    BackdropComponent={Backdrop}
    BackdropProps={{
      className: cn("fixed inset-0 z-50 bg-black/80"),
      ...props.BackdropProps
    }}
    {...props}
  >
    {children}
  </Dialog>
);

interface AlertDialogContentProps extends React.ComponentProps<typeof DialogContent> {}

const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogContent
      ref={ref}
      className={cn(
        "w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogContent>
  )
);
AlertDialogContent.displayName = "AlertDialogContent";

interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertDialogHeader = ({
  className,
  ...props
}: AlertDialogHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

interface AlertDialogFooterProps extends React.ComponentProps<typeof DialogActions> {}

const AlertDialogFooter = ({
  className,
  ...props
}: AlertDialogFooterProps) => (
  <DialogActions
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

interface AlertDialogTitleProps extends React.ComponentProps<typeof DialogTitle> {}

const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogTitle
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
);
AlertDialogTitle.displayName = "AlertDialogTitle";

interface AlertDialogDescriptionProps extends TypographyProps {}

const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <DialogContentText
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
AlertDialogDescription.displayName = "AlertDialogDescription";

interface AlertDialogActionProps extends ButtonProps {}

const AlertDialogAction = React.forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="contained"
      color="primary"
      className={cn(className)}
      {...props}
    />
  )
);
AlertDialogAction.displayName = "AlertDialogAction";

interface AlertDialogCancelProps extends ButtonProps {}

const AlertDialogCancel = React.forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outlined"
      color="primary"
      className={cn("mt-2 sm:mt-0", className)}
      {...props}
    />
  )
);
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
export type {
  AlertDialogProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
};