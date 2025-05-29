import * as React from "react";
import { 
  styled,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentProps as MuiDialogContentProps,
  DialogActionsProps as MuiDialogActionsProps,
  IconButtonProps
} from '@mui/material';
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Styled Dialog component
const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: 50,
    width: '100%',
    maxWidth: '500px',
    transform: 'translate(-50%, -50%)',
    gap: theme.spacing(2),
    border: '1px solid ' + theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[4],
    borderRadius: theme.shape.borderRadius,
  },
  '& .MuiBackdrop-root': {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
}));

interface DialogProps extends MuiDialogProps {}

const Dialog = ({ ...props }: DialogProps) => {
  return <StyledDialog {...props} />;
};

interface DialogCloseProps extends IconButtonProps {
  className?: string;
}

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ className, ...props }, ref) => (
    <IconButton
      ref={ref}
      aria-label="Close"
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </IconButton>
  )
);
DialogClose.displayName = "DialogClose";

interface CustomDialogContentProps extends MuiDialogContentProps {
  className?: string;
}

const DialogContent = React.forwardRef<HTMLDivElement, CustomDialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <MuiDialogContent
      ref={ref}
      className={cn(
        "gap-4 p-6",
        className
      )}
      {...props}
    >
      {children}
    </MuiDialogContent>
  )
);
DialogContent.displayName = "DialogContent";

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const DialogHeader = ({
  className,
  ...props
}: DialogHeaderProps) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

interface DialogFooterProps extends MuiDialogActionsProps {
  className?: string;
}

const DialogFooter = ({
  className,
  ...props
}: DialogFooterProps) => (
  <MuiDialogActions
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

interface DialogTitleProps extends MuiDialogTitleProps {
  className?: string;
}

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <MuiDialogTitle
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
DialogTitle.displayName = "DialogTitle";

interface DialogDescriptionProps extends MuiDialogContentProps {
  className?: string;
}

const DialogDescription = React.forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <MuiDialogContent
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
export type {
  DialogProps,
  DialogCloseProps,
  CustomDialogContentProps as DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
};