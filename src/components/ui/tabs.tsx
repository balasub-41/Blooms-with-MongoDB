import * as React from "react"
import { Tabs as MuiTabs, Tab as MuiTab, Box, styled } from "@mui/material"
import { cn } from "@/lib/utils"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  className?: string
}

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  minHeight: '40px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'var(--muted)',
  padding: '4px',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))

const StyledTab = styled(MuiTab)(({ theme }) => ({
  minHeight: '32px',
  padding: '6px 12px',
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  color: 'var(--muted-foreground)',
  '&.Mui-selected': {
    color: 'var(--foreground)',
    backgroundColor: 'var(--background)',
    boxShadow: theme.shadows[1],
  },
}))

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={cn(
        "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

const Tabs = StyledTabs
const TabsList = StyledTabs
const TabsTrigger = StyledTab
const TabsContent = TabPanel

export { Tabs, TabsList, TabsTrigger, TabsContent }
