import Link from "next/link";
import classes from "../../styles/_links-list.module.scss";

const navLinks = [
  {
    link: "",
    title: "home",
    label: "Home Page",
  },
  {
    link: "",
    title: "menu",
    label: "Menu Page",
  },
  {
    link: "",
    title: "about",
    label: "About Page",
  },
  {
    link: "",
    title: "book table",
    label: "Book Table Page",
  },
];

const LinkList = (props) => {
  const linkClickHandler = () => {
    props.linkHandler();
  };
  return (
    <>
      <ul className={classes.links}>
        {navLinks.map((link) => {
          return (
            <li key={link.label}>
              <Link
                href={link.link}
                aria-label={link.label}
                onClick={linkClickHandler}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default LinkList;
