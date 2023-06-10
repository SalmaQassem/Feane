import classes from "../../styles/_contact.module.scss";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import FooterHeader from "../UI/FooterHeader";
import Link from "next/link";

const links = [
  {
    url: "/",
    icon: <IoLocationSharp />,
    text: "Location",
    label: "Location",
  },
  {
    url: "/",
    icon: <IoCall />,
    text: "Call +01 1234567890",
    label: "Phone",
  },
  {
    url: "/",
    icon: <MdEmail />,
    text: "demo@gmail.com",
    label: "Email",
  },
];

const ContactUs = () => {
  return (
    <div>
      <FooterHeader>contact us</FooterHeader>
      <div className={classes.box}>
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.label} aria-label={link.label}>
              <span className={classes.icon}>{link.icon}</span>
              <span>{link.text}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
