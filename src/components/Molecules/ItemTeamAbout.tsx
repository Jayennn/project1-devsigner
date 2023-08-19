import Typography from "@/components/Atoms/Typography.tsx";
import {ItemTeamPropsType} from "@/types/CustomPropsType.tsx";

const ItemTeamAbout = ({name, position, imageUrl}: ItemTeamPropsType) =>
    <div
        className={"text-center"}
    >
        <img src={imageUrl} alt={"Team Image"} className={"rounded-xl"}/>
        <Typography variant={"h5"} className={"my-4"}>
            {name}
        </Typography>
        <Typography variant={"p"}>
            {position}
        </Typography>
    </div>

export default ItemTeamAbout