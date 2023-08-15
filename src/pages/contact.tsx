import { Card, CardContent, CardFooter, CardHeader } from "@/components/Atoms/Card"
import Typography from "@/components/Atoms/Typography"
import GeneralLayout from "@/components/Templates/GeneralLayout"
import { LearnMoreIcon, LocationIcon } from "@/components/icons"
import { MapsIcon } from "@/components/icons/MapIcons"
import person from "@/assets/contact/person.png"
import companies from "@/assets/contact/companies.png"
import Button from "@/components/Atoms/Button"
import { Input } from "@/components/Atoms/Input"

const ContactPage = () => {
    return (
        <>
            <GeneralLayout>
                <section className="grid place-content-center">
                    <div className="container">
                        <div className="text-center grid gap-4">
                            <Typography className="md:text-lg uppercase" as={"h1"} variant={"h1"} color={"blue"}>
                                Contact us
                            </Typography>
                            <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                                Our space is more than a shared office. <br /> It is a meeting ground.
                            </Typography>
                            <Typography as={"p"} variant={"p"} color={"primary"}>
                                Find focus and clarity space to do the things you need to do to grow your business in New <br />
                                York. Book by the month, daily or by the hour.
                            </Typography>
                        </div>
                    </div>
                </section>
                <section className="mt-28">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <MapsIcon />
                        </div>
                        <div className="mt-16 grid grid-cols-3 place-items-center">
                            <Card className="max-w-xs w-[18rem]  px-4 py-2">
                                <CardHeader>
                                    <Typography as="h6" variant={"h6"} color={"primary"}>
                                        Global Locations
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <Typography as="p" variant={"p"} color={"primary"}>
                                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                                    </Typography>
                                </CardContent>
                                <CardFooter className="flex items-center gap-4">
                                    <Typography className="font-semibold" as={"p"} variant={"p"} color={"blue"}>
                                        All locations
                                    </Typography>
                                    <LocationIcon/>
                                </CardFooter>
                            </Card>
                            <Card className="max-w-xs w-[18rem]  px-4 py-2">
                                <CardHeader>
                                    <Typography as="h6" variant={"h6"} color={"primary"}>
                                        Global Locations
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <Typography as="p" variant={"p"} color={"primary"}>
                                        (252) 555-0126 <br />
                                        (808) 555-0111
                                    </Typography>
                                </CardContent>
                                <CardFooter className="flex items-center gap-4">
                                    <Typography className="font-semibold" as={"p"} variant={"p"} color={"blue"}>
                                        Learn more
                                    </Typography>
                                    <LearnMoreIcon/>
                                </CardFooter>
                            </Card>
                            <Card className="max-w-xs w-[18rem]  px-4 py-2">
                                <CardHeader>
                                    <Typography as="h6" variant={"h6"} color={"primary"}>
                                        Global Locations
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <Typography as="p" variant={"p"} color={"primary"}>
                                        Our friendly team is here to help.
                                    </Typography>
                                </CardContent>
                                <CardFooter className="flex items-center gap-4">
                                    <Typography className="font-semibold" as={"p"} variant={"p"} color={"blue"}>
                                        Email us
                                    </Typography>
                                    <LearnMoreIcon/>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="mt-28">
                    <div className="container">
                        <div className="bg-[#0192FE99]/10 rounded-xl px-10 py-8 flex items-center justify-between">
                            <div className="max-w-md">
                                <img src={person} alt="person" />
                            </div>
                            <div className="max-w-lg grid gap-4">
                                <Typography className="md:leading-tight" as={"h2"} variant={"h2"} color={"primary"}>
                                    Coworking, Private <br />
                                    Offices and More
                                </Typography>
                                <Typography  as={"p"} variant={"p"} color={"secondary"}>
                                    Your membership at is all-inclusive, providing amenities designed to allow you to focus on your business instead of logistics.
                                </Typography>
                                <div className="mt-6 flex gap-3">
                                    <Button variant={"default"} size={"lg"}>
                                        Discover now
                                    </Button>
                                    <Button variant={"outline"} size={"lg"}>
                                        Book a tour
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-28">
                    <div className="container grid gap-4 place-content-center">
                        <Typography className="text-center md:text-xl font-bold" as={"h1"} variant={"h1"} color={"secondary"}>
                            Trusted by top companies and startups around the world
                        </Typography>
                        <div className="max-w-4xl">
                            <img src={companies} alt="companies"/>
                        </div>
                    </div>
                </section>
                <section className="mt-28">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <div className="grid gap-6 text-center">
                                <Typography as={"h2"} variant={"h2"} color={"primary"}>
                                    Take a tour & try a day of coworking for free
                                </Typography>
                                <Typography as={"p"} variant={"p"} color={"secondary"}>
                                    We offer offices for lease by the day, by the week, or by the year. <br />
                                    Choose from any of our 3000 locations. Get a free quote!
                                </Typography>
                            </div>
                            <form action="#" className="mt-10 grid gap-4">
                                <Input placeholder="First Name"/>
                                <Input placeholder="Last Name" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Your Email"/>
                                    <Input placeholder="Your Email"/>
                                </div>
                                <Input placeholder="Message Email" />
                                <Button variant={"default"} size={"lg"}>
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </GeneralLayout>
        </>
    )
}

export default ContactPage