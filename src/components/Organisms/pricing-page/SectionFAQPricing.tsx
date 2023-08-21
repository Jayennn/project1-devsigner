import AnimatedText from "@/components/Animation/AnimatedText";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@/components/Atoms/Accordion";
import Typography from "@/components/Atoms/Typography"
import { FAQ_PRICING } from "@/types/data"


const SectionFAQPricing = () => {
   return (
      <section className="grid mt-28 place-content-center">
         <div className="container">
            <div className="text-left md:text-center">
               <Typography className="md:leading-tight" as={'div'} variant={"h1"} color={"primary"}>
                  <AnimatedText  justify="center" word="Frequently asked questions about cowoking" />
               </Typography>
               <Typography className="mt-2 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo at sit mi sed <br /> gravida et imperdiet sagittis euismod tortor fringilla amet.
               </Typography>
            </div>
            <div className="relative grid mt-10 place-content-center ">
               <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0] " />
               <div className="grid max-w-2xl gap-5">
                  <Accordion defaultIndex={3}>
                     {FAQ_PRICING.map(({ title, description }) => (
                        <AccordionItem key={title} className="overflow-hidden bg-white rounded-xl">
                           <AccordionHeader className="flex items-center justify-between gap-4 px-6 py-6 ">
                              <Typography as={"h6"} variant={"h6"} color={"primary"}>
                                 {title}
                              </Typography>
                           </AccordionHeader>
                           <AccordionPanel>
                              <div className="px-6 pb-6">
                                 <Typography className="max-w-sm font-light" as={"p"} variant={"p"} color={"primary"}>
                                    {description}
                                 </Typography>
                                 
                              </div>
                           </AccordionPanel>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionFAQPricing;