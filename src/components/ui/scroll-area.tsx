import * as React from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { cn } from "@/lib/utils";

const StyledScrollArea = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  // Custom scrollbar styling for WebKit browsers
  "&::-webkit-scrollbar": {
    width: 8,
    height: 8,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
  },
}));

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  BoxProps
>(({ className, children, ...props }, ref) => (
  <StyledScrollArea
    ref={ref}
    className={cn("h-full w-full rounded-[inherit]", className)}
    {...props}
  >
    {children}
  </StyledScrollArea>
));

ScrollArea.displayName = "ScrollArea";

// ScrollBar component will be removed as it's handled by custom CSS
// If specific custom scrollbar behavior is needed, it would require a more complex implementation

export { ScrollArea };
export type { BoxProps as ScrollAreaProps };
