import ReviewCard from "@/components/Molecules/ReviewCard";
import { ReviewNextIcon, ReviewPrevIcon } from "@/components/icons";
import Typography from "../Atoms/Typography";
import { SectionReviewPropsType } from "@/types/CustomPropsType";

const SectionReview = ({Cards}: SectionReviewPropsType) => {
   return (
      <section className="mt-28">
         <div className="container grid">
            <div className="grid">
               <Typography className="text-base md:text-lg md:leading-tight uppercase" as={"h1"} variant={"h1"} color={"blue"}>
                  Contact us
               </Typography>
               <div className="flex items-center justify-between">
                  <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                     What Our Members Say
                  </Typography>
                  <span className="inline-flex gap-2">
                     <ReviewPrevIcon />
                     <ReviewNextIcon />
                  </span>
               </div>
            </div>
            <div className="py-8 flex relative overflow-hidden">
               {Cards.map(({ description, name, role, imageUrl }) => (
                  <ReviewCard
                     description={description}
                     imageUrl={imageUrl}
                     name={name}
                     role={role}
                     
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default SectionReview;