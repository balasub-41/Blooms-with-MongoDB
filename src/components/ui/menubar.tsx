import * as React from "react"
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  styled,
  IconButton,
  Fade,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { ChevronRight, Check, Circle } from "lucide-react"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: 40,
  minHeight: 40,
}))

const StyledToolbar = styled(Toolbar)({
  minHeight: 40,
  padding: '4px 8px',
  gap: 4,
})

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: '6px 12px',
  minWidth: 'auto',
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  padding: '6px 8px',
  minHeight: 32,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

interface MenubarProps extends React.ComponentProps<typeof AppBar> {
  children?: React.ReactNode
}

const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <StyledAppBar position="static" ref={ref} className={className} {...props}>
        <StyledToolbar>{children}</StyledToolbar>
      </StyledAppBar>
    )
  }
)

interface MenubarItemProps extends React.ComponentProps<typeof Button> {
  children?: React.ReactNode
}

const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarItemProps>(
  ({ className, children, ...props }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    
    return (
      <>
        <StyledButton
          ref={ref}
          className={className}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          {...props}
        >
          {children}
        </StyledButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          TransitionComponent={Fade}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement, {
                onClick: () => setAnchorEl(null),
              })
            }
            return child
          })}
        </Menu>
      </>
    )
  }
)

const MenubarItem = StyledMenuItem

const MenubarSeparator = styled('hr')(({ theme }) => ({
  margin: '4px 0',
  borderColor: theme.palette.divider,
}))

const MenubarShortcut = styled('span')(({ theme }) => ({
  marginLeft: 'auto',
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.secondary,
}))

Menubar.displayName = "Menubar"
MenubarTrigger.displayName = "MenubarTrigger"
MenubarItem.displayName = "MenubarItem"

export {
  Menubar,
  MenubarTrigger,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
}
