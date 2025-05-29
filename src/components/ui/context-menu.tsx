import * as React from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Radio,
  Divider,
  Typography,
  styled,
  MenuProps,
} from "@mui/material";
import { Check, ChevronRight, Circle } from "lucide-react";

// Simple classNames merger
const cn = (...classes: (string | undefined | false | null)[]) =>
  classes.filter(Boolean).join(" ");

// Styled components for MUI
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: "8rem",
    overflow: "hidden",
    borderRadius: "6px",
    border: "1px solid",
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: "4px",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: "4px",
  fontSize: "0.875rem",
  padding: "6px 8px",
  "&:focus": {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.primary,
  },
  "&.Mui-disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },
}));

// Context Menu Core
export const ContextMenu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledMenu ref={ref} {...props}>
        {children}
      </StyledMenu>
    );
  }
);
ContextMenu.displayName = "ContextMenu";

// Trigger
export const ContextMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => (
  <button type="button" ref={ref} {...props}>
    {children}
  </button>
));
ContextMenuTrigger.displayName = "ContextMenuTrigger";

// Sub Trigger
export const ContextMenuSubTrigger = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<typeof MenuItem> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuItem
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenuItem>
));
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

const ContextMenuSubContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<typeof Menu>
>(({ className, ...props }, ref) => (
  <Menu
    ref={ref as unknown as React.Ref<HTMLDivElement>}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = "ContextMenuSubContent";

// Sub Component
export const ContextMenuSub = ({
  children,
  title,
  ...props
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ContextMenuSubTrigger onClick={handleClick} {...props}>
        {title}
      </ContextMenuSubTrigger>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {children}
      </Menu>
    </>
  );
};
ContextMenuSub.displayName = "ContextMenuSub";

// Checkbox Item
export const ContextMenuCheckboxItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<typeof MenuItem> & {
    checked?: boolean;
  }
>(({ children, checked, ...props }, ref) => (
  <MenuItem ref={ref} {...props}>
    <ListItemIcon>
      <Checkbox edge="start" checked={checked} disableRipple />
    </ListItemIcon>
    <ListItemText primary={children} />
  </MenuItem>
));
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

// Radio Item
export const ContextMenuRadioItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<typeof MenuItem> & {
    checked?: boolean;
  }
>(({ children, checked, ...props }, ref) => (
  <MenuItem ref={ref} {...props}>
    <ListItemIcon>
      <Radio edge="start" checked={checked} disableRipple />
    </ListItemIcon>
    <ListItemText primary={children} />
  </MenuItem>
));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

// Item
export const ContextMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<typeof MenuItem>
>((props, ref) => <StyledMenuItem ref={ref} {...props} />);
ContextMenuItem.displayName = "ContextMenuItem";

// Label
export const ContextMenuLabel = styled(Typography)(({ theme }) => ({
  padding: "6px 8px",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));
ContextMenuLabel.displayName = "ContextMenuLabel";

// Separator
export const ContextMenuSeparator = styled(Divider)(({ theme }) => ({
  margin: "4px -4px",
}));
ContextMenuSeparator.displayName = "ContextMenuSeparator";

// Shortcut
export const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";


