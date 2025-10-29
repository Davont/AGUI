import * as React from "react"
import { cn } from "@/lib/utils"
import type { TextProps, TitleProps, CaptionProps } from "@/types/ui"

// Text 组件
export const Text: React.FC<TextProps> = ({ 
  value, 
  size = "md", 
  weight = "normal", 
  color, 
  italic, 
  className,
  width,
}) => {
  const sizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  }

  const weightMap = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  }

  const colorMap = {
    primary: "text-foreground",
    secondary: "text-muted-foreground",
    tertiary: "text-muted-foreground/60"
  }

  const colorClass = color && colorMap[color as keyof typeof colorMap] 
    ? colorMap[color as keyof typeof colorMap] 
    : undefined

  const computedStyle: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    color: color && !colorMap[color as keyof typeof colorMap] ? color : undefined,
  }

  return (
    <span
      className={cn(
        sizeMap[size],
        weightMap[weight],
        colorClass,
        italic && "italic",
        className
      )}
      style={computedStyle}
    >
      {value}
    </span>
  )
}
Text.displayName = "Text"

// Title 组件
export const Title: React.FC<TitleProps> = ({ 
  value, 
  size = "xl", 
  weight = "semibold",
  color,
  className 
}) => {
  const sizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl"
  }

  const weightMap = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  }

  const colorMap = {
    primary: "text-foreground",
    secondary: "text-muted-foreground"
  }

  const colorClass = color && colorMap[color as keyof typeof colorMap]
    ? colorMap[color as keyof typeof colorMap]
    : undefined
  
  const computedStyle: React.CSSProperties = {
    color: color && !colorMap[color as keyof typeof colorMap] ? color : undefined,
  }

  return (
    <h2
      className={cn(
        sizeMap[size],
        weightMap[weight],
        colorClass,
        className
      )}
      style={computedStyle}
    >
      {value}
    </h2>
  )
}
Title.displayName = "Title"

// Caption 组件
export const Caption: React.FC<CaptionProps> = ({ 
  value, 
  size = "sm",
  color = "secondary",
  weight = "normal",
  className 
}) => {
  const sizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }

  const weightMap = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  }

  const colorMap = {
    primary: "text-foreground",
    secondary: "text-muted-foreground",
    tertiary: "text-muted-foreground/60"
  }

  const colorClass = colorMap[color as keyof typeof colorMap] || undefined
  
  const computedStyle: React.CSSProperties = {
    color: color && !colorMap[color as keyof typeof colorMap] ? color : undefined,
  }

  return (
    <span
      className={cn(
        sizeMap[size],
        weightMap[weight],
        colorClass,
        className
      )}
      style={computedStyle}
    >
      {value}
    </span>
  )
}
Caption.displayName = "Caption"

