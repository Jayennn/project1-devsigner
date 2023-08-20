import { Card, CardContent } from "@/components/Atoms/Card";
import { StarsIcon } from "@/components/icons/StarsIcon";
import Typography from "../Atoms/Typography";
import { ReviewCardPropsType } from "@/types/CustomPropsType";

const ReviewCard = ({description, name, role, imageUrl}: ReviewCardPropsType) => {
   return (
      <Card className="flex-[0_0_100%] min-w-0 lg:min-w-0 lg:max-w-sm h-fit !shadow-none snap-center">
         <CardContent className="lg:px-12 py-8 grid gap-6">
            <StarsIcon />
            <Typography variant={"p"} as={"p"}>
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