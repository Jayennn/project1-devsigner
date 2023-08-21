import Button from "@/components/Atoms/Button";
import Typography from "@/components/Atoms/Typography";
import { NAVBAR_LINKS } from "./data";
import { cn } from "@/lib/utils.ts";
import LogoIcon from "@/components/icons/LogoIcon.tsx";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useState } from "react";

const Header = ({ theme = "default" }: { theme?: "blue" | "default" }) => {
    const [animation, setAnimation] = useState('closed')
    const { pathname } = useLocation();

    const onClick = () => {
        setAnimation('moving');
        setTimeout(() => {
            setAnimation(animation === "closed" ? "open" : "closed")
        }, 100)
    }

    const styles = {
        bgColor: `${theme === 'blue' && "bg-themeBlue"}`,
        color: `${theme === 'blue' && "!text-white"}`,
        btnSignup: `${theme === 'blue' && "bg-white text-themeBlue"}`,
    }

    const topBorderVariants: Variants = {
        open: {
            translateY: 5,
            rotate: 45
        },
        closed: {
            translateY: 0,
            rotate: 0
        }
    }

    const midBorderVariants: Variants = {
        open: {
            translateX: 45,
            opacity: 0
        },
        closed: {
            translateX: 0,
            opacity: 1
        }
    }

    const bottomBorderVariants: Variants = {
        open: {
            translateY: -11,
            rotate: -45
        },
        closed: {
            translateY:0,
            rotate: 0
        }
    }

    return (
        <>
            <nav className={cn("h-36 w-full flex items-center", styles.bgColor, styles.color)}>
                <div className="container flex items-center justify-between pt-16 py-14">
                    <Link to='/' className="flex justify-center item-center">
                        <LogoIcon theme={theme} />
                        <Typography className={cn("ml-3 uppercase text-[#0192FE]", styles.color)} variant="h4">
                            Futurspace
                        </Typography>
                    </Link>
                    <ul className="hidden items-center lg:flex gap-7">
                        {NAVBAR_LINKS.map((link) => (
                            <li className={`${pathname.replace('/', '') === link.toLowerCase().replace(' ', "-") && "font-extrabold"} text-sm`}
                                key={link}
                            >
                                <Link
                                    to={`/${link.toLowerCase().replace(' ', "-")}`}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button
                                className={cn("text-sm block", styles.btnSignup)}
                                variant={"default"}
                                size={"default"}>
                                Sign up
                            </Button>
                        </li>
                    </ul>
                    <button className="relative block lg:hidden" onClick={onClick}>
                        <motion.span
                            animate={animation}
                            variants={topBorderVariants}
                            className='w-[30px] h-[4px] block bg-black rounded my-1' />
                        <motion.span
                            
                            animate={animation}
                            variants={midBorderVariants}
                            className='w-[30px] h-[4px] block bg-black rounded my-1' />
                        <motion.span
                            animate={animation}
                            variants={bottomBorderVariants}
                            className='w-[30px] h-[4px] block bg-black rounded my-1' />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header;