import * as React from "react"
import { Slider as MuiSlider, styled } from "@mui/material"

const StyledSlider = styled(MuiSlider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: 8,
    backgroundColor: theme.palette.mode === 'dark' ? '#2f2f2f' : '#e5e5e5',
    borderRadius: 4,
  },
  '& .MuiSlider-track': {
    height: 8,
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.primary.main}`,
    },
    '&.Mui-disabled': {
      opacity: 0.5,
    },
  },
}))

const Slider = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof MuiSlider>
>(({ className, ...props }, ref) => (
  <StyledSlider
    ref={ref}
    className={className}
    {...props}
  />
))

Slider.displayName = "Slider"

export { Slider }
