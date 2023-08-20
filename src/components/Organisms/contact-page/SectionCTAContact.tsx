import Button from "@/components/Atoms/Button";
import Typography from "@/components/Atoms/Typography";
import person from "@/assets/contact/person.png";

const SectionCTAContact = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="bg-[#0192FE99]/10 rounded-xl px-10 py-8 flex flex-col md:flex-row items-center justify-between">
               <div className="max-w-md">
                  <img src={person} alt="person" />
               </div>
               <div className="grid max-w-lg gap-4">
                  <Typography className="md:leading-tight" as={"h2"} variant={"h2"} color={"primary"}>
                     Coworking, Private <br />
                     Offices and More
                  </Typography>
                  <Typography as={"p"} variant={"p"} color={"secondary"}>
                     Your membership at is all-inclusive, providing amenities designed to allow you to focus on your business instead of logistics.
                  </Typography>
                  <div className="flex gap-3 mt-6">
                     <Button variant={"default"} size={"lg"}>
                        Discover now
                     </Button>
                     <Button variant={"outline"} size={"lg"}>
                        Book a tour
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionCTAContact;