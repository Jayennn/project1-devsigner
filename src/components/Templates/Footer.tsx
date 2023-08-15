import Typography from "../Atoms/Typography";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/IntagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { ABOUT_FOOTER, CONTACT_FOOTER, PRODUCT_FOOTER } from "./data";

const Footer = () => {
   return (
      <footer className="pt-28 pb-4">
         <div className="container py-6">
            <hr />
            <div className="pt-12 pb-10 flex items-center justify-between">
               <div className="max-w-[15rem] grid">
                  <Typography className="uppercase text-[#0192FE]" variant="h4">
                     Futurspace
                  </Typography>
                  <Typography className="mt-4" variant="p" color="secondary">
                     We want to build more than nice, shared office spaces. We want to build a community.
                  </Typography>
                  <ul className="mt-5 flex gap-2">
                     <li>
                        <FacebookIcon/>
                     </li>
                     <li>
                        <LinkedInIcon/>
                     </li>
                     <li>
                        <InstagramIcon/>
                     </li>
                     <li>
                        <TwitterIcon/>
                     </li>
                  </ul>
               </div>
               <div className="basis-2/4 flex items-center justify-between">
                  <div className="grid">
                     <Typography variant="h5" color="primary">
                        About
                     </Typography>
                     <ul className="mt-4 grid gap-3">
                        {ABOUT_FOOTER.map((link) => (
                           <li className="text-sm text-black opacity-70" key={link}>{ link }</li>
                        ))}
                     </ul>
                  </div>
                  <div className="grid">
                     <Typography variant="h5" color="primary">
                        Product
                     </Typography>
                     <ul className="mt-4 grid gap-3">
                        {PRODUCT_FOOTER.map((link) => (
                           <li  className="text-sm text-black opacity-70" key={link}>{ link }</li>
                        ))}
                     </ul>
                  </div>
                  <div className="grid">
                     <Typography variant="h5" color="primary">
                        Contact
                     </Typography>
                     <ul className="mt-4 grid gap-3">
                        {CONTACT_FOOTER.map((link) => (
                           <li  className="text-sm text-black opacity-70" key={link}>{ link }</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            <Typography variant="p" color="secondary">
               &copy; 2023 All rights reserved - Futurspace
            </Typography>
         </div>
      </footer>
   )
}

export default Footer;