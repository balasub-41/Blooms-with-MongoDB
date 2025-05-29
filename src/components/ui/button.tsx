import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    let muiProps: Partial<MuiButtonProps> = {};
    
    switch (variant) {
      case "outline":
        muiProps.variant = "outlined";
        muiProps.color = "inherit";
        break;
      case "secondary":
        muiProps.variant = "contained";
        muiProps.color = "secondary";
        break;
      case "ghost":
        muiProps.variant = "text";
        muiProps.color = "inherit";
        break;
      case "link":
        muiProps.variant = "text";
        muiProps.color = "primary";
        break;
      case "destructive":
        muiProps.variant = "contained";
        muiProps.color = "error";
        break;
      case "default":
      default:
        muiProps.variant = "contained";
        muiProps.color = "primary";
        break;
    }

    switch (size) {
      case "sm":
        muiProps.size = "small";
        break;
      case "lg":
        muiProps.size = "large";
        break;
      case "icon":
      case "default":
      default:
        // Default size is medium
        break;
    }

    return (
      <MuiButton
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          // Override some MUI styles with our custom ones
          "[&.MuiButton-root]:rounded-md [&.MuiButton-root]:text-sm [&.MuiButton-root]:font-medium"
        )}
        {...muiProps}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };