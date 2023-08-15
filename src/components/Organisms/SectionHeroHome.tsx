import  Typography  from '@/components/Atoms/Typography.tsx'
import Button from '@/components/Atoms/Button.tsx'
import urlImage from '@/assets/hero/hero_home.png'
const SectionHeroHome = () => {
    return (
        <section className={'container py-12 lg:px-32'}>
            <div
                className={
                    'grid grid-cols-1 items-center gap-12 lg:grid-cols-2'
                }
            >
                <div>
                    <Typography
                        variant={'h1'}
                        className={'max-w-lg !leading-extraLoose'}
                    >
                        The workspace that works for you & your team
                    </Typography>
                    <Typography
                        variant={'h6'}
                        color={'secondary'}
                        className={'mb-16 mt-8 max-w-lg font-medium'}
                    >
                        A safe, comfortable, and hassle-free Coworking workspace
                        increases productivity. Ideal workspaces make life
                        easier and more productive.
                    </Typography>
                    <div className={' flex gap-6'}>
                        <Button className={'!py-6'}>Discover now</Button>
                        <Button variant={'outline'} className={'!py-6'}>
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
