import * as React from "react"
import { Divider as MuiDivider } from "@mui/material"
import { styled } from "@mui/material/styles"

import { cn } from "@/lib/utils"

const StyledDivider = styled(MuiDivider)(({ orientation }) => ({
  margin: 0,
  flexShrink: 0,
  backgroundColor: 'var(--border)', // Maps to the bg-border class
  ...(orientation === "horizontal" ? {
    height: '1px',
    width: '100%'
  } : {
    height: '100%',
    width: '1px'
  })
}))

const Separator = React.forwardRef<
  HTMLHRElement,
  React.ComponentPropsWithoutRef<typeof MuiDivider>
>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <StyledDivider
      ref={ref}
      orientation={orientation}
      className={cn(className)}
      flexItem={orientation === "vertical"}
      {...props}
    />
  )
)
Separator.displayName = "Separator"

export { Separator }
