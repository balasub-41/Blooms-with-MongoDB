import * as React from "react"
import { Box } from "@mui/material"

interface AspectRatioProps extends React.ComponentProps<typeof Box> {
  ratio?: number
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, children, style, ...props }, ref) => (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: `${(1 / ratio) * 100}%`,
        "& > *": {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        },
        ...style
      }}
      {...props}
    >
      {children}
    </Box>
  )
)

AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
