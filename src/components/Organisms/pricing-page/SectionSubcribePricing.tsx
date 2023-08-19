import { Input } from "@/components/Atoms/Input"
import Typography from "@/components/Atoms/Typography"

const SectionSubscribePricing = () => {
   return (
      <section className="grid mt-28 place-content-center">
         <div className="container">
            <div className="text-left md:text-center">
               <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                  We enable people to work where they want, when they want and how they want
               </Typography>
               <Typography className="max-w-2xl mx-auto mt-6 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                  We offer offices for lease by the day, by the week, or by the year.
                  Choose from any of our 3000 locations. Get a free quote!
               </Typography>
            </div>
            <div className="grid max-w-sm gap-4 mx-auto mt-10">
               <Input placeholder="Enter your email" button={true} />
               <Typography className="text-base italic text-center" as={"p"} variant={"p"} color={"secondary"}>
                  No worries, we don’t do spam!
               </Typography>
            </div>
         </div>
      </section>
   )
}

export default SectionSubscribePricing