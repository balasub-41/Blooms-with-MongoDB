import * as React from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  styled,
  SelectChangeEvent,
} from "@mui/material";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Styled Select with proper type handling
const StyledSelect = styled(MuiSelect)<MuiSelectProps>(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--input)",
    borderWidth: "1px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--input)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ring)",
    borderWidth: "1px",
    boxShadow: "0 0 0 2px var(--ring)",
  },
  "& .MuiSelect-select": {
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  "& .MuiSelect-icon": {
    right: "8px",
    color: "var(--muted-foreground)",
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})) as unknown as typeof MuiSelect;

const StyledMenuItem = styled(MenuItem)(() => ({
  "&.Mui-selected": {
    backgroundColor: "var(--accent)",
    color: "var(--accent-foreground)",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "var(--accent)",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "var(--accent)",
    color: "var(--accent-foreground)",
  },
  "&.Mui-disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },
  position: "relative",
  paddingLeft: "32px",
  "& .MuiTouchRipple-root": {
    color: "var(--accent)",
  },
}));

// Select Props
interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  label?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

// Main Select component
const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ label, placeholder, className, children, ...props }, ref) => {
    return (
      <FormControl fullWidth className={className}>
        {label && <InputLabel>{label}</InputLabel>}
        <StyledSelect<unknown> variant="outlined"
          ref={ref}
          label={label}
          displayEmpty
          IconComponent={() => <ChevronDown className="h-4 w-4 opacity-50" />}
          MenuProps={{
            PaperProps: {
              className: "rounded-md border bg-popover text-popover-foreground shadow-md",
            },
            MenuListProps: {
              className: "p-1",
            },
          }}
          {...props}
        >
          {placeholder && (
            <MenuItem value="" disabled hidden>
              {placeholder}
            </MenuItem>
          )}
          {children}
        </StyledSelect>
      </FormControl>
    );
  }
);
Select.displayName = "Select";

// ... rest of your code remains the same ...