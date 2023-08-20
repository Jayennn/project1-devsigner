import Typography from "@/components/Atoms/Typography.tsx";
import companies from "@/assets/contact/companies.png";

const SectionPartner = ({title}:{title:string}) => {
    return  <section className="mt-28">
        <div className="container grid gap-4 place-content-center">
            <Typography className="text-center lg:text-center font-bold" as={"h1"} variant={"h1"} color={"secondary"}>
                {title}
            </Typography>
            <div className="max-w-4xl">
                <img src={companies} alt="companies"/>
            </div>
        </div>
    </section>
}

export default SectionPartner