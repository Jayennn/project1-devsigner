import { Card, CardContent } from "@/components/Atoms/Card";
import { StarsIcon } from "@/components/icons/StarsIcon";
import Typography from "../Atoms/Typography";
import { ReviewCardPropsType } from "@/types/CustomPropsType";

const ReviewCard = ({description, name, role, imageUrl}: ReviewCardPropsType) => {
   return (
      <Card className="max-w-md">
         <CardContent className="px-12 py-8 grid gap-6">
            <StarsIcon />
            <Typography as={"p"}>
               {description}
            </Typography>
            <div className="flex items-center gap-4">
               <img className="w-12 h-12" src={imageUrl} alt="person-review" />
               <div>
                  <Typography className="font-bold" as={"p"} variant={"p"} color={"primary"}>
                    {name}
                  </Typography>
                  <Typography className="font-normal" as={"p"} variant={"p"} color={"primary"}>
                     {role}
                  </Typography>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}

export default ReviewCard;