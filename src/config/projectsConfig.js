import NftCoverImage from "../assets/project-images/NFT/nft-cover.png";
import NftFrontImage from "../assets/project-images/NFT/nft-front.png";
import NftFirstImage from "../assets/project-images/NFT/nft-desktop.png";
import NftSecondImage from "../assets/project-images/NFT/nft-phones-1.jpg";
import NftThirdImage from "../assets/project-images/NFT/nft-phones-2.jpg";

import TreactCoverImage from "../assets/project-images/treact/treact-cover.jpg";
import TreactFrontImage from "../assets/project-images/treact/summarist-front.png";
import TreactFirstImage from "../assets/project-images/treact/summarist-desktop.png";
import TreactSecondImage from "../assets/project-images/treact/treact-phones-1.jpg";
import TreactThirdImage from "../assets/project-images/treact/treact-phones-2.png";

import EcommerceCover from "../assets/project-images/ecommerce/ecommerce-cover.png";
import EcommerceFrontImage from "../assets/project-images/ecommerce/ecommerce-front.png";
import EcommerceFirstImage from "../assets/project-images/ecommerce/ecommerce-desktop.png";
import EcommerceSecondImage from "../assets/project-images/ecommerce/ecommerce-phones-1.jpg";
import EcommerceThirdImage from "../assets/project-images/ecommerce/ecommerce-phones-2.jpg";

const projectsConfig = [
  {
    title: "NFT Marketplace",
    type: "Web App",
    description:
     "A fully responsive website using important languages and technologies for a frontend web developer. With an API I managed to add a couple of features that I consider extremely necessary for a better user experience, as skeletons loading states, animations, reusable components and many more! Inside the github page you can see that i worked in this project with branches, simulating a working environment, check it out!",
    liveLink: "https://victor-internship.vercel.app",
    githubLink: "https://github.com/victor-alvescv/victor-internship",
    coverImage: NftCoverImage,
    topImage: NftFrontImage,
    firstImage: NftFirstImage,
    secondImage: NftSecondImage,
    thirdImage: NftThirdImage,
  },
  {
    title: "Summarist",
    type: "Web App",
    description:
      "Project for an advanced internship, using authentication, Next.js, Redux, Firebase and many more! There multiple features inside this project, an audio player, API content, payment method with stripe and more. The app is responsive with animations and loading states.",
    liveLink: "https://summarist-three.vercel.app",
    githubLink: "https://github.com/victor-alvescv/Summarist",
    coverImage: TreactCoverImage,
    topImage: TreactFrontImage,
    firstImage: TreactFirstImage,
    secondImage: TreactSecondImage,
    thirdImage: TreactThirdImage,
  },
  {
    title: "Movieplus+",
    type: "Web App",
    description:
      "An E-Commerce of movies, using a created database, with self-made design, animations and many more features, one of them being the cart page. Using react I managed to make a fully responsive web app creating the best user experience in all ways. If interested check the website or the github page for more details!",
    liveLink: "https://movieplus-site.vercel.app",
    githubLink: "https://github.com/victor-alvescv/Movieplus-site",
    coverImage: EcommerceCover,
    topImage: EcommerceFrontImage,
    firstImage: EcommerceFirstImage,
    secondImage: EcommerceSecondImage,
    thirdImage: EcommerceThirdImage,
  },
];

export default projectsConfig;
