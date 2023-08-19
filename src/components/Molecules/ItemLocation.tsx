import React from "react";
import Typography from "@/components/Atoms/Typography.tsx";


const ItemLocation = ({icon, title}: { icon: React.ReactNode, title: string }) => {
    return <Typography variant={"h4"} as={"h4"} className={"flex flex-row gap-8 items-center"}>
        {icon}
        {title}
    </Typography>
}

export default ItemLocation;