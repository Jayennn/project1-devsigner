import ReviewCard from "@/components/Molecules/ReviewCard";
import { ReviewNextIcon, ReviewPrevIcon } from "@/components/icons";
import Typography from "../Atoms/Typography";
import { SectionReviewPropsType } from "@/types/CustomPropsType";
import useEmblaCarousel, {
   EmblaCarouselType,
} from 'embla-carousel-react';
import AutoPlay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react";

const SectionReview = ({ Cards }: SectionReviewPropsType) => {
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

   const [emblaRef, emblaApi] = useEmblaCarousel({
      // slides,
      loop: true
   }, [
      AutoPlay(
         {
            delay: 2000,
            jump: true,
         }
      ),
      
   ]);

   const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
   )

   const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
   )



   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
   }, [])

   useEffect(() => {
      if (!emblaApi) return

      onSelect(emblaApi)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
   }, [emblaApi, onSelect])

   return (
      <section className="relative mt-28">
         <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
         <div className="container grid">
            <div className="grid">
               <Typography className="text-base uppercase md:text-lg md:leading-tight" as={"h1"} variant={"h1"} color={"blue"}>
                  Reviews
               </Typography>
               <div className="flex mt-4 items-center justify-between">
                  <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                     What Our Members Say
                  </Typography>
                  <span className="hidden md:inline-flex gap-2"> 
                     <button className="cursor-pointer" onClick={scrollPrev} disabled={prevBtnDisabled}>
                        <ReviewPrevIcon/>
                     </button>
                     <button className="cursor-pointer" onClick={scrollNext} disabled={nextBtnDisabled}>
                        <ReviewNextIcon/>
                     </button>
                        
                  </span>
               </div>
            </div>
            {/* Example Review card soon using swiper */}
            <div className="overflow-hidden" ref={emblaRef}>
               <div className="py-8 mt-12 flex pl-4 gap-4 touch-pan-y">
                  {Cards.map((props,index) => (
                     <ReviewCard {...props} key={index}/>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionReview;