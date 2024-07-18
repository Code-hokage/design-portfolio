import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const NavLinks = [
  {
    Name: "Home",
    path: "/",
  },
  {
    Name: "Web Projects",
    path: "/webprojects",
    clicked: false,
  },
  {
    Name: "Designs",
    path: "/designs",
  },
];

export const Socials = [
  {
    Name: "GitHub",
    id: "1",
    hrefUrl: "https://github.com/adnanaadam",
    icon: FaGithub,
    style: "hover:text-grey",
  },
  {
    Name: "LinkedIn",
    id: "2",
    hrefUrl: "https://www.linkedin.com/in/adam-adnan-35657b251",
    icon: FaLinkedinIn,
    style: "hover:text-[#004182]",
  },
  {
    Name: "Instagram",
    id: "3",
    hrefUrl: "https://www.instagram.com/addy_sharawi",
    icon: FaInstagram,
    style: "hover:text-[#F56040]",
  },
  {
    Name: "X",
    id: "4",
    hrefUrl: "https://x.com/addy_sharawi",
    icon: FaXTwitter,
    style: "hover:text-grey",
  },
];

export const Services = ["Web design", "Graphic design", "Web dev"];
