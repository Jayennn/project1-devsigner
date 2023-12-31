import * as React from "react"

import { cn } from "../../lib/utils"
import Button from "./Button"

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   button?: boolean | string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, button, ...props }, ref) => {
      return (
         <>
            {!button ? (
               <input
                  type={type}
                  className={cn(
                     "flex h-9 w-full rounded-3xl border border-input bg-transparent px-7 py-6 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#C1C1C1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                     className
                  )}
                  ref={ref}
                  {...props}
               />
            ) : (
                  <div className="flex items-center justify-between gap-2 h-9 w-full bg-white rounded-full border border-input 
                  pl-7 pr-1 py-7 text-base shadow-sm transition-colors">
                  <input
                     type={type}
                        className="w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none border-none"
                     ref={ref}
                     {...props}
                     />
                     <Button type="submit" variant={"default"} size={"lg"}>
                        Submit
                     </Button>
               </div>
            )}
         </>
      )
   }
)
Input.displayName = "Input"

export { Input }
