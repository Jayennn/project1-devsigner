import React from "react";
import Typography from "@/components/Atoms/Typography.tsx";


const ItemLocation = ({icon, title}: { icon: React.ReactNode, title: string }) => {
    return <Typography variant={"h5"} as={"h5"} className={"flex flex-row gap-8 items-center"}>
        {icon}
        {title}
    </Typography>
}

export default ItemLocation;