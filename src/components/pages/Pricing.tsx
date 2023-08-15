import Button from "../Atoms/Button";
import { Card, CardContent, CardHeader } from "../Atoms/Card";
import { Typography } from "../Atoms/Typography";
import logo1 from "../../assets/price-logo/logo1.png";
import logo2 from "../../assets/price-logo/logo2.png";
import logo3 from "../../assets/price-logo/logo3.png";
import ChecklistIcon from "../icons/ChecklistIcon";
import { GOLD_PLANS, SILVER_PLANS } from "./data";

const Pricing = () => {
   return (
      <>
         <main className="py-28">
            <section className="grid place-content-center text-center">
               <div className="container">
                  <div className="max-w-4xl">
                     <Typography className="md:leading-tight" as="h1" variant="h1" color="primary">
                        Discover flexible spaces and solutions to your business
                     </Typography>
                     <Typography className="mt-2" as="p" variant="p" color="secondary">
                        For companies of all sizes, we provide the global scale and flexibility to help your business <br /> adapt to uncertainty. Find the space that's right for you.
                     </Typography>
                  </div>
               </div>
            </section>
            <section className="mt-28">
               <div className="container">
                  <div className="grid place-content-center">
                     <div className="flex items-center justify-end bg-[#C9E8FF] rounded-[28px] px-1 py-1">
                        <Button className="bg-[#FFFFFF] border-none" variant="outline" size="lg">
                           Monthly
                        </Button>
                        <Button className="border-none text-base text-black font-normal" variant="outline" size="lg">
                           Annual (save 15%)
                        </Button>
                     </div>
                  </div>
                  <div className="mt-10 grid justify-items-center grid-cols-3">
                     <Card className="h-fit max-w-xs">
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
                           {SILVER_PLANS.map(({status, text}) => (
                              <span key={text} className="flex items-center gap-3">
                                 <ChecklistIcon stroke={status ? "#5FBE51" : "#E2E2E2"}/> 
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
                     <Card className="h-fit max-w-xs">
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
                           {GOLD_PLANS.map(({status, text}) => (
                              <span key={text} className="flex items-center gap-3">
                                 <ChecklistIcon stroke={status ? "#5FBE51" : "#E2E2E2"}/> 
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
                     <Card className="h-fit max-w-xs">
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
                                 <ChecklistIcon stroke="#5FBE51"/>
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
      </main >
      </>
   )
}

export default Pricing;