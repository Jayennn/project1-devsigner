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

type TypographyComponent = <T extends React.ElementType = 'p'>(
   props: TypographyProps<T>
) => React.ReactElement | null;


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore aman aja bang

const Typography: TypographyComponent = React.forwardRef(
   <T extends React.ElementType = "p">(
      {
         as,
         variant = "p",
         color = "primary",
         className,
         children,
         ...props
      }: TypographyProps<T>,
      ref?: React.ComponentPropsWithRef<T>["ref"],
   ): React.ReactElement | null => {
      const Component = as || "p";
      return (
         <Component
            ref={ref}
            className={cn(
               [
                  variant === "h1" && ["text-4xl md:leading-extraLoose md:text-5xl font-bold"],
                  variant === "h2" && ["leading-5 text-3xl md:text-4xl font-bold"],
                  variant === "h3" && ["leading-4 text-2xl md:text-3xl font-bold"],
                  variant === "h4" && ["leading-3 text-xl md:text-2xl font-bold"],
                  variant === "h5" && ["text-lg md:text-xl font-bold"],
                  variant === "h6" && ["text-base md:text-lg font-bold"],
                  variant === "p" && ["text-sm md:text-base font-normal"],
               ],
               [
                  color === "primary" && ["text-[#2E3135]"],
                  color === "secondary" && ["text-[#2E3135] opacity-70"],
                  color === "white" && ["text-white"],
                  color === "blue" && ["text-themeBlue"]
               ],
               className,
            )}
            {...props}
         >
            {children}
         </Component>
      );
   },
);


export default Typography;
