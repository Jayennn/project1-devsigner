import Button from "@/components/Atoms/Button";
import { Input } from "@/components/Atoms/Input";
import Typography from "@/components/Atoms/Typography";

const SectionFeedbackSpace = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="bg-[#0192FE99]/10 rounded-xl grid gap-10 justify-items-center px-4 py-12 md:px-20 md:py-24">
               <Typography className="text-3xl leading-tight text-center" as={"h1"} variant={"h1"} color={"primary"}>
                  One of our workspace experts will reach out to you based on your communication preferences.
               </Typography>
               <div className="md:w-fit rounded-xl bg-[#FFFFFF]">
                  <div className="grid max-w-3xl gap-8 px-4 py-10 md:px-16 md:py-20 mx-auto">
                     <div className="grid gap-8 text-center">
                        <Typography as={"h2"} variant={"h2"} color={"primary"}>
                           We'd love to hear from you
                        </Typography>
                        <Typography className="text-center" as={"p"} variant={"p"} color={"secondary"}>
                           To book a complimentary private day office or desk, simply complete the form below.
                        </Typography>
                     </div>
                     <form className="grid gap-6" action="">
                        <Input placeholder="Enter your name" />
                        <Input placeholder="Enter your email" />
                        <Input placeholder="Message" />
                        <Button variant={"default"} size={"lg"}>
                           Submit
                        </Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionFeedbackSpace;