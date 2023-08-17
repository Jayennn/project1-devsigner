import Typography from "@/components/Atoms/Typography.tsx";
import SectionOfficeService from "@/components/Organisms/SectionOfficeService.tsx";
import {ServiceOfficeCardPropsType} from "@/types/CustomPropsType.tsx";
import image from "@/assets/card/Office.png";
import SectionOurTeam from "@/components/Organisms/SectionOurTeam.tsx";
import SectionPartner from "@/components/Organisms/SectionPartner.tsx";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.tsx";
import SectionSubscribe from "@/components/Organisms/SectionSubscribe.tsx";
import SectionCTAAbout from "@/components/Organisms/SectionCTAAbout.tsx";
import AboutLayout from "@/components/Templates/AboutLayout.tsx";

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
const AboutPage = () => {
    return (
        <AboutLayout>
            <section className={"bg-themeBlue py-24"}>

            </section>
            <section className={"container py-24"}>
                <Typography variant={"h1"} className={"max-w-5xl"}>
                    Our space is more than a shared office.
                    It is a meeting ground for creatives and teams
                </Typography>
                <Typography variant={"p"} className={"max-w-2xl mt-4"}>
                    Find focus and clarity space to do the things you need to do to grow your business in New York. Book
                    by the month, daily or by the hour.
                </Typography>
                <hr className={"my-12"}/>

                <div className={"grid grid-cols-1 md:grid-cols-3 my-12 gap-16"}>
                    <Item title={"3,000+"}
                          subtitle={"Happy Members"}
                          description={"We offer offices for lease by the day, by the week, or by the year."}
                    />
                    <Item title={"12+"}
                          subtitle={"Locations across the globe"}
                          description={"We offer offices for lease by the day, by the week, or by the year."}
                    />
                    <Item title={"10+"}
                          subtitle={"Years of service"}
                          description={"We offer offices for lease by the day, by the week, or by the year."}
                    />

                </div>


            </section>
            <SectionOfficeService title={"Why Serviced Office"}
                                  subtitle={"We've helped thousands of fast-growing startups and teams"}
                                  description={"Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price."}
                                  services={serviceOffices}
            />
            <SectionOurTeam
                title={"Our Leadership team"}
                subtitle={"Meet the great team behind Futurspace"}
                description={"Lorem ipsum dolor sit amet consectetur adipiscing elit sapien vestibulum quam massa viverra blandit sit auctor vestibulum semper viverra aliquet sit."}
            />

            <section className={"container py-6  "}>
                <div className={"flex bg-themeLightBlue py-20 gap-60 px-12 rounded-xl"}>
                    <Typography variant={"h2"}>
                        Join our team
                    </Typography>
                    <div className={"space-y-6"}>
                        <Typography variant={"p"} className={"max-w-xl"}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget eu elementum velit nunc
                            tortor pulvinar ornare at mi sed nisl in proin sollicitudin ultricies aliquet malesuada
                            aliquet.
                        </Typography>
                        <Typography
                            variant={'p'}
                            color={'blue'}
                            className={'flex items-center gap-2 font-extrabold'}
                        >
                            Explore jobs
                            <ArrowRightIcon/>
                        </Typography>
                    </div>
                </div>
            </section>

            <SectionPartner title={"Trusted by top companies and startups around the world"}/>
            <SectionCTAAbout />

            <SectionSubscribe
                title={"Modern workspaces that fits your needs"}
                subtitle={"No subscriptions or lousy monthly fees. Only pay for the space and time you need"}
            />
        </AboutLayout>

    )
}

const Item = ({title, subtitle, description}: { title: string, subtitle: string, description: string }) => <div>
    <Typography variant={"h1"} color={"blue"} className={"font-extrabold"}>
        {title}
    </Typography>
    <Typography variant={"h4"} className={"my-4"}>
        {subtitle}
    </Typography>
    <Typography variant={"p"}>
        {description}
    </Typography>
</div>

export default AboutPage