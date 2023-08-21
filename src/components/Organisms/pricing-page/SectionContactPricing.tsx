import Button from "@/components/Atoms/Button";
import Typography from "@/components/Atoms/Typography";
import person from "@/assets/price/person.png";

const SectionContactPricing = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="bg-[#0192FE99]/10 rounded-xl px-10 py-8 flex flex-col-reverse md:flex-row items-center justify-between">
               <div className="grid max-w-xl gap-8 mt-10 md:mt-0 md:ml-10">
                  <Typography className="md:leading-tight" as={"h2"} variant={"h2"} color={"primary"}>
                     Confused about which plan would be most suitable for me?
                  </Typography>
                  <Button type="button" className="w-fit" variant={"default"} size={"lg"}>
                     Contact us
                  </Button>
               </div>
               <div className="max-w-xs">
                  <img src={person} alt="person" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionContactPricing;