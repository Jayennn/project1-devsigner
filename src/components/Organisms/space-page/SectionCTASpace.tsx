import Button from "@/components/Atoms/Button";
import Typography from "@/components/Atoms/Typography";
import workspace from "@/assets/hero/hero_cta_about.png"

const SectionCTASpace = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="bg-[#0192FE99]/10 rounded-xl p-8 md:p-16 flex flex-col-reverse lg:flex-row items-center justify-between">
               <div className="mt-8 md:mt-0 grid max-w-lg gap-8">
                  <Typography className="md:leading-tight" as={"h2"} variant={"h2"} color={"primary"}>
                     Stay productive with modern workspace, private office, and coworking solutions
                  </Typography>
                  <Typography className="font-normal" as={"h6"} variant={"h6"} color={"secondary"}>
                     Workspaces that suit your business. We have professional and inspiring work environments to suit businesses of all sizes and budget.
                  </Typography>
                  <Button className="w-fit" variant={"default"} size={"lg"}>
                     Get Started
                  </Button>
               </div>
               <div className="max-w-sm">
                  <img className="w-80" src={workspace} alt="workspace" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionCTASpace;