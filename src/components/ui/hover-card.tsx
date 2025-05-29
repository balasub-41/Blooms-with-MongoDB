import * as React from "react";
import { Popper, Card, Fade, styled } from "@mui/material";
import { cn } from "@/lib/utils";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: 256, // w-64
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[3],
  zIndex: 50,
}));

interface HoverCardProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  ({ children, open, onOpenChange }, ref) => (
    <div ref={ref} onMouseEnter={() => onOpenChange?.(true)} onMouseLeave={() => onOpenChange?.(false)}>
      {children}
    </div>
  )
);
HoverCard.displayName = "HoverCard";

interface HoverCardTriggerProps {
  children: React.ReactNode;
}

const HoverCardTrigger = React.forwardRef<HTMLDivElement, HoverCardTriggerProps>(
  ({ children }, ref) => (
    <div ref={ref}>
      {children}
    </div>
  )
);
HoverCardTrigger.displayName = "HoverCardTrigger";

interface HoverCardContentProps extends React.ComponentProps<typeof Card> {
  className?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  anchorEl?: HTMLElement | null;
  open?: boolean;
}

const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  ({ className, align = "center", sideOffset = 4, anchorEl, open, children, ...props }, ref) => (
    <Popper
      open={open || false}
      anchorEl={anchorEl}
      placement="bottom"
      transition
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, sideOffset],
          },
        },
        {
          name: 'flip',
          enabled: true,
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <StyledCard
            ref={ref}
            className={cn(
              "animate-in fade-in-0 zoom-in-95",
              className
            )}
            {...props}
          >
            {children}
          </StyledCard>
        </Fade>
      )}
    </Popper>
  )
);
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };
