import * as React from "react";
import { Checkbox as MuiCheckbox, styled } from "@mui/material";
import { Check } from "@mui/icons-material";
import { cn } from "@/lib/utils";

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  padding: 0,
  width: 16,
  height: 16,
  color: theme.palette.primary.main,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&.Mui-disabled': {
    opacity: 0.5,
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 16,
  },
}));

interface CheckboxProps extends React.ComponentProps<typeof MuiCheckbox> {
  className?: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <StyledCheckbox
      ref={ref}
      className={cn(
        "peer shrink-0 rounded-sm border border-primary ring-offset-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        className
      )}
      checkedIcon={<Check />}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
