import * as React from "react";
import {
  RadioGroup as MuiRadioGroup,
  Radio,
  FormControlLabel,
  styled,
  RadioGroupProps,
  FormControlLabelProps,
  RadioProps
} from "@mui/material";

const StyledRadio = styled(Radio)<RadioProps>(({ theme }) => ({
  '&.MuiRadio-root': {
    padding: 4,
  },
  '& .MuiSvgIcon-root': {
    width: 16,
    height: 16,
  },
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

interface RadioGroupItemProps extends Omit<FormControlLabelProps, 'control'> {
  value: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <MuiRadioGroup
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </MuiRadioGroup>
    );
  }
);

const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <FormControlLabel
        value={value}
        control={<StyledRadio ref={ref} />}
        className={className}
        {...props}
      />
    );
  }
);

RadioGroup.displayName = "RadioGroup";
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };