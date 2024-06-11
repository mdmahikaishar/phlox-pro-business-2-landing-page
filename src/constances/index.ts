import { IconType } from "react-icons";
import { BiCloud } from "react-icons/bi";

export interface IHero {
  name: string,
  short: string,
  highlight: string,
  des: string,
  button: string,
  img: string,
}

export const HERO: IHero[] = [
  {
    short: "17 years of experience",
    name: `We Are a <br/>Web Design <span class="text-green-600">Agency</span>`,
    highlight: "Agency",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum officiis quae provident quia sint aperiam ea vel distinctio, quod sit harum deserunt laborum quisquam? Enim modi non aliquid eaque laborum cupiditate architecto et distinctio sint amet, minima libero expedita nisi. Sequi ducimus fuga cum? Minima nisi quidem obcaecati excepturi officiis!",
    button: "Read More",
    img: "/img1-822x822.jpg",
  },
  {
    name: "17 years of experience",
    short: "We Are a Web Design ",
    highlight: "Agency",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum officiis quae provident quia sint aperiam ea vel distinctio, quod sit harum deserunt laborum quisquam? Enim modi non aliquid eaque laborum cupiditate architecto et distinctio sint amet, minima libero expedita nisi. Sequi ducimus fuga cum? Minima nisi quidem obcaecati excepturi officiis!",
    button: "Read More",
    img: "/img1-822x822.jpg",
  },
  {
    name: "17 years of experience",
    short: "We Are a Web Design ",
    highlight: "Agency",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum officiis quae provident quia sint aperiam ea vel distinctio, quod sit harum deserunt laborum quisquam? Enim modi non aliquid eaque laborum cupiditate architecto et distinctio sint amet, minima libero expedita nisi. Sequi ducimus fuga cum? Minima nisi quidem obcaecati excepturi officiis!",
    button: "Read More",
    img: "/img1-822x822.jpg",
  }
]

export interface IService {
  icon: IconType,
  name: string,
  des: string,
}

export const SERVICES: IService[] = [
  { icon: BiCloud, name: "Speed", des: "Far far awau. bejod tje wprd ,pimtaoms far frp,tje cpimtroes vpla;oa separated.." },
  { icon: BiCloud, name: "Cloud Solutions", des: "Far far awau. bejod tje wprd ,pimtaoms far frp,tje cpimtroes vpla;oa separated.." },
  { icon: BiCloud, name: "Website Design", des: "Far far awau. bejod tje wprd ,pimtaoms far frp,tje cpimtroes vpla;oa separated.." },
  { icon: BiCloud, name: "Online Markting", des: "Far far awau. bejod tje wprd ,pimtaoms far frp,tje cpimtroes vpla;oa separated.." },
]

export interface IProject {
  img: string;
}

export const PROJECTS: IProject[] = [
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
  { img: "/vite.svg" },
]

export const WHAT_WE_DO: string[] = [
  "far far way, behind the word mountains",
  "large language ocean",
  "far from the countires vokalia and consanita",
]

export interface IPricing {
  type?: "primary" | "secondary",
  name: string,
  des: string,
  price: string,
  priceFor: string,
  features: string[],
}

export const PRICING: IPricing[] = [
  {
    name: "Designing",
    des: "All Designs",
    price: "10",
    priceFor: "Design",
    features: [
      "Creative Design Enabled",
      "Vibrant Color usage",
      "Eye Catching Design",
      "Extrem Typography",
      "Expectional Desing",
    ]
  },
  {
    type: "primary",
    name: "Development",
    des: "WordPress Projects",
    price: "15",
    priceFor: "Design",
    features: [
      "Creative Design Enabled",
      "Vibrant Color usage",
      "Eye Catching Design",
      "Extrem Typography",
      "Expectional Desing",
    ]
  },
  {
    name: "SEO",
    des: "Web Products",
    price: "10",
    priceFor: "Product",
    features: [
      "Creative Design Enabled",
      "Vibrant Color usage",
      "Eye Catching Design",
      "Extrem Typography",
      "Expectional Desing",
    ]
  }
]


export interface IBlog {
  name: string,
  date: string,
  img: string,
  userName: string,
}

export const BLOG: IBlog[] = [
  { name: "Marketing", date: "May 24, 2018", img: "/vite.svg", userName: "Alex"},
  { name: "Rest Durning Working Hour", date: "May 24, 2018", img: "/vite.svg", userName: "Alex"},
  { name: "Develop Your Startup Idea", date: "May 24, 2018", img: "/vite.svg", userName: "Alex"},
]