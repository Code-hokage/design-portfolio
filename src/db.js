import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const NavLinks = [
  {
    Name: "Home",
    path: "/",
  },
  {
    Name: "Designs",
    path: "/designs",
  },
  {
    Name: "Web Projects",
    path: "/webprojects",
    clicked: false,
  },
];

export const Socials = [
  {
    Name: "GitHub",
    id: "1",
    hrefUrl: "/",
    icon: FaGithub,
    style: "hover:text-grey",
  },
  {
    Name: "LinkedIn",
    id: "2",
    hrefUrl: "/",
    icon: FaLinkedinIn,
    style: "hover:text-[#004182]",
  },
  {
    Name: "Instagram",
    id: "3",
    hrefUrl: "/",
    icon: FaInstagram,
    style: "hover:text-[#F56040]",
  },
  {
    Name: "X",
    id: "4",
    hrefUrl: "/",
    icon: FaXTwitter,
    style: "hover:text-grey",
  },
];

export const Services = ["Web design", "Graphic design", "Web dev"];
