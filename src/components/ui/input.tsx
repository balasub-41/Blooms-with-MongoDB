import * as React from "react";
import { cn } from "@/lib/utils";
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define the props for our Input component by extending TextFieldProps
interface InputProps extends Omit<TextFieldProps, 'variant' | 'fullWidth'> {
  // You can add any additional props specific to your Input component here
}

// Define a styled TextField component with proper TypeScript typing
const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    // Apply your custom styles to the outlined input
    borderRadius: '0.375rem', // equivalent to rounded-md
    fontSize: '0.875rem', // equivalent to text-sm
    lineHeight: '1.25rem',
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        boxShadow: '0 0 0 2px var(--ring)',
      },
    },
    '&.Mui-disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  '& .MuiInputBase-input': {
    padding: '0.5rem 0.75rem', // equivalent to px-3 py-2
    height: '2.5rem', // equivalent to h-10
    '&::placeholder': {
      color: theme.palette.text.disabled,
      opacity: 1,
    },
  },
}));

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <StyledTextField
        inputRef={ref}
        type={type}
        variant="outlined"
        fullWidth
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };