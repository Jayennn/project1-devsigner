import { Input } from "@/components/Atoms/Input";
import Typography from "@/components/Atoms/Typography";
import Hero from "@/assets/hero/space_hero.png"

const SectionHeroSpace = () => {
   return (
      <section className="grid place-content-center">
         <div className="container">
            <div className="flex flex-col-reverse items-center justify-between md:flex-row gap-11">
               <div className="grid max-w-lg gap-8 text-left">
                  <Typography as={"h1"} variant={"h1"} color={"primary"}>
                     A creative coworking space in New York
                  </Typography>
                  <Typography className="font-normal" as={"h6"} variant={"h6"} color={"secondary"}>
                     You can book personal office space across the country by the day, hour or month.
                  </Typography>
                  <Input button="true" placeholder="Enter your email" />
               </div>
               <div className="max-w-xl">
                  <img className="rounded-2xl" src={Hero} alt="hero-space" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionHeroSpace;