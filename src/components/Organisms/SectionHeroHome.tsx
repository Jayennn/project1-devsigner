import  Typography  from '@/components/Atoms/Typography.tsx'
import Button from '@/components/Atoms/Button.tsx'
import urlImage from '@/assets/hero/hero_home.png'
const SectionHeroHome = () => {
    return (
        <section className={'container py-12'}>
            <div
                className={
                    'grid grid-cols-1 items-center gap-12 md:grid-cols-2'
                }
            >
                <div>
                    <Typography
                        variant={'h2'}
                        className={'!text-2xl md:!text-4xl max-w-[230px] md:max-w-xs font-extrabold !leading-snug'}
                    >
                        The workspace that works for you & your team
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'secondary'}
                        className={'text-[10px] md:text-xl mb-6 lg:mb-16 mt-4 md:mt-8 max-w-[280px] md:max-w-lg font-medium'}
                    >
                        A safe, comfortable, and hassle-free Coworking workspace
                        increases productivity. Ideal workspaces make life
                        easier and more productive.
                    </Typography>
                    <div className={'flex gap-6'}>
                        <Button  className={'!py-6 text-xs lg:text-lg font-extrabold'}>Discover now</Button>
                        <Button variant={'outline'} className={'!py-6 text-xs lg:text-lg font-extrabold'}>
                            Book a tour
                        </Button>
                    </div>
                </div>

                {/*RIGHT IMAGE*/}
                <div>
                    <img src={urlImage} alt={'Home Hero Image'} />
                </div>
            </div>
        </section>
    )
}

export default SectionHeroHome
