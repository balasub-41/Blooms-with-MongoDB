import * as React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { cn } from "@/lib/utils";

// Styled MUI components to match the original styling
const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  border: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
  '&.MuiAccordion-root': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: 0,
  '& .MuiAccordionSummary-content': {
    margin: '16px 0',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transition: 'transform 0.2s',
    '&.Mui-expanded': {
      transform: 'rotate(180deg)',
    },
  },
}));

const StyledAccordionDetails = styled(MuiAccordionDetails)({
  padding: '0 0 16px 0',
});

interface AccordionProps extends React.ComponentProps<typeof StyledAccordion> {
  type?: string;
  className?: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, ...props }, ref) => (
    <StyledAccordion ref={ref} className={cn(className)} {...props}>
      {children}
    </StyledAccordion>
  )
);
Accordion.displayName = "Accordion";

interface AccordionTriggerProps extends React.ComponentProps<typeof StyledAccordionSummary> {
  className?: string;
}

const AccordionTrigger = React.forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <StyledAccordionSummary
      ref={ref}
      expandIcon={<ExpandMore />}
      className={cn(
        "flex-1 font-medium transition-all hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </StyledAccordionSummary>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.ComponentProps<typeof StyledAccordionDetails> {
  className?: string;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <StyledAccordionDetails
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    >
      {children}
    </StyledAccordionDetails>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionTrigger, AccordionContent };
