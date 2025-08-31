import React, { createContext, useContext, useState, forwardRef } from "react";
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from "./tabs.types";
import { cn } from "@workspace/ui/lib/utils";
import { tabsListVariants, tabsTriggerVariants } from "./tabs.utils";

// Simple context for tabs state
const TabsContext = createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const useTabsContext = () => {
  const context = useContext(TabsContext);
  return context;
};

// Main Tabs component
const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ 
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props 
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  
  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = "Tabs";

// TabsList component
const TabsList = forwardRef<HTMLDivElement, TabsListProps>(({
  variant,
  size,
  shape,
  className,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        tabsListVariants({ variant, size, shape }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

TabsList.displayName = "TabsList";

// TabsTrigger component
const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(({
  value: triggerValue,
  variant,
  size,
  shape,
  className,
  children,
  disabled,
  ...props
}, ref) => {
  const { value, onValueChange } = useTabsContext();
  
  const isActive = value === triggerValue;

  const handleClick = () => {
    if (!disabled) {
      onValueChange?.(triggerValue);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      className={cn(
        tabsTriggerVariants({ variant, size, shape }),
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
});

TabsTrigger.displayName = "TabsTrigger";

// TabsContent component
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({
  value: contentValue,
  className,
  children,
  ...props
}, ref) => {
  const { value } = useTabsContext();
  
  const isActive = value === contentValue;
  
  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={ref}
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };