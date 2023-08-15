import { Input } from "@/components/Atoms/Input";
import Typography from "@/components/Atoms/Typography";
import GeneralLayout from "@/components/Templates/GeneralLayout";
import space_hero from "@/assets/hero/space_hero.png";
import { ServiceOfficeCardPropsType } from "@/types/CustomPropsType";
import image from '@/assets/card/Office.png'
import ServiceOfficeCard from "@/components/Molecules/ServiceOfficeCard";

const serviceOffices: ServiceOfficeCardPropsType[] = [
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
]

const SpacePage = () => {
    return (
        <>
            <GeneralLayout>
                <section className="grid place-content-center">
                    <div className="container">
                        <div className="flex flex-col-reverse md:flex-row gap-11 items-center justify-between">
                            <div className="max-w-lg grid gap-8">
                                <Typography as={"h1"} variant={"h1"} color={"primary"}>
                                    A creative coworking space in New York
                                </Typography>
                                <Typography as={"p"} variant={"p"} color={"secondary"}>
                                    You can book personal office space across the country by the day, hour or month.
                                </Typography>
                                <Input button="true" placeholder="Enter your email"/>
                            </div>
                            <div className="hero-space relative max-w-xl">
                                <img className="rounded-2xl" src={space_hero} alt="hero-space" />
                                {/* <div className="bg-white rounded-tl-3xl p-5 absolute bottom-0 right-0">
                                    <svg width="111" height="115" viewBox="0 0 181 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="181" height="195" rx="50" fill="#0192FE" />
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-28 grid place-content-center">
                    <div className="container">
                        <div className="grid max-w-4xl mx-auto gap-4 text-left md:text-center">
                            <Typography as={"h1"} variant={"h1"} color={"primary"}>
                                We've helped thousands of
                                fast-growing startups and teams
                            </Typography>
                            <Typography as={"p"}  variant={"p"} color={"secondary"}>
                                Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.
                            </Typography>
                        </div>
                        <div className="py-16 max-w-8xl grid grid-cols-1 gap-12 lg:grid-cols-3 ">
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
                </section>
            </GeneralLayout>
        </>
    )
}

export default SpacePage;