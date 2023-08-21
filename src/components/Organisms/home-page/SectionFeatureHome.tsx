import Typography from '@/components/Atoms/Typography.tsx'
import urlImage from '@/assets/hero/hero_feature_home.png'
import AnimatedText from '@/components/Animation/AnimatedText'
const SectionFeatureHome = () => {
    return (
        <section className={'lg:py-12'}>
            <div className='container '>
                <div
                    className={
                        'relative grid grid-cols-1 items-center gap-8 lg:gap-24 lg:grid-cols-2'
                    }
                >
                <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
                    
                    <div className={'ml-0 px-12 lg:px-0 order-2 lg:order-1'}>
                        <img
                            src={urlImage}
                            alt={'Hero Feature Image'}
                            className={'max-h-[300px] md:max-h-[550px] mx-auto lg:mx-0'}
                        />
                    </div>
                    <div className={"order-1 lg:order-2"}>
                        <Typography
                            variant={'h1'}
                            as={"h1"}
                            className={'lg:!leading-extraLoose text-center'}
                        >
                            <AnimatedText justify='center' word='A complete coworking space solution for your business and team'/>
                            
                        </Typography>
                        <div className={'my-12 relative space-y-6'}>
                            <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0]" />
                            <div
                                className={
                                    'w-full md:max-w-fit space-y-4 rounded-xl bg-white p-8 shadow-none'
                                }
                            >
                                <Typography as={"h4"} variant={'h4'}>
                                    Discover a busines location
                                </Typography>
                                <Typography
                                    variant={'p'}
                                    className={'max-w-sm font-light'}
                                >
                                    Our mission is to provide unparalleled value
                                    that increases over time. Our space is more than
                                    a shared office.
                                </Typography>
                            </div>
                            <div
                                className={
                                    'w-full md:max-w-fit rounded-xl bg-white p-8 shadow-none'
                                }
                            >
                                <Typography variant={'h4'} as={"h4"}>
                                    The most efficient workspace solutions
                                </Typography>
                            </div>
                            <div
                                className={
                                    'w-full md:max-w-fit rounded-xl bg-white p-8 shadow-none'
                                }
                            >
                                <Typography variant={'h4'} as={"h4"} className={'pr-12'}>
                                    Design your productive space
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFeatureHome
