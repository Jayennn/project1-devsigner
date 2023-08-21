import AnimatedText from "@/components/Animation/AnimatedText";
import Typography from "@/components/Atoms/Typography";

const SectionHeroContact = () => {
   return (
      <section className="grid place-content-center">
         <div className="container">
            <div className="grid gap-4 text-left md:text-center">
               <Typography className="text-base uppercase md:text-lg" as={"h1"} variant={"h1"} color={"blue"}>
                  <AnimatedText justify="center" word="Contact us"/>
               </Typography>
               <Typography className="max-w-4xl mx-auto md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                  <AnimatedText justify="center" word="Our space is more than a shared office. It is a meeting ground."/>
                  {/* Our space is more than a shared office. It is a meeting ground. */}
               </Typography>
               <Typography as={"p"} variant={"p"} color={"primary"}>
                  Find focus and clarity space to do the things you need to do to grow your business in New <br />
                  York. Book by the month, daily or by the hour.
               </Typography>
            </div>
         </div>
      </section>
   )
}

export default SectionHeroContact;