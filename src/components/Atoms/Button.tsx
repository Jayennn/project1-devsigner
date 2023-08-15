import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
   "inline-flex items-center justify-center rounded-3xl font-semibold focus:outline-none focus-visible:ring transition-colors duration-75",
   {
      variants: {
         variant: {
            default: "bg-[#0192FE] text-[#FFFFFF] hover:bg-[#0192FE]/90",
            outline: "bg-transparent text-[#0192FE] border border-[#0192FE]"
         },
         size: {
            default: "h-9 px-7 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-12 px-7 py-2"
         }
      },
      defaultVariants: {
         variant: "default",
         size: "default"
      }
   }
);

interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
   VariantProps<typeof buttonVariants > {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, children,...props }, ref) => {
      return (
         <button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         >
            {children}
         </button>
      )
   }
)

Button.displayName = "Button"

export default Button;