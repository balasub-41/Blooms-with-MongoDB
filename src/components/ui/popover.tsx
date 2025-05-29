import * as React from "react"
import { cn } from "@/lib/utils"
import { Popover as MuiPopover } from '@mui/material';
import { styled } from '@mui/material/styles';

// Material-UI Popover does not have a direct equivalent for PopoverPrimitive.Root
// The MuiPopover component itself acts as the root.
// We will use a state to control the open/close of the popover.

// PopoverTrigger will be a simple component that handles the click and sets the anchor element.
interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, ...props }, ref) => {
    // This component will be responsible for setting the anchorEl for MuiPopover.
    // The actual state management for open/close will be handled by the parent component
    // that uses Popover and PopoverTrigger together.
    return (
      <button type="button" ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";

// Styled PopoverContent to apply Tailwind classes and animations
const PopoverContent = styled(MuiPopover)(({ className }) => ({
  // Material-UI Popover's Paper component is where the content is rendered.
  // We need to target the Paper component for styling.
  '& .MuiPaper-root': {
    borderRadius: '0.375rem', // rounded-md
    border: '1px solid var(--border)', // border
    backgroundColor: 'var(--popover-background)', // bg-popover
    color: 'var(--popover-foreground)', // text-popover-foreground
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
    outline: 'none',
    width: '18rem', // w-72
    padding: '1rem', // p-4

    // Animations: Material-UI uses Transition components for animations.
    // We can try to replicate the data-[state] animations using Material-UI's TransitionProps.
    // This is a simplified mapping and might require more detailed configuration
    // with a custom Transition component for exact replication.
    // For now, we'll rely on Material-UI's default fade/zoom transitions.
  },
  // Apply any additional classes passed via className prop
  ...(className && { className: cn(className) }),
}));

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  children: React.ReactNode;
  className?: string;
  align?: "center" | "start" | "end"; // Material-UI uses anchorOrigin/transformOrigin
  sideOffset?: number; // Material-UI uses anchorOrigin/transformOrigin offset
}

const Popover = ({ open, onClose, anchorEl, children, className, align = "center", sideOffset = 4, ...props }: PopoverProps) => {
  // Map align and sideOffset to Material-UI's anchorOrigin and transformOrigin
  const anchorOrigin = React.useMemo(() => {
    let horizontal: 'left' | 'center' | 'right' = 'center';
    if (align === 'start') horizontal = 'left';
    if (align === 'end') horizontal = 'right';
    return { vertical: 'bottom' as 'bottom', horizontal };
  }, [align]);

  const transformOrigin = React.useMemo(() => {
    let horizontal: 'left' | 'center' | 'right' = 'center';
    if (align === 'start') horizontal = 'left';
    if (align === 'end') horizontal = 'right';
    return { vertical: 'top' as 'top', horizontal };
  }, [align]);

  return (
    <PopoverContent
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      // The sideOffset can be adjusted by adding a small offset to the vertical/horizontal origin
      // or by using the `sx` prop for more fine-grained control.
      // For simplicity, we're not directly mapping sideOffset here, as it's often handled by
      // Material-UI's positioning system.
      className={className}
      {...props}
    >
      {children}
    </PopoverContent>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
