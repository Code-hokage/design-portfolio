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
  },
  {
    Name: "Designs",
    path: "/designs",
  },
  {
    Name: "About",
    path: "/about",
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
    url: "imgs/ihatins/ihat5.png",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-rabahamallCard",
    icon: {
      Icon: FaGithub,
      hrefUrl: "/1",
      iconName: "Github",
      style: "hover:text-grey",
    },
    images: [
      { url: "/imgs/aan-ps.png" },
    ],
  },
  {
    id: "2",
    url: "imgs/bus-ps.png",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-rabahamallCard",
    icon: {
      Icon: FaGithub,
      hrefUrl: "/2",
      iconName: "Github",
      style: "hover:text-grey",
    },
    images: [
      { url: "/imgs/hancho-ps.png" },
    ],
  },
  {
    id: "3",
    url: "imgs/bus01.jpg",
    title: "Networking Opportunities",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-rabahamallCard",
    icon: {
      Icon: FaGithub,
      hrefUrl: "/3",
      iconName: "Github",
      style: "hover:text-grey",
    },
    images: [
      { url: "/imgs/caspa-ai.png" },
    ],
  },
  {
    id: "4",
    url: "imgs/bus02.png",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-rabahamallCard",
    icon: {
      Icon: FaGithub,
      hrefUrl: "/4",
      iconName: "Github",
      style: "hover:text-grey",
    },
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
  {
    id: "5",
    url: "/imgs/caspa-ai.png",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-rabahamallCard",
    icon: {
      Icon: FaGithub,
      hrefUrl: "/5",
      iconName: "Github",
      style: "hover:text-grey",
    },
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
];


// Design projects

export const DesignProjectsItems = [
  {
    id: "1",
    url: "imgs/ihatins/ihatins-01.jpg",
    title: "iHATINS",
    description:
      "Lorem, ipsuidemos nicabo! Quam quasi voluptatum nam.",
    bgStyle: "bg-ibg",
    // icon: {
    //   Icon: FaGithub,
    //   hrefUrl: "/",
    //   iconName: "Github",
    //   style: "hover:text-grey",
    // },
    images: [
      { url: "/imgs/ihatins/ibrand.png" },
      { url: "/imgs/ihatins/iflashsale.jpg" },
      { url: "/imgs/ihatins/ipromo.jpg" },
      { url: "/imgs/ihatins/ipromo01.png" },
      { url: "/imgs/ihatins/ips01.png" },
      { url: "/imgs/ihatins/ips02.png" },
      { url: "/imgs/ihatins/ips03.png" },
    ],
  },
  {
    id: "2",
    url: "imgs/wed/",
    title: "Strategic Planning",
    description:
      "Lorem, ipsuidem impedit autsit nisri id, quos accusamus dolore odit rep.",
    bgStyle: "bg-rabahamallCard",
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
  {
    id: "3",
    url: "imgs/bus01.jpg",
    title: "Networking Opportunities",
    description:
      "Lorem, ipsuidem impeditsitLorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non doloremque natus a",
    bgStyle: "bg-hero",
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
  {
    id: "4",
    url: "imgs/bus01.jpg",
    title: "Networking Opportunities",
    description:
      "Lorem, ipsuidem impeditsitLorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non doloremque natus au",
    bgStyle: "bg-hero",
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
  {
    id: "5",
    url: "imgs/bus01.jpg",
    title: "Networking Opportunities",
    description:
      "Lorem, ipsuidem impeditsitLorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt non doloremque natus aut",
    bgStyle: "bg-hero",
    images: [
      { url: "/imgs/aan-ps.png" },
      { url: "/imgs/caspa-ai.png" },
      { url: "/imgs/hancho-ps.png" },
    ],
  },
];
