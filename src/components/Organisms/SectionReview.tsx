import ReviewCard from "@/components/Molecules/ReviewCard";
import { ReviewNextIcon, ReviewPrevIcon } from "@/components/icons";
import Typography from "../Atoms/Typography";
import { SectionReviewPropsType } from "@/types/CustomPropsType";
import useEmblaCarousel, {
   EmblaCarouselType,
} from 'embla-carousel-react';
import AutoPlay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react";
import AnimatedText from "../Animation/AnimatedText";

const SectionReview = ({ Cards }: SectionReviewPropsType) => {
   const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [AutoPlay()])
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
   const [selectedIndex, setSelectedIndex] = useState(0)
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

   const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
   )
   const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
   )
   const scrollTo = useCallback(
      (index: number) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi]
   )

   const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList())
   }, [])

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
   }, [])

   useEffect(() => {
      if (!emblaApi) return

      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit)
      emblaApi.on('reInit', onSelect)
      emblaApi.on('select', onSelect)
   }, [emblaApi, onInit, onSelect])

   return (
      <section className="relative mt-28">
         <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
         <div className="container grid">
            <div className="grid">
                  <Typography className="text-base uppercase md:text-lg md:leading-tight" as={"div"} variant={"h1"} color={"blue"}>
                  <AnimatedText word="Reviews"/>
                  </Typography>

               <div className="flex items-center justify-between mt-4">
                  <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                     <AnimatedText word="What Our Members Say"/>
                  </Typography>
                  <span className="hidden gap-2 md:inline-flex"> 
                     <button type="submit" className="cursor-pointer" onClick={scrollPrev} disabled={prevBtnDisabled}>
                        <ReviewPrevIcon/>
                     </button>
                     <button type="submit" className="cursor-pointer" onClick={scrollNext} disabled={nextBtnDisabled}>
                        <ReviewNextIcon/>
                     </button>
                        
                  </span>
               </div>
            </div>
            {/* Example Review card soon using swiper */}
            <div className="overflow-hidden" ref={emblaRef}>
               <div className="flex gap-4 py-8 pl-4 mt-12 touch-pan-y">
                  {Cards.map((props,index) => (
                     <ReviewCard {...props} key={index}/>
                  ))}
               </div>
               <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (
                     <button
                        onClick={() => scrollTo(index)}
                        key={index}
                        type="button"
                        className={`embla__dot`.concat(
                           index === selectedIndex ? ' embla__dot--selected' : ""
                        )}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionReview;