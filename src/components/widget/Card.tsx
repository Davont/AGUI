import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
// import { Button } from "./Button" // No longer needed
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import type { CardProps, ActionConfig } from "@/types/card" 

// --- Helper for Button Styles ---
// Re-implementing the button logic directly inside Card's scope
const getButtonClasses = (
  variant: "default" | "ghost" = "default",
  size: "default" = "default"
) => {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
  };
  
  return cn(base, variants[variant], sizes[size]);
};

const Card: React.FC<CardProps> = ({
  children,
  asForm = false,
  size = "sm",
  padding = 4,
  background = "bg-card", // Defaulting to a theme color from our CSS vars
  collapsed = false,
  confirm,
  cancel,
  status,
  theme,
  className,
  style,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  const sizeMap = {
    sm: "w-full max-w-[360px]",
    md: "w-full max-w-[440px]",
    lg: "w-full max-w-[560px]",
    full: "w-full",
  }

  // A simple background handler. A real implementation would need a robust system
  // to parse tokens like 'surface-secondary' or 'red-100'.
  // This version prioritizes direct CSS values and falls back to theme colors.
  const backgroundStyle = typeof background === 'string' && !background.startsWith('bg-')
    ? { background: background }
    : {}
  
  const backgroundClass = typeof background === 'string' && background.startsWith('bg-')
    ? background
    : 'bg-card'

  // Handle padding prop
  const getPaddingStyles = (): React.CSSProperties => {
    if (typeof padding === "number") {
      return { padding: `${padding * 0.25}rem` }
    }
    if (typeof padding === "string") {
      return { padding }
    }
    if (typeof padding === "object" && padding !== null) {
      return {
        paddingTop: padding.top ? `${padding.top * 0.25}rem` : undefined,
        paddingRight: padding.right ? `${padding.right * 0.25}rem` : undefined,
        paddingBottom: padding.bottom ? `${padding.bottom * 0.25}rem` : undefined,
        paddingLeft: padding.left ? `${padding.left * 0.25}rem` : undefined,
      }
    }
    return {}
  }

  const RootComponent = asForm ? "form" : "div"
  const hasFooter = confirm || cancel

  const handleActionClick = (action: ActionConfig | undefined) => {
    if (!action) return
    // In a real app, this would dispatch the action.
    console.log("Action triggered:", action)
  }

  return (
    <RootComponent
      className={cn(
        "rounded-lg border text-card-foreground shadow-sm flex flex-col",
        sizeMap[size],
        backgroundClass,
        theme, // Applies 'light' or 'dark' class for theme scoping
        className
      )}
      style={{ ...backgroundStyle, ...style }}
    >
      {/* Optional Status Header */}
      {status && (
        <div className="px-4 py-2 border-b">
          <span className="text-xs font-semibold">{status.label}</span>
        </div>
      )}

      {/* Card Body */}
      {!isCollapsed && (
        <div className="flex-grow" style={getPaddingStyles()}>
          {children}
        </div>
      )}

      {/* Card Footer with actions */}
      {hasFooter && !isCollapsed && (
        <div className="flex justify-end items-center gap-2 p-4 border-t bg-muted/50">
          {cancel && (
            <button
              type="button"
              className={getButtonClasses("ghost")}
              onClick={() => handleActionClick(cancel.action)}
            >
              {cancel.label}
            </button>
          )}
          {confirm && (
            <button
              type={asForm ? "submit" : "button"}
              className={getButtonClasses("default")}
              onClick={() => handleActionClick(confirm.action)}
            >
              {confirm.label}
            </button>
          )}
        </div>
      )}

      {/* Collapse Toggle */}
      {!!collapsed && (
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full text-center py-2 text-xs text-muted-foreground hover:bg-muted/50 border-t"
        >
          {isCollapsed ? (
             <div className="flex items-center justify-center gap-1">
                <ChevronDown size={14} /> Show content
             </div>
          ) : (
             <div className="flex items-center justify-center gap-1">
                <ChevronUp size={14} /> Hide content
             </div>
          )}
        </button>
      )}
    </RootComponent>
  )
}

export { Card }

