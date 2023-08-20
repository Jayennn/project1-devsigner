import { Card, CardContent, CardFooter, CardHeader } from "@/components/Atoms/Card";
import Typography from "@/components/Atoms/Typography";
import { MapsIcon } from "@/components/icons/MapIcons";
import { LOCATION_CARDS } from "@/types/data";

const SectionMapContact = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="max-w-6xl mx-auto">
               <MapsIcon />
            </div>
            <div className="relative grid grid-cols-1 gap-4 mt-16 md:gap-0 md:grid-cols-3 place-items-center">
               <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"} />
               {LOCATION_CARDS.map(({ title, description, link, icon }) => (
                  <Card key={title} className="shadow-none w-full md:max-w-xs md:w-[18rem] px-4 py-2">
                     <CardHeader>
                        <Typography as="h6" variant={"h6"} color={"primary"}>
                           {title}
                        </Typography>
                     </CardHeader>
                     <CardContent>
                        <Typography as="p" variant={"p"} color={"primary"}>
                           {description}
                        </Typography>
                     </CardContent>
                     <CardFooter className="flex items-center gap-4">
                        <Typography className="font-semibold" as={"p"} variant={"p"} color={"blue"}>
                           {link}
                        </Typography>
                        {icon}
                     </CardFooter>
                  </Card>
               ))}
         
            </div>
         </div>
      </section>
   )
}

export default SectionMapContact;