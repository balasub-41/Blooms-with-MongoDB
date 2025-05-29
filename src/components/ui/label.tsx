import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const StyledLabel = styled(Typography)(({ theme }) => ({
  // Apply the base Tailwind styles as CSS-in-JS
  fontSize: theme.typography.pxToRem(14), // text-sm equivalent
  fontWeight: 500, // font-medium equivalent
  lineHeight: 1, // leading-none equivalent

  // Handle peer-disabled state
  "&.peer-disabled": {
    cursor: "not-allowed",
    opacity: 0.7
  }
})) as typeof Typography;

interface LabelProps extends React.ComponentProps<typeof Typography>, VariantProps<typeof labelVariants> {
  htmlFor?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <StyledLabel
      ref={ref}
      component="label"
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };