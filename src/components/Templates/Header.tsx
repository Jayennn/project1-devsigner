import Button from "@/components/Atoms/Button";
import Typography from "@/components/Atoms/Typography";
import { NAVBAR_LINKS } from "./data";
import { cn } from "@/lib/utils.ts";
import LogoIcon from "@/components/icons/LogoIcon.tsx";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from "react";

const Header = ({ theme = "default" }: { theme?: "blue" | "default" }) => {
    const { pathname } = useLocation();
    const [hover, setHover] = useState('')

    const styles = {
        bgColor: `${theme === 'blue' && "bg-themeBlue"}`,
        color: `${theme === 'blue' && "!text-white"}`,
        btnSignup: `${theme === 'blue' && "bg-white text-themeBlue"}`,
    }

    return (
        <>
            <nav className={cn("h-36 w-full flex items-center", styles.bgColor, styles.color)}>
                <div className="container pt-16 py-14 flex items-center justify-between">
                    <div className="flex justify-center item-center">
                        <LogoIcon theme={theme} />
                        <Typography className={cn("ml-3 uppercase text-[#0192FE]", styles.color)} variant="h4">
                            Futurspace
                        </Typography>
                    </div>
                    <ul className="hidden lg:flex items-center gap-7">
                        {NAVBAR_LINKS.map((link) => (
                            <li className={`${pathname.replace('/', '') === link.toLowerCase().replace(' ', "-") && "font-extrabold"} relative text-sm`}
                                key={link}
                                onMouseOver={() => setHover(link)}
                            >
                                <Link
                                    to={`/${link.toLowerCase().replace(' ', "-")}`}>
                                    {link}
                                </Link>
                                {hover === link ? (
                                    <motion.div
                                        className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#0192FE]"
                                        layoutId="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#0192FE]"
                                    />

                                ) : null}
                            </li>
                        ))}
                        <li>
                            <Button
                                className={cn("text-sm", styles.btnSignup)}
                                variant={"default"}
                                size={"default"}>
                                Sign up
                            </Button>
                        </li>
                    </ul>
                    <button className="block md:hidden">

                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header;