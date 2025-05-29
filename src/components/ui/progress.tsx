import * as React from "react";
import { LinearProgress, styled } from "@mui/material";
import { cn } from "@/lib/utils";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 9999,
  backgroundColor: theme.palette.secondary.main,
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.primary.main,
    transition: 'transform 0.2s ease-in-out',
  },
}));

interface ProgressProps extends React.ComponentProps<typeof LinearProgress> {
  value?: number;
  className?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <StyledLinearProgress
      ref={ref}
      variant="determinate"
      value={value || 0}
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    />
  )
);

Progress.displayName = "Progress";

export { Progress };
