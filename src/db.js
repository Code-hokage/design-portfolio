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
    nameStyle: "text-grey",
  },
  {
    Name: "LinkedIn",
    id: "2",
    hrefUrl: "https://www.linkedin.com/in/adam-adnan-35657b251",
    icon: FaLinkedinIn,
    style: "hover:text-[#004182]",
    nameStyle: "text-[#004182]",
  },
  {
    Name: "Instagram",
    id: "3",
    hrefUrl: "https://www.instagram.com/addy_sharawi",
    icon: FaInstagram,
    style: "hover:text-[#F56040]",
    nameStyle: "text-[#F56040]",
  },
  {
    Name: "X",
    id: "4",
    hrefUrl: "https://x.com/addy_sharawi",
    icon: FaXTwitter,
    style: "hover:text-grey",
    nameStyle: "text-grey",
  },
];

export const WebProjectsItems = [
  {
    id: "1",
    url: "imgs/ihatins/ihat5.png",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-ihatins",
    // icon: {
    //   Icon: FaGithub,
    //   hrefUrl: "/1",
    //   iconName: "Github",
    //   style: "hover:text-grey",
    // },
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "/imgs/ihatins/ihat1.png" },
      { url: "/imgs/ihatins/ihat2.jpg" },
      { url: "/imgs/ihatins/ihat3.jpg" },
    ],
  },
  {
    id: "2",
    url: "imgs/west/west1.png",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-west",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "/imgs/west/west2.jpg" },
      { url: "/imgs/west/west3.jpg" },
      { url: "/imgs/west/west4.png" },
    ],
  },
  {
    id: "3",
    url: "imgs/wed/wed1.png",
    title: "Networking Opportunities",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-wed",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "/imgs/wed/wed2.png" },
      { url: "/imgs/wed/wed3.png" },
      { url: "/imgs/wed/wed4.jpg" },
    ],
  },
  {
    id: "4",
    url: "imgs/mine/mine5.png",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-mine",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "/imgs/mine/mine1.png" },
      { url: "/imgs/mine/mine2.png" },
      { url: "/imgs/mine/mine3.png" },
    ],
  },
  {
    id: "5",
    url: "/imgs/otasco/otasco1.png",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi. Lorem, ipsuidem impedit autsit nisi",
    bgStyle: "bg-otasco",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "/imgs/otasco/otasco2.png" },
      { url: "/imgs/otasco/otasco3.png" },
      { url: "/imgs/otasco/otasco4.png" },
    ],
  },
];


// Design projects

export const DesignProjectsItems = [
  {
    id: "1",
    url: "imgs/ihatins/ihat5.png",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-ihatins",
    // icon: {
    //   Icon: FaGithub,
    //   hrefUrl: "/1",
    //   iconName: "Github",
    //   style: "hover:text-grey",
    // },
    images: [
      { url: "/imgs/ihatins/ihat1.png" },
      { url: "/imgs/ihatins/ihat2.jpg" },
      { url: "/imgs/ihatins/ihat3.jpg" },
    ],
  },
  {
    id: "2",
    url: "imgs/west/west1.png",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-west",
    images: [
      { url: "/imgs/west/west2.jpg" },
      { url: "/imgs/west/west3.jpg" },
      { url: "/imgs/west/west4.png" },
    ],
  },
  {
    id: "3",
    url: "imgs/wed/wed1.png",
    title: "Networking Opportunities",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgStyle: "bg-wed",
    images: [
      { url: "/imgs/wed/wed2.png" },
      { url: "/imgs/wed/wed3.png" },
      { url: "/imgs/wed/wed4.jpg" },
    ],
  },
];
