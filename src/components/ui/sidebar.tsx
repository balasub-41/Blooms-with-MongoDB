// Remove duplicate React import since it's already imported later
// styled is already imported in the MUI imports below, so we can remove this duplicate
import { cn } from "@/lib/utils";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: 'hsl(var(--sidebar-background))',
    color: 'hsl(var(--sidebar-foreground))',
    border: '1px solid hsl(var(--sidebar-border))',
    width: 280,
    padding: theme.spacing(2),
  }
}));

interface SidebarProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  side?: 'left' | 'right';
  className?: string;
}

const SidebarDrawerComponent = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, open = false, onClose, side = 'left', className, ...props }, ref) => {
    return (
      <StyledDrawer
        ref={ref}
        open={open}
        onClose={onClose}
        anchor={side}
        variant="persistent"
        className={cn(className)}
        {...props}
      >
        {children}
      </StyledDrawer>
    );
  }
);

SidebarDrawerComponent.displayName = "Sidebar";

export { SidebarDrawerComponent as SidebarDrawer };
import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  styled,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Menu } from "@mui/icons-material";

// Constants
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = 256; // in pixels
const SIDEBAR_WIDTH_MOBILE = 288;
const SIDEBAR_WIDTH_ICON = 48;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Types
type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

// Styled components
const SidebarRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const SidebarDesktop = styled(Box)(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  "&.collapsed": {
    width: SIDEBAR_WIDTH_ICON,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: SIDEBAR_WIDTH,
    boxSizing: "border-box",
  },
}));

const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  children,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile
      ? setOpenMobile((open) => !open)
      : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue as SidebarContext}>
      <SidebarRoot {...props}>{children}</SidebarRoot>
    </SidebarContext.Provider>
  );
};

const Sidebar = ({ side = "left", variant = "sidebar", children, ...props }) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Drawer
        open={openMobile}
        onClose={() => setOpenMobile(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: SIDEBAR_WIDTH_MOBILE,
          },
        }}
      >
        {children}
      </Drawer>
    );
  }

  return (
    <SidebarDesktop className={state === "collapsed" ? "collapsed" : ""}>
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          height: "100vh",
          position: "fixed",
          borderRight: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </SidebarDesktop>
  );
};

const SidebarTrigger = ({ ...props }) => {
  const { toggleSidebar } = useSidebar();
  return (
    <IconButton onClick={toggleSidebar} {...props}>
      <Menu />
    </IconButton>
  );
};

const SidebarHeader = ({ children, ...props }) => (
  <Box sx={{ p: 2 }} {...props}>
    {children}
  </Box>
);

const SidebarContent = ({ children, ...props }) => (
  <Box sx={{ flex: 1, overflow: "auto" }} {...props}>
    {children}
  </Box>
);

const SidebarFooter = ({ children, ...props }) => (
  <Box sx={{ p: 2 }} {...props}>
    {children}
  </Box>
);

const SidebarMenu = ({ children, ...props }) => (
  <List disablePadding {...props}>
    {children}
  </List>
);

const SidebarMenuItem = ({ icon, text, active, onClick, ...props }) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <ListItem disablePadding {...props}>
      <Tooltip title={isCollapsed ? text : ""} placement="right">
        <ListItemButton
          selected={active}
          onClick={onClick}
          sx={{
            minHeight: 48,
            justifyContent: isCollapsed ? "center" : "initial",
            px: 2.5,
          }}
        >
          {icon && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isCollapsed ? "auto" : 3,
                justifyContent: "center",
              }}
            >
              {icon}
            </ListItemIcon>
          )}
          {!isCollapsed && <ListItemText primary={text} />}
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
};

const SidebarMenuSkeleton = ({ showIcon = false, ...props }) => {
  return (
    <ListItem disablePadding {...props}>
      <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
        {showIcon && (
          <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
            <Skeleton variant="circular" width={24} height={24} />
          </ListItemIcon>
        )}
        <Skeleton variant="text" width="70%" />
      </ListItemButton>
    </ListItem>
  );
};

const SidebarGroup = ({ title, children, ...props }) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Box sx={{ my: 1 }} {...props}>
      {!isCollapsed && title && (
        <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export {
  Sidebar,
  SidebarProvider,
  useSidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarGroup,
};