import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

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

export const WebProjectsItems = [
  {
    id: "1",
    url: "imgs/aan-ps.png",
    title: "Professional Growth",
  },
  {
    id: "2",
    url: "imgs/bus-ps.png",
    title: "Strategic Planning",
  },
  {
    id: "3",
    url: "imgs/bus01.jpg",
    title: "Networking Opportunities",
  },
  {
    id: "4",
    url: "imgs/bus02.png",
    title: "Professional Growth",
  },
  {
    id: "5",
    url: "/imgs/caspa-ai.png",
    title: "Strategic Planning",
  },
  {
    id: "6",
    url: "imgs/hancho-ps.png",
    title: "Networking Opportunities",
  },
  {
    id: "7",
    url: "imgs/mine/akagami-01.jpg",
    title: "Professional Growth",
  },
  {
    id: "8",
    url: "imgs/mine/luffyai.png",
    title: "Strategic Planning",
  },
  {
    id: "9",
    url: "imgs/mine/Straw_hat-01.png",
    title: "Networking Opportunities",
  },
];

export const Services = ["Web design", "Graphic design", "Web dev"];
