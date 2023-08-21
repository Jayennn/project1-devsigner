"use client"
import { cn } from "@/lib/utils";
import { createContext, useContext, useState, Children } from 'react';
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { AccordionMinusIcon, AccordionPlusIcon } from "@/components/icons/index"
type AccordionType = unknown & MotionProps & React.ComponentPropsWithoutRef<"div">

type AccordionContextType = {
   isActive: boolean;
   index: number;
   handleOnChangeIndex: (index: number) => void
}

type AccordionWrapper = {
   children: React.ReactNode;
   multiple?: boolean;
   defaultIndex?: number;
}

const AccordionContext = createContext({})
const useAccordion = () => useContext(AccordionContext) as AccordionContextType

const Accordion = ({ children, multiple, defaultIndex }: AccordionWrapper) => {
   const [activeIndex, setActiveIndex] = useState<number | number[]>(
      multiple ? (defaultIndex !== undefined ? [defaultIndex] : []) : defaultIndex || -1
   )

   const handleOnChangeIndex = (index: number) => {
      setActiveIndex((currentActiveIndex) => {
         if (!multiple) {
            return index === activeIndex ? -1 : index;
         }
         if (Array.isArray(currentActiveIndex)) {
            if (currentActiveIndex.includes(index)) {
               return currentActiveIndex.filter((i) => i !== index)
            }
            return [...currentActiveIndex, index]
         }

         return [index];
      })
   }

   return Children.map(children, (child, index) => {
      const isActive =
         multiple && Array.isArray(activeIndex)
            ? activeIndex.includes(index)
            : activeIndex === index;

      return (
         <AccordionContext.Provider value={{ isActive, index, handleOnChangeIndex }}>
            {child}
         </AccordionContext.Provider>
      )
   })
}


const AccordionItem = ({ className, children, ...props }: AccordionType) => {
   return <div className={cn(className)} {...props} >{children}</div>
}

const AccordionHeader = ({ children, className, ...props }: AccordionType) => {
   const { isActive, index, handleOnChangeIndex } = useAccordion()

   return (
      <motion.div
         onClick={() => handleOnChangeIndex(index)}
         className={cn(className)} {...props}>
         {children}
         {!isActive ? (
            <AccordionPlusIcon />
         ) : (
            <AccordionMinusIcon/>
         )}
      </motion.div>
   )
}

const AccordionPanel = ({ children }: { children: React.ReactNode }) => {
   const { isActive } = useAccordion();

   return (
      <AnimatePresence initial={false}>
         {isActive && (
            <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: "auto", opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export {
   Accordion,
   AccordionItem,
   AccordionHeader,
   AccordionPanel,
}

// className = {`${isActive ? "rotate-90" : "rotate-0"} transition-transform`} 