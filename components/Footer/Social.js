import classes from "../../styles/_social.module.scss";
import FooterHeader from "../UI/FooterHeader";
import FooterParagraph from "../UI/FooterParagraph";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    url: "/",
    icon: <FaFacebookF />,
    label: "Facebook Link",
  },
  {
    url: "/",
    icon: <FaTwitter />,
    label: "Twitter Link",
  },
  {
    url: "/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn Link",
  },
  {
    url: "/",
    icon: <FaInstagram />,
    label: "Instagram Link",
  },
  {
    url: "/",
    icon: <FaPinterest />,
    label: "Pinterest Link",
  },
];
const Social = () => {
  return (
    <div className={classes.social}>
      <FooterHeader>
        <Link href="/" className={classes.header} aria-label="Home Page">
          feane
        </Link>
      </FooterHeader>
      <FooterParagraph>
        Necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with
      </FooterParagraph>
      <div className={classes.links}>
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.label} aria-label={link.label}>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Social;
