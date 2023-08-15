import * as React from 'react'
import { cn } from '../../lib/utils'

const TypographyVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const
const TypographyColor = ['primary', 'secondary', 'white', 'blue'] as const

type TypographyProps<T extends React.ElementType> = {
   as?: T
   className?: string
   color?: (typeof TypographyColor)[number]
   variant?: (typeof TypographyVariant)[number]
   children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

type TypographyComponent<T extends React.ElementType = 'p'> = React.FC<
   TypographyProps<T>
>

const Typography: TypographyComponent = React.forwardRef(
   <T extends React.ElementType = 'p'>(
      {
         as,
         variant = 'p',
         color = 'primary',
         className,
         children,
         ...props
      }: TypographyProps<T>,
      ref?: React.ComponentPropsWithRef<T>['ref']
   ): React.ReactElement | null => {
      const Component = as || 'p'
      return (
         <Component
            ref={ref}
            className={cn(
               [
                  variant === 'h1' && ['text-4xl font-bold md:text-5xl'],
                  variant === 'h2' && ['text-3xl font-bold md:text-4xl'],
                  variant === 'h3' && [
                     'text-2xl font-semibold md:text-3xl',
                  ],
                  variant === 'h4' && ['text-xl font-bold md:text-2xl'],
                  variant === 'h5' && ['text-lg font-bold md:text-xl'],
                  variant === 'h6' && ['text-base font-bold md:text-xl'],
                  variant === 'p' && ['text-sm font-normal'],
               ],
               [
                  color === 'primary' && ['text-black'],
                  color === 'secondary' && ['text-black opacity-70'],
                  color === 'white' && ['text-white'],
                  color === 'blue' && ['text-themeBlue'],
               ],
               className
            )}
            {...props}
         >
            {children}
         </Component>
      )
   }
)

Typography.displayName = 'Typography'

export { Typography }
