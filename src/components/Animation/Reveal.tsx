import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface RevealProps {
   children: React.ReactNode,
   width?: "fit-content" | "100%"
}

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const mainControls = useAnimation();

   useEffect(() => {

      if (isInView) {
         mainControls.start("visible");
      }
   }, [isInView])

   return (
      <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
         <motion.div
            variants={{
               hidden: {
                  opacity: 0,
                  x: -75,
               },
               visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                     type: "spring",
                     stiffness: 100,
                  }
               }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
         >
            {children}
         </motion.div>
      </div>
   )
}

export default Reveal;