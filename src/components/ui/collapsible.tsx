import * as React from "react";
import { Collapse, styled } from "@mui/material";

interface CollapsibleProps extends React.ComponentProps<typeof Collapse> {
  children: React.ReactNode;
}

const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ children, ...props }, ref) => (
    <Collapse ref={ref} {...props}>
      {children}
    </Collapse>
  )
);
Collapsible.displayName = "Collapsible";

interface CollapsibleTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CollapsibleTrigger = React.forwardRef<HTMLDivElement, CollapsibleTriggerProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

interface CollapsibleContentProps extends React.ComponentProps<typeof Collapse> {
  children: React.ReactNode;
}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, ...props }, ref) => (
    <Collapse ref={ref} {...props}>
      {children}
    </Collapse>
  )
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
