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
                  <Typography as={"p"} variant={"p"} color={"secondary"}>
                     We offer offices for lease by the day, by the week, or by the year. <br />
                     Choose from any of our 3000 locations. Get a free quote!
                  </Typography>
               </div>
               <form action="#" className="relative grid gap-4 mt-10">
                  <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0]" />
                  <Input className="bg-[#FFFFFF]" placeholder="First Name" />
                  <Input className="bg-[#FFFFFF]" placeholder="Last Name" />
                  <div className="grid grid-cols-2 gap-4">
                     <Input className="bg-[#FFFFFF]" placeholder="Your Email" />
                     <Input className="bg-[#FFFFFF]" placeholder="Your Email" />
                  </div>
                  <Input className="bg-[#FFFFFF]" placeholder="Message Email" />
                  <Button variant={"default"} size={"lg"}>
                     Submit
                  </Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default SectionFeedbackSpace;