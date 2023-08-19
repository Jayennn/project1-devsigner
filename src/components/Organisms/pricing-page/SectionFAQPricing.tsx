import Typography from "@/components/Atoms/Typography"
import { AccordionPlusIcon } from "@/components/icons"

const SectionFAQPricing = () => {
   return (
      <section className="grid mt-28 place-content-center">
         <div className="container">
            <div className="text-left md:text-center">
               <Typography className="md:leading-tight" as={'h1'} variant={"h1"} color={"primary"}>
                  Frequently asked questions about cowoking
               </Typography>
               <Typography className="mt-2 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo at sit mi sed <br /> gravida et imperdiet sagittis euismod tortor fringilla amet.
               </Typography>
            </div>
            <div className="relative grid mt-10 place-content-center ">
               <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0] " />
               <div className="grid max-w-2xl gap-5">
                  <div className="flex items-center justify-between gap-8 px-6 bg-white rounded-xl py-7">
                     <Typography as={"h6"} variant={"h6"} color={"primary"}>
                        What are the benefits of joining the Futurspace network?
                     </Typography>
                     <AccordionPlusIcon />
                  </div>
                  <div className="flex items-center justify-between gap-8 px-6 bg-white rounded-xl py-7">
                     <Typography as={"h6"} variant={"h6"} color={"primary"}>
                        What should I expect from the screening process?
                     </Typography>
                     <AccordionPlusIcon />
                  </div>
                  <div className="flex items-center justify-between gap-8 px-6 bg-white rounded-xl py-7">
                     <Typography as={"h6"} variant={"h6"} color={"primary"}>
                        Is Telephone service available?
                     </Typography>
                     <AccordionPlusIcon />
                  </div>
                  <div className="flex items-center justify-between gap-8 px-6 bg-white rounded-xl py-7">
                     <span>
                        <Typography as={"h6"} variant={"h6"} color={"primary"}>
                           Is the money refundable if I am unable to register?
                        </Typography>
                        <Typography className="max-w-sm font-light" as={"p"} variant={"p"} color={"primary"}>
                           Lorem ipsum dolor sit amet consectetur adipiscing elit
                           elementum velit nunc tortor pulvinar ornare
                        </Typography>
                     </span>
                     <AccordionPlusIcon />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionFAQPricing;