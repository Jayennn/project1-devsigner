import Typography from "@/components/Atoms/Typography";

const SectionHeroPricing = () => {
   return (
      <section className="grid place-content-center">
         <div className="container">
            <div className="max-w-4xl text-left md:text-center">
               <Typography as={"h1"} variant={"h1"} color={"primary"}>
                  Discover flexible spaces and solutions to your business
               </Typography>
               <Typography className="mt-2 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                  For companies of all sizes, we provide the global scale and flexibility to help your business <br /> adapt to uncertainty. Find the space that's right for you.
               </Typography>
            </div>
         </div>
      </section>
   )
}

export default SectionHeroPricing;