import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { Dialog as MuiDialog, DialogContent as MuiDialogContent, TextField as MuiTextField, InputAdornment, List as MuiList, ListItem as MuiListItem, ListSubheader as MuiListSubheader, Divider as MuiDivider } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Search as SearchIcon } from "@mui/icons-material"

import { cn } from "@/lib/utils"
// import { Dialog, DialogContent } from "@/components/ui/dialog" // No longer needed, using MuiDialog

// Styled components for CommandDialog and CommandInput to maintain original styling
const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  overflow: 'hidden',
  padding: 0,
  boxShadow: theme.shadows[4], // Mimics shadow-lg
}));

const StyledCommandInputWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid var(--border)', // Mimics border-b
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
});

const StyledCommandInput = styled(MuiTextField)({
  flexGrow: 1,
  '& .MuiInputBase-input': {
    height: '2.75rem', // Mimics h-11
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    fontSize: '0.875rem', // Mimics text-sm
    outline: 'none',
    '&::placeholder': {
      color: 'var(--muted-foreground)', // Mimics placeholder:text-muted-foreground
      opacity: 1,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  '& .MuiInputBase-root': {
    '&:before': { borderBottom: 'none !important' },
    '&:after': { borderBottom: 'none !important' },
    '&:hover:not(.Mui-disabled):before': { borderBottom: 'none !important' },
  },
  '& .MuiInput-underline:before': { borderBottom: 'none' },
  '& .MuiInput-underline:after': { borderBottom: 'none' },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
});

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends React.ComponentProps<typeof MuiDialog> {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <MuiDialog {...props} open={props.open} onClose={props.onClose} maxWidth="md" fullWidth>
      <StyledDialogContent>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </StyledDialogContent>
    </MuiDialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof MuiTextField>,
  React.ComponentPropsWithoutRef<typeof MuiTextField> & { value?: string }
>(({ className, ...props }, ref) => (
  <StyledCommandInputWrapper>
    <SearchIcon sx={{ mr: 2, height: 16, width: 16, flexShrink: 0, opacity: 0.5 }} /> {/* Mimics h-4 w-4 */}
    <StyledCommandInput
      ref={ref}
      variant="standard"
      InputProps={{
        disableUnderline: true, // Remove Material-UI's default underline
      }}
      className={cn(
        "bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </StyledCommandInputWrapper>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
