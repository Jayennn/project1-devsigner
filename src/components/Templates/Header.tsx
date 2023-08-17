import Button from "@/components/Atoms/Button";
import  Typography  from "@/components/Atoms/Typography";
import { NAVBAR_LINKS } from "./data";
import {cn} from "@/lib/utils.ts";
import LogoIcon from "@/components/icons/LogoIcon.tsx";

const Header = ({theme = "default"} : {theme?: "blue" | "default"}) => {
   const styles = {
      bgColor: `${theme === 'blue' && "bg-themeBlue"}`,
      color: `${theme === 'blue' && "!text-white"}`,
      btnSignup: `${theme === 'blue' && "bg-white py-4 px-6 text-themeBlue"}`
   }
   return (
      <>
         <nav className={cn("h-36 w-full flex items-center", styles.bgColor, styles.color) }>
            <div className="container pt-16 py-14 flex items-center justify-between">
               <div className="flex justify-center item-center">
                  <LogoIcon theme={theme}  />
                  <Typography className={cn("ml-3 uppercase text-[#0192FE]",styles.color) } variant="h4">
                     Futurspace
                  </Typography>
               </div>
               <ul className="flex items-center gap-7">
                  {NAVBAR_LINKS.map((link) => (
                     <li className="hidden md:block text-sm" key={link}>{ link }</li>
                  ))}
                  <li>
                     <Button
                        className={cn("text-sm",styles.btnSignup)}
                        variant={"default"}
                        size={"default"}>
                        Sign up
                     </Button>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
}

export default Header;