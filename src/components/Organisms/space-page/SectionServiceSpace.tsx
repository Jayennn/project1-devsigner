import Typography from "@/components/Atoms/Typography";
import ServiceOfficeCard from "@/components/Molecules/ServiceOfficeCard";
import { SERVICE_OFFICES } from "@/types/data";

const SectionServiceSpace = () => {
   return (
      <section className="grid mt-28 place-content-center">
         <div className="container lg:px-32">
            <div className="grid max-w-4xl gap-4 mx-auto text-left md:text-center">
               <Typography as={"h1"} variant={"h1"} color={"primary"}>
                  We've helped thousands of
                  fast-growing startups and teams
               </Typography>
               <Typography className="font-normal" as={"h6"} variant={"h6"} color={"secondary"}>
                  Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.
               </Typography>
            </div>
            <div className="grid grid-cols-1 gap-12 py-16 max-w-8xl lg:grid-cols-3 ">
               {SERVICE_OFFICES.map(({ title, subtitle, imageUrl }) => (
                  <ServiceOfficeCard
                     key={title}
                     title={title}
                     subtitle={subtitle}
                     imageUrl={imageUrl}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default SectionServiceSpace;