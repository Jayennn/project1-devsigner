import ReviewCard from "@/components/Molecules/ReviewCard";
import { ReviewNextIcon, ReviewPrevIcon } from "@/components/icons";
import Typography from "../Atoms/Typography";
import { SectionReviewPropsType } from "@/types/CustomPropsType";

const SectionReview = ({ Cards }: SectionReviewPropsType) => {
   return (
      <section className="mt-28 relative">
         <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
         <div className="container grid">
            <div className="grid">
               <Typography className="text-base md:text-lg md:leading-tight uppercase" as={"h1"} variant={"h1"} color={"blue"}>
                  Contact us
               </Typography>
               <div className="flex mt-4 items-center justify-between">
                  <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                     What Our Members Say
                  </Typography>
                  <span className="inline-flex gap-2">
                     <ReviewPrevIcon />
                     <ReviewNextIcon />
                  </span>
               </div>
            </div>
            {/* Example Review card soon using swiper */}
            <div className="py-8 mt-12 inline-flex flex-row snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 relative overflow-auto lg:overflow-hidden">
               {Cards.map((props,index) => (
                  <ReviewCard {...props} key={index}/>
               ))}
            </div>
         </div>
      </section>
   )
}

export default SectionReview;