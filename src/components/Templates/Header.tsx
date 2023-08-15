import Button from "../Atoms/Button";
import Typography from "../Atoms/Typography";
import { NAVBAR_LINKS } from "./data";

const Header = () => {
   return (
      <>
         <nav className="h-36 w-full flex items-center">
            <div className="container pt-16 py-14 flex items-center justify-between">
               <div className="flex justify-center item-center">
                  <svg width="30" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="fs logo">
                        <circle id="Ellipse 1755" cx="20" cy="20" r="20" fill="#0192FE" />
                        <g id="Group 48097593">
                           <rect id="Rectangle 1096" x="10.7461" y="10.7461" width="5.97015" height="5.97015" rx="1.19403" fill="#F9FAFF" />
                           <rect id="Rectangle 1099" x="18.5078" y="10.7461" width="10.1493" height="5.97015" rx="1.19403" fill="#F9FAFF" />
                           <rect id="Rectangle 1098" x="20.2988" y="18.5073" width="5.97015" height="5.97015" rx="1.19403" fill="#5BB9FF" />
                           <rect id="Rectangle 1097" x="10.7461" y="18.5073" width="7.76119" height="10.7463" rx="1.19403" fill="#F9FAFF" />
                        </g>
                     </g>
                  </svg>
                  <Typography className="ml-3 uppercase text-[#0192FE]" variant="h4">
                     Futurspace
                  </Typography>
               </div>
               <ul className="flex items-center gap-7">
                  {NAVBAR_LINKS.map((link) => (
                     <li className="text-sm" key={link}>{ link }</li>
                  ))}
                  <li>
                     <Button
                        className="text-sm"
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