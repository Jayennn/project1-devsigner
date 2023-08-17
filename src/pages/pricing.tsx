import Button from "@/components/Atoms/Button";
import { Card, CardContent, CardHeader } from "@/components/Atoms/Card";
import Typography from "@/components/Atoms/Typography"
import logo1 from "@/assets/price/logo1.png";
import logo2 from "@/assets/price/logo2.png";
import logo3 from "@/assets/price/logo3.png";
import person from "@/assets/price/person.png";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import { GOLD_PLANS, SILVER_PLANS } from "@/types/data";
import GeneralLayout from "@/components/Templates/GeneralLayout";
import { AccordionPlusIcon } from "@/components/icons";
import { Input } from "@/components/Atoms/Input";

const PricingPage = () => {
    return (
        <>
            <GeneralLayout>
                <section className="grid place-content-center">
                    <div className="container">
                        <div className="max-w-4xl text-left md:text-center">
                            <Typography as={"h1"} variant={"h1"} color={"primary"}>
                                Discover flexible spaces and solutions to your business
                            </Typography>
                            <Typography className="mt-2 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
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
                        <div className="mt-10 grid justify-items-center gap-4 md:gap-0 grid-cols-1 md:grid-cols-3">
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
                            <Card className="border border-themeBlue h-fit max-w-xs">
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
                <section className="mt-28 grid place-content-center">
                    <div className="container">
                        <div className="text-left md:text-center">
                            <Typography className="md:leading-tight" as={'h1'} variant={"h1"} color={"primary"}>
                                Frequently asked questions about cowoking
                            </Typography>
                            <Typography className="mt-2 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo at sit mi sed <br /> gravida et imperdiet sagittis euismod tortor fringilla amet.
                            </Typography>
                        </div>
                        <div className="mt-10 grid place-content-center ">
                            <div className="max-w-2xl grid gap-5">
                                <div className="rounded-xl bg-white px-6 py-7 flex items-center justify-between gap-8">
                                    <Typography as={"h6"} variant={"h6"} color={"primary"}>
                                        What are the benefits of joining the Futurspace network?
                                    </Typography>
                                    <AccordionPlusIcon/>
                                </div>
                                <div className="rounded-xl bg-white px-6 py-7 flex items-center justify-between gap-8">
                                    <Typography as={"h6"} variant={"h6"} color={"primary"}>
                                        What should I expect from the screening process?
                                    </Typography>
                                    <AccordionPlusIcon/>
                                </div>
                                <div className="rounded-xl bg-white px-6 py-7 flex items-center justify-between gap-8">
                                    <Typography as={"h6"} variant={"h6"} color={"primary"}>
                                        Is Telephone service available?
                                    </Typography>
                                    <AccordionPlusIcon/>
                                </div>
                                <div className="rounded-xl bg-white px-6 py-7 flex items-center justify-between gap-8">
                                    <span>
                                        <Typography as={"h6"} variant={"h6"} color={"primary"}>
                                            Is the money refundable if I am unable to register?
                                        </Typography>
                                        <Typography className="max-w-sm font-light" as={"p"} variant={"p"} color={"primary"}>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                                            elementum velit nunc tortor pulvinar ornare
                                        </Typography>
                                    </span>
                                    <AccordionPlusIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-28">
                    <div className="container">
                        <div className="bg-[#0192FE99]/10 rounded-xl px-10 py-8 flex flex-col-reverse md:flex-row items-center justify-between">
                            <div className="mt-10 md:mt-0 md:ml-10 grid gap-8 max-w-xl">
                                <Typography className="md:leading-tight" as={"h2"} variant={"h2"} color={"primary"}>
                                    Confused about which plan would be most suitable for me?
                                </Typography>
                                <Button className="w-fit" variant={"default"} size={"lg"}>
                                    Contact us
                                </Button>
                            </div>
                            <div className="max-w-xs">
                                <img src={person} alt="person"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-28 grid place-content-center">
                    <div className="container">
                        <div className="text-left md:text-center">
                            <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                                We enable people to work where they want, when they want and how they want
                            </Typography>
                            <Typography className="max-w-2xl mx-auto mt-6 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                                We offer offices for lease by the day, by the week, or by the year.
                                Choose from any of our 3000 locations. Get a free quote!
                            </Typography>
                        </div>
                        <div className="mt-10 max-w-sm mx-auto grid gap-4">
                            <Input placeholder="Enter your email" button={true}/>
                            <Typography className="text-center italic text-base" as={"p"} variant={"p"} color={"secondary"}>
                                No worries, we don’t do spam!
                            </Typography>
                        </div>
                    </div>
                </section>
            </GeneralLayout>
        </>
    )
}

export default PricingPage;