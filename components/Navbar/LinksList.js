import Link from "next/link";
import classes from "../../styles/_links-list.module.scss";

const navLinks = [
  {
    url: "/",
    title: "home",
    label: "Home Page",
  },
  {
    url: "Menu",
    title: "menu",
    label: "Menu Page",
  },
  {
    url: "About",
    title: "about",
    label: "About Page",
  },
  {
    url: "BookTable",
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
                href={link.url}
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
