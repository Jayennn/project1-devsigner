import {Typography} from "@/components/Atoms/Typography.tsx";
import Button from "@/components/Atoms/Button.tsx";
import {LocationIcon} from "@/components/icons";
import ItemLocation from "@/components/Molecules/ItemLocation.tsx";
import imageUrl from "@/assets/hero/hero_location_home.jpg"

const SectionLocationHome = () => {
    return <section className={"container"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2  items-center"}>
            {/*IMAGE LEFT*/}
            <div>
                <img src={imageUrl} className={""} alt={"Hero Location Home"}/>
            </div>
            <div className={"pl-28"}>
                <Typography variant={"h6"} color={"blue"} className={"uppercase"}>Our Offices</Typography>
                <Typography variant={"h2"} className={"!text-4xl !leading-relaxed  font-extrabold my-4"}>Discover the Location that Best Fits Your
                    Business Needs
                </Typography>
                <Typography variant={"p"} color={"secondary"} className={"text-lg font-light"}>As we headstart into this new normal, we are ensuring your workspace
                    experience remains exceptional.
                </Typography>
                <ul className={"space-y-3 my-12"}>
                    <li><ItemLocation icon={<LocationIcon/>} title={"New Orleans, Usa"}/></li>
                    <li><ItemLocation icon={<LocationIcon/>} title={"Bangalore, India"}/></li>
                    <li><ItemLocation icon={<LocationIcon/>} title={"Sydney, Australia"}/></li>
                </ul>
                <Button className={"!py-6 text-lg font-semibold"}>View Locations</Button>
            </div>

        </div>
    </section>;

}

export default SectionLocationHome;