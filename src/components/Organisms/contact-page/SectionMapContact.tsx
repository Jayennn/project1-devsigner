import { Card, CardContent, CardFooter, CardHeader } from "@/components/Atoms/Card";
import Typography from "@/components/Atoms/Typography";
import { SmallLocationIcon } from "@/components/icons";
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
               <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0]/60 " />
               {LOCATION_CARDS.map(({ title, description, link }) => (
                  <Card className="w-full md:max-w-xs md:w-[18rem] px-4 py-2">
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
                        <SmallLocationIcon />
                     </CardFooter>
                  </Card>
               ))}
         
            </div>
         </div>
      </section>
   )
}

export default SectionMapContact;