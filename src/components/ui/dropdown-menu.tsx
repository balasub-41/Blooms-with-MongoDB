import * as React from "react";
import { Menu, MenuItem, Divider, MenuProps, Button } from '@mui/material';
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  menuProps?: Omit<MenuProps, 'open' | 'anchorEl' | 'onClose'>;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, trigger, open, onOpenChange, menuProps }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = open !== undefined ? open : Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      onOpenChange?.(true);
    };

    const handleClose = () => {
      setAnchorEl(null);
      onOpenChange?.(false);
    };

    return (
      <div ref={ref}>
        <div onClick={handleClick}>{trigger}</div>
        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          {...menuProps}
        >
          {children}
        </Menu>
      </div>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";

interface DropdownMenuItemProps extends React.ComponentProps<typeof MenuItem> {
  inset?: boolean;
}

const DropdownMenuItem = React.forwardRef<HTMLLIElement, DropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <MenuItem
      ref={ref}
      className={cn(
        "relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);

DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuSeparator = () => <Divider />;

// Add the missing components
const DropdownMenuTrigger = React.forwardRef<HTMLDivElement, { asChild?: boolean; children: React.ReactNode }>(
  ({ asChild, children }, ref) => {
    return <div ref={ref}>{children}</div>;
  }
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className, children }, ref) => {
    return <div ref={ref} className={cn("dropdown-content", className)}>{children}</div>;
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuSub = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return <div ref={ref}>{children}</div>;
  }
);
DropdownMenuSub.displayName = "DropdownMenuSub";

const DropdownMenuSubTrigger = React.forwardRef<HTMLDivElement, { asChild?: boolean; children: React.ReactNode }>(
  ({ asChild, children }, ref) => {
    return <div ref={ref} className="flex items-center">{children}</div>;
  }
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuPortal = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return <div ref={ref}>{children}</div>;
  }
);
DropdownMenuPortal.displayName = "DropdownMenuPortal";

const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className, children }, ref) => {
    return <div ref={ref} className={cn("dropdown-subcontent", className)}>{children}</div>;
  }
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  // Export the new components
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
};