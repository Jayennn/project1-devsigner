import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";
import { useEffect, useRef } from "react";
type AnimatedPropsType = {
   className?: string,
   word: string,
   justify?: "start" | "center" | "end"
}

const AnimatedText = ({ word, className, justify = "start"}: AnimatedPropsType) => {
   const words = word?.split(" ");
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true })

   const mainControls = useAnimation();

   useEffect(() => {
      if (isInView) {
         mainControls.start("visible")
      }

      return () => {
         mainControls.stop()
      }
   }, [isInView])

   const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
         opacity: 1,
         transition: {
            staggerChildren: 0.12,
            delayChildren: 0.04 * i
         },
      }),
   };

   const child: Variants = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
         },
      },
      hidden: {
         opacity: 0,
         y: 20,
         transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
         }
      }
   };

   return (
      <motion.div
         ref={ref}
         variants={container}
         className={`relative flex pb-2 flex-wrap overflow-hidden justify-${justify}`}
         initial="hidden"
         animate={mainControls}
      >
         {words.map((word, index) => (
            <motion.span
               variants={child}
               className={cn(className)}
               key={index}
               style={{ marginRight: "5px" }}>
               {word}
            </motion.span>
         ))}
      </motion.div>
   )
}

export default AnimatedText;