import * as React from 'react';
import { Tooltip, TooltipProps, styled } from '@mui/material';
import { cn } from '@/lib/utils';

// Type exports
export type { TooltipProps };

// Base MUI Tooltip export
const BaseTooltip = Tooltip;

// Styled Tooltip component
const StyledTooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => (
    <BaseTooltip
      ref={ref}
      {...props}
      componentsProps={{
        tooltip: {
          className: cn(
            "bg-popover text-popover-foreground rounded-md border shadow-md",
            props.componentsProps?.tooltip?.className
          ),
        },
        arrow: {
          className: cn(
            "text-popover",
            props.componentsProps?.arrow?.className
          ),
        },
        ...props.componentsProps
      }}
    />
  )
);

StyledTooltip.displayName = 'StyledTooltip';

// Alternative styled version using MUI's styled() API
const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[4],
  },
  '& .MuiTooltip-arrow': {
    color: theme.palette.background.paper,
  },
}));

// Export all components
export {
  BaseTooltip as Tooltip,
  StyledTooltip,
  CustomTooltip
};