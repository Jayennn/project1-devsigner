import Button from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import Typography from "@/components/Atoms/Typography";

const SectionFeedbackSpace = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="max-w-3xl mx-auto">
               <div className="grid gap-6 text-center">
                  <Typography as={"h2"} variant={"h2"} color={"primary"}>
                     Take a tour & try a day of coworking for free
                  </Typography>
                  <Typography className="max-w-lg mx-auto" as={"p"} variant={"p"} color={"secondary"}>
                     We offer offices for lease by the day, by the week, or by the year.
                     Choose from any of our 3000 locations. Get a free quote!
                  </Typography>
               </div>
               <form action="#" className="relative grid gap-4 mt-10">
                  <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0]" />
                  <Input className="bg-[#FFFFFF]" placeholder="First Name" />
                  <Input className="bg-[#FFFFFF]" placeholder="Last Name" />
                  <div className="grid grid-cols-2 gap-4">
                     <Input className="bg-[#FFFFFF]" placeholder="Your Email" />
                     <select className="select border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 rounded-3xl px-7 py-6  text-muted-foreground shadow-sm" name="" id="">
                        <option value="">Select Option</option>
                     </select>
                     {/* <select className="flex h-9  rounded-3xl border border-input px-7 py-6 text-base shadow-sm transition-colors file:border-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-[#FFFFFF] text-muted-foreground" placeholder="Your Email">
                        <option>Select option</option>
                        <option value="2">lorem</option>
                        <option value="3">lorem</option>
                     </select> */}
                  </div>
                  <Input className="bg-[#FFFFFF]" placeholder="Message Email" />
                  <Button type="button" variant={"default"} size={"lg"}>
                     Submit
                  </Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default SectionFeedbackSpace;