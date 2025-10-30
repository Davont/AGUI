import * as React from 'react'
import { cn } from '@/lib/utils'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  flush?: boolean
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, height, fit, style, flush, ...props }, ref) => {
    const fitClass = fit ? `object-${fit}` : ''

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(
          'w-full', // Removed rounded-md for more control via props
          fitClass,
          !flush && 'rounded-md', // Apply rounding only if flush is not true
          className
        )}
        style={{
          height: height ? `${height}px` : 'auto',
          ...style,
        }}
        {...props}
      />
    )
  }
)

Image.displayName = 'Image'

export { Image }
