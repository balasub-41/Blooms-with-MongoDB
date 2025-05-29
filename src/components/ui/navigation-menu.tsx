import * as React from "react";
import { Menu, MenuItem, Button, Popper, Paper, Grow, MenuList, IconButton, styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { cn } from "@/lib/utils";

const StyledButton = styled(Button)(({ theme }) => ({
  height: 40,
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.action.focus,
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(1),
  minWidth: 180,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
}));

interface NavigationMenuProps {
  className?: string;
  children: React.ReactNode;
}

const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  )
);
NavigationMenu.displayName = "NavigationMenu";

interface NavigationMenuListProps {
  className?: string;
  children: React.ReactNode;
}

const NavigationMenuList = React.forwardRef<HTMLDivElement, NavigationMenuListProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      {...props}
    >
      {children}
    </div>
  )
);
NavigationMenuList.displayName = "NavigationMenuList";

interface NavigationMenuItemProps {
  children: React.ReactNode;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ children }) => (
  <div className="relative">{children}</div>
);

interface NavigationMenuTriggerProps extends React.ComponentProps<typeof Button> {
  className?: string;
}

const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    return (
      <>
        <StyledButton
          ref={ref}
          className={cn("group", className)}
          onClick={() => setOpen(!open)}
          endIcon={
            <ExpandMore
              className={cn(
                "transition-transform duration-200",
                open ? "rotate-180" : ""
              )}
            />
          }
          {...props}
        >
          {children}
        </StyledButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          placement="bottom-start"
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <StyledPaper>
                <MenuList autoFocusItem={open}>
                  {/* Menu content goes here */}
                </MenuList>
              </StyledPaper>
            </Grow>
          )}
        </Popper>
      </>
    );
  }
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

interface NavigationMenuContentProps {
  className?: string;
  children: React.ReactNode;
}

const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 top-full w-full bg-popover p-4 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = StyledButton;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
};
