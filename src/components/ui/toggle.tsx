import * as React from "react";
import { ToggleButton, ToggleButtonProps, styled } from "@mui/material";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ToggleProps 
  extends Omit<ToggleButtonProps, 'value' | 'onChange' | 'size'>,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&.MuiToggleButton-root': {
    border: 'none',
    textTransform: 'none',
    '&.Mui-selected': {
      backgroundColor: theme.palette.action.selected,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.action.selected,
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, pressed, onPressedChange, ...props }, ref) => {
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newValue: any
    ) => {
      if (onPressedChange) {
        onPressedChange(!pressed);
      }
    };

    const sizeClass = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default';

    return (
      <StyledToggleButton
        ref={ref}
        value="toggle"
        selected={pressed}
        onChange={handleChange}
        className={cn(
          toggleVariants({ variant, size: sizeClass, className }),
          pressed && "bg-accent text-accent-foreground"
        )}
        {...props}
      />
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
export type { ToggleProps };