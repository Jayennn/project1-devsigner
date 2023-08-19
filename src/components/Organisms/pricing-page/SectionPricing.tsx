import Button from "@/components/Atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/Atoms/Card";
import Typography from "@/components/Atoms/Typography";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import { GOLD_PLANS, SILVER_PLANS } from "@/types/data";
import logo1 from "@/assets/price/logo1.png";
import logo2 from "@/assets/price/logo2.png";
import logo3 from "@/assets/price/logo3.png";

const SectionPricing = () => {
   return (
      <section className="mt-28">
         <div className="container">
            <div className="grid place-content-center">
               <div className="flex items-center justify-end bg-[#C9E8FF] rounded-[28px] px-1 py-1">
                  <Button className="bg-[#FFFFFF] border-none" variant="outline" size="lg">
                     Monthly
                  </Button>
                  <Button className="text-base font-normal text-black border-none" variant="outline" size="lg">
                     Annual (save 15%)
                  </Button>
               </div>
            </div>
            <div className="relative grid grid-cols-1 gap-4 mt-10 justify-items-center md:gap-0 md:grid-cols-3">
               <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0] " />
               <Card className="max-w-xs h-fit">
                  <CardHeader className="grid gap-3">
                     <img className="max-w-[2rem]" src={logo1} alt="logo-1" />
                     <Typography className="text-base" as="p" variant="p" color="primary">
                        Silver
                     </Typography>
                     <Typography as="h3" variant="h3" color="primary">
                        $399/mth
                     </Typography>
                     <Typography as="p" variant="p" color="secondary">
                        Pay one simple price for everything related to your workspace.
                     </Typography>
                     <hr />
                  </CardHeader>
                  <CardContent className="grid gap-5">
                     {SILVER_PLANS.map(({ status, text }) => (
                        <span key={text} className="flex items-center gap-3">
                           <ChecklistIcon stroke={status ? "#5FBE51" : "#E2E2E2"} />
                           <Typography as="p" variant="p" color="secondary">
                              {text}
                           </Typography>
                        </span>
                     ))}
                     <Button variant="default" size="lg">
                        Get Started
                     </Button>
                  </CardContent>
               </Card>
               <Card className="max-w-xs border border-themeBlue h-fit">
                  <CardHeader className="grid gap-3">
                     <img className="max-w-[2rem]" src={logo2} alt="logo-3" />
                     <Typography className="text-base" as="p" variant="p" color="primary">
                        Gold
                     </Typography>
                     <Typography as="h3" variant="h3" color="primary">
                        $599/mth
                     </Typography>
                     <Typography as="p" variant="p" color="secondary">
                        Pay one simple price for everything related to your workspace.
                     </Typography>
                     <hr />
                  </CardHeader>
                  <CardContent className="grid gap-5">
                     {GOLD_PLANS.map(({ status, text }) => (
                        <span key={text} className="flex items-center gap-3">
                           <ChecklistIcon stroke={status ? "#5FBE51" : "#E2E2E2"} />
                           <Typography as="p" variant="p" color="secondary">
                              {text}
                           </Typography>
                        </span>
                     ))}
                     <Button variant="default" size="lg">
                        Get Started
                     </Button>
                  </CardContent>
               </Card>
               <Card className="max-w-xs h-fit">
                  <CardHeader className="grid gap-3">
                     <img className="max-w-[2rem]" src={logo3} alt="logo-3" />
                     <Typography className="text-base" as="p" variant="p" color="primary">
                        Platinum
                     </Typography>
                     <Typography as="h3" variant="h3" color="primary">
                        $999
                     </Typography>
                     <Typography as="p" variant="p" color="secondary">
                        Pay one simple price for everything related to your workspace.
                     </Typography>
                     <hr />
                  </CardHeader>
                  <CardContent className="grid gap-5">
                     {SILVER_PLANS.map(({ text }) => (
                        <span key={text} className="flex items-center gap-3">
                           <ChecklistIcon stroke="#5FBE51" />
                           <Typography as="p" variant="p" color="secondary">
                              {text}
                           </Typography>
                        </span>
                     ))}
                     <Button variant="default" size="lg">
                        Get Started
                     </Button>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
   )
}

export default SectionPricing;