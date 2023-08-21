import Typography from '@/components/Atoms/Typography.tsx'
import Button from '@/components/Atoms/Button.tsx'
import urlImage from '@/assets/hero/hero_home.png'
import Reveal from '@/components/Animation/Reveal'
import AnimatedText from '@/components/Animation/AnimatedText'
const SectionHeroHome = () => {
    return (
        <section className={'container pb-12'}>

            <div
                className={
                    'grid grid-cols-1 items-center gap-12 md:grid-cols-2'
                }
            >

                <div>
                    <Typography
                        as={'div'}
                        variant={'h1'}
                        className={'max-w-xs md:max-w-md font-extrabold !leading-snug'}
                    >
                        <AnimatedText word=' The workspace that works for you & your team' />

                    </Typography>

                    <Reveal>
                        <Typography
                            variant={'h6'}
                            as={"h6"}
                            color={'secondary'}
                            className={'mb-6 lg:mb-16 mt-4 md:mt-8 max-w-md md:max-w-lg font-medium'}
                        >
                            A safe, comfortable, and hassle-free Coworking workspace
                            increases productivity. Ideal workspaces make life
                            easier and more productive.
                        </Typography>
                    </Reveal>
                    <div className={'flex gap-6'}>
                        <Button type='button' className={'!py-6 text-xs lg:text-lg font-bold'}>
                            Discover now
                        </Button>
                        <Button type='button' variant={'outline'} className={'!py-6 text-xs lg:text-lg font-bold'}>
                            Book a tour
                        </Button>
                    </div>
                </div>

                {/*RIGHT IMAGE*/}
                <div>
                    <img src={urlImage} alt={'Home Hero Image'} />
                </div>
            </div>
        </section >
    )
}

export default SectionHeroHome
