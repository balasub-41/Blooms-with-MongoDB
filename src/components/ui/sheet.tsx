import * as React from "react";
import {
  Drawer,
  IconButton,
  Divider,
  Box,
  Typography,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import { X } from "lucide-react";

// Styled components
const SheetOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&.Mui-open": {
    opacity: 1,
  },
}));

const SheetContent = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 2,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[16],
    padding: theme.spacing(3),
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  },
  "&.top .MuiDrawer-paper": {
    top: 0,
    left: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%",
    borderBottom: `1px solid ${theme.palette.divider}`,
    transform: "translateY(-100%)",
  },
  "&.bottom .MuiDrawer-paper": {
    bottom: 0,
    left: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%",
    borderTop: `1px solid ${theme.palette.divider}`,
    transform: "translateY(100%)",
  },
  "&.left .MuiDrawer-paper": {
    top: 0,
    left: 0,
    height: "100%",
    width: "75%",
    maxWidth: theme.breakpoints.values.sm,
    borderRight: `1px solid ${theme.palette.divider}`,
    transform: "translateX(-100%)",
  },
  "&.right .MuiDrawer-paper": {
    top: 0,
    right: 0,
    height: "100%",
    width: "75%",
    maxWidth: theme.breakpoints.values.sm,
    borderLeft: `1px solid ${theme.palette.divider}`,
    transform: "translateX(100%)",
  },
  "&.Mui-open .MuiDrawer-paper": {
    transform: "none",
  },
}));

// Main Sheet component
export const Sheet = ({ children, open, onClose, ...props }) => {
  return (
    <>
      <SheetOverlay className={open ? "Mui-open" : ""} onClick={onClose} />
      <SheetContent
        open={open}
        onClose={onClose}
        className={`${props.side || "right"} ${open ? "Mui-open" : ""}`}
        {...props}
      >
        {children}
      </SheetContent>
    </>
  );
};

// Sheet Header component
const SheetHeader = ({ className, children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      textAlign: { xs: "center", sm: "left" },
      mb: 2,
    }}
    className={className}
    {...props}
  >
    {children}
  </Box>
);

// Sheet Title component
const SheetTitle = ({ className, children, ...props }) => (
  <Typography
    variant="h6"
    component="h2"
    sx={{ fontWeight: 600 }}
    className={className}
    {...props}
  >
    {children}
  </Typography>
);

// Sheet Description component
const SheetDescription = ({ className, children, ...props }) => (
  <Typography
    variant="body2"
    color="text.secondary"
    className={className}
    {...props}
  >
    {children}
  </Typography>
);

// Sheet Footer component
const SheetFooter = ({ className, children, ...props }) => (
  <Stack
    direction={{ xs: "column-reverse", sm: "row" }}
    spacing={1}
    justifyContent="flex-end"
    sx={{ mt: 2 }}
    className={className}
    {...props}
  >
    {children}
  </Stack>
);

// Sheet Close button component
const SheetClose = ({ className, ...props }) => {
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: theme.palette.text.secondary,
        "&:hover": {
          color: theme.palette.text.primary,
        },
      }}
      className={className}
      {...props}
    >
      <X size={16} />
    </IconButton>
  );
};

// Export all components
export {
  Sheet as default,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
};