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
    Name: "Projects",
    path: "/webprojects",
  },
  // {
  //   Name: "Designs",
  //   path: "/designs",
  // },
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
    url: "imgs/web/project1/project1.jpg",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgImg: "bg-project1Mockup",
    bgStyle: "bg-contain",
    // icon: {
    //   Icon: FaGithub,
    //   hrefUrl: "/1",
    //   iconName: "Github",
    //   style: "hover:text-grey",
    // },
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins1.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "imgs/web/project1/showcase1.jpg" },
      { url: "imgs/web/project1/showcase2.jpg" },
    ],
  },
  {
    id: "2",
    url: "imgs/web/project2/project2.jpg",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgImg: "bg-project2Mockup",
    bgStyle: "bg-contain",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins2.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "imgs/web/project2/showcase3.jpg" },
      { url: "imgs/web/project2/showcase4.jpg" },
    ],
  },
  {
    id: "3",
    url: "imgs/web/project3/project3.jpg",
    title: "Networking Opportunities",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgImg: "bg-project3Mockup",
    bgStyle: "bg-contain",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins3.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "imgs/web/project3/showcase5.jpg" },
      { url: "imgs/web/project3/showcase6.jpg" },
    ],
  },
  {
    id: "4",
    url: "imgs/web/project4/project4.jpg",
    title: "Professional Growth",
    description: "Lorem, ipsuidem impedit autsit nisi.",
    bgImg: "bg-project4Mockup",
    bgStyle: "bg-contain",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins4.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "imgs/web/project4/showcase7.jpg" },
      { url: "imgs/web/project4/showcase8.jpg" },
    ],
  },
  {
    id: "5",
    url: "imgs/web/project5/project5.jpg",
    title: "Strategic Planning",
    description: "Lorem, ipsuidem impedit autsit nisi. Lorem, ipsuidem impedit autsit nisi",
    bgImg: "bg-project5Mockup",
    bgStyle: "bg-contain",
    toSite: {
      siteName: "Visit site",
      hrefUrl: "https://ihatins.com",
      githubName: "Github",
      githubUrl: "https://github.com/adnanaadam/ihatins",
    },
    images: [
      { url: "imgs/web/project5/showcase9.jpg" },
      { url: "imgs/web/project5/showcase10.jpg" },
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
    bgImg: "bg-ihatins",
    bgStyle: "bg-cover",
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
    bgImg: "bg-west",
    bgStyle: "bg-cover",
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
    bgImg: "bg-wed",
    bgStyle: "bg-cover",
    images: [
      { url: "/imgs/wed/wed2.png" },
      { url: "/imgs/wed/wed3.png" },
      { url: "/imgs/wed/wed4.jpg" },
    ],
  },
];
