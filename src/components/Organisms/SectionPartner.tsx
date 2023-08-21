import Typography from "@/components/Atoms/Typography.tsx";
import companies from "@/assets/contact/companies.png";
import AnimatedText from "../Animation/AnimatedText";

const SectionPartner = ({title}:{title:string}) => {
    return  <section className="mt-28">
        <div className="container grid gap-4 place-items-center place-content-center">
            <Typography className="text-xl font-bold text-center md:text-2xl" as={"div"} variant={"h1"} color={"secondary"}>
                <AnimatedText justify="center" word={title}/>
            </Typography>
            <div className="max-w-4xl">
                <img src={companies} alt="companies"/>
            </div>
        </div>
    </section>
}

export default SectionPartner