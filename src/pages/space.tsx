import { Input } from "@/components/Atoms/Input";
import Typography from "@/components/Atoms/Typography";
import GeneralLayout from "@/components/Templates/GeneralLayout";
import Button from "@/components/Atoms/Button"; 
import companies from "@/assets/contact/companies.png";



const SpacePage = () => {
    return (
        <>
            <GeneralLayout>
                {/* <section className="grid place-content-center">
                    <div className="container">
                        <div className="flex flex-col-reverse items-center justify-between md:flex-row gap-11">
                            <div className="grid max-w-lg gap-8 text-left">
                                <Typography as={"h1"} variant={"h1"} color={"primary"}>
                                    A creative coworking space in New York
                                </Typography>
                                <Typography className="font-normal" as={"h6"} variant={"h6"} color={"secondary"}>
                                    You can book personal office space across the country by the day, hour or month.
                                </Typography>
                                <Input button="true" placeholder="Enter your email"/>
                            </div>
                            <div className="max-w-xl">
                                <img className="rounded-2xl" src={space_hero} alt="hero-space" />
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="grid mt-28 place-content-center">
                    <div className="container lg:px-32">
                        <div className="grid max-w-4xl gap-4 mx-auto text-left md:text-center">
                            <Typography as={"h1"} variant={"h1"} color={"primary"}>
                                We've helped thousands of
                                fast-growing startups and teams
                            </Typography>
                            <Typography className="font-normal" as={"h6"}  variant={"h6"} color={"secondary"}>
                                Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 gap-12 py-16 max-w-8xl lg:grid-cols-3 ">
                            {serviceOffices.map(({ title, subtitle, imageUrl }) => (
                                <ServiceOfficeCard
                                    key={title}
                                    title={title}
                                    subtitle={subtitle}
                                    imageUrl={imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                </section> */}
                {/* <section className="mt-28">
                    <div className="container">
                        <div className="bg-[#0192FE99]/10 rounded-xl p-16 flex flex-col md:flex-row items-center justify-between">
                            <div className="grid max-w-lg gap-8">
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
                </section> */}
                {/* <section className="mt-28">
                    <div className="container grid">
                        <div className="grid">
                            <Typography className="text-base uppercase md:text-lg" as={"h1"} variant={"h1"} color={"blue"}>
                                Contact us
                            </Typography>
                            <div className="flex items-center justify-between">
                                <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                                    What Our Members Say
                                </Typography>
                                <span className="inline-flex gap-2">
                                <ReviewPrevIcon />
                                <ReviewNextIcon />
                                </span>
                            </div>
                        </div>
                        <div className="relative flex py-8 overflow-hidden">
                            <Card className="max-w-md">
                                <CardContent className="grid gap-6 px-12 py-8">
                                    <StarsIcon />
                                    <Typography as={"p"}>
                                        Futurspace is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations
                                    </Typography>
                                    <div className="flex items-center gap-4">
                                        <img className="w-12 h-12" src={person1} alt="person-review" />
                                        <div>
                                            <Typography className="font-bold"  as={"p"} variant={"p"} color={"primary"}>
                                                Del Gibbs
                                            </Typography>
                                            <Typography className="font-normal"  as={"p"} variant={"p"} color={"primary"}>
                                                VP, Globee Softech
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section> */}
                <section className="mt-28">
                    <div className="container">
                        <div className="bg-[#0192FE99]/10 rounded-xl grid gap-10 justify-items-center px-20 py-24">
                                <Typography className="leading-tight text-center" as={"h1"} variant={"h1"} color={"primary"}>
                                    One of our workspace experts will reach out to you based on your communication preferences.
                                </Typography>
                            <div className="w-fit rounded-xl bg-[#FFFFFF]">
                                <div className="grid max-w-3xl gap-8 px-16 py-20 mx-auto">
                                    <div className="grid gap-8 text-center">
                                        <Typography as={"h2"} variant={"h2"} color={"primary"}>
                                            We'd love to hear from you
                                        </Typography>
                                        <Typography className="text-center" as={"p"} variant={"p"} color={"secondary"}>
                                            To book a complimentary private day office or desk, <br />
                                            simply complete the form below.
                                        </Typography>
                                    </div>
                                    <form className="grid gap-6" action="">
                                        <Input placeholder="Enter your name"/>
                                        <Input placeholder="Enter your email"/>
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
                <section className="mt-28">
                    <div className="container grid gap-4 place-content-center">
                        <Typography className="font-bold text-left md:text-center md:text-xl" as={"h1"} variant={"h1"} color={"secondary"}>
                            Trusted by top companies and startups around the world
                        </Typography>
                        <div className="max-w-4xl">
                            <img src={companies} alt="companies" />
                        </div>
                    </div>
                </section>
            </GeneralLayout>
        </>
    )
}

export default SpacePage;