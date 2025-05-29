import * as React from "react";
import { 
  ToggleButtonGroup, 
  ToggleButton, 
  ToggleButtonGroupProps, 
  ToggleButtonProps, 
  styled 
} from "@mui/material";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

type ToggleGroupContextValue = VariantProps<typeof toggleVariants>;

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
});

interface ToggleGroupProps 
  extends Omit<ToggleButtonGroupProps, 'color' | 'size'>,
    VariantProps<typeof toggleVariants> {
  size?: 'default' | 'sm' | 'lg';
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: theme.spacing(0.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '& .MuiToggleButtonGroup-grouped': {
    margin: 0,
    border: 0,
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => (
    <StyledToggleButtonGroup
      ref={ref}
      className={cn(className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </StyledToggleButtonGroup>
  )
);

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps 
  extends Omit<ToggleButtonProps, 'size' | 'color'>,
    VariantProps<typeof toggleVariants> {}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, children, variant: itemVariant, size: itemSize, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);
    
    const variant = itemVariant ?? context.variant ?? "default";
    const size = itemSize ?? context.size ?? "default";

    return (
      <ToggleButton
        ref={ref}
        className={cn(
          toggleVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {children}
      </ToggleButton>
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
export type { ToggleGroupProps, ToggleGroupItemProps };