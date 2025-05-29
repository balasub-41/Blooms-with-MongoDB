import * as React from "react"
import { Avatar as MuiAvatar } from "@mui/material"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MuiAvatar>
>(({ className, ...props }, ref) => (
  <MuiAvatar
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, src, alt, ...props }, ref) => (
  <Avatar className={className}>
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  </Avatar>
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <Avatar className={cn("bg-muted", className)} {...props}>
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full",
        className
      )}
    >
      {children}
    </div>
  </Avatar>
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
