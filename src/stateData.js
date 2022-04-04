import {
  Featured3,
  Featured2,
  Featured1,
  Faq,
  Faq1,
  Faq2,
  Faq3,
  Faq4,
  JukeMag,
  JukeAlpha,
  JukeHone,
  JukeRobin
} from "./imageImports";

const toggleNav = false;
const loader = true;
const modalOpen = false;
const modalDataSingle = {};

const featuresArray = [
  {
    title: "Ownership Rights",
    content: "Owning a jukeboy gives you rights to to showcase your Nft either on your social media pfp or in the metaverse.",
    thumbnail: Featured3
  },
  {
    title: "Exclusive Events",
    content: "Holding your minted Nft gives you access to exclusive future drops and events.",
    thumbnail: Featured2
  },
  {
    title: "Promotion and Support",
    content: "Talented holders stand a chance to get support from the jukeboys team.",
    thumbnail: Featured1
  }
];

const teamMembers = [
  {
    name: "JukeMag",
    content: "A talented artist with 6 years of experience and crypto enthusiast since 2020.",
    avatar: JukeMag,
    twitter_link: "https://twitter.com/mag_Designz"
  },
  {
    name: "JukeAlpha",
    content: "Talent and brand manager with 9 years experience in digital marketing. Passionate about tech, art, blockchain and music.",
    avatar: JukeAlpha,
    twitter_link: "https://mobile.twitter.com/AK3H23"
  },
  {
    name: "JukeHone",
    content: "Crypto analyst, mentor, developer with 12 years experience in tech and 2 years experience exploring smart contracts.",
    avatar: JukeHone,
    twitter_link: "https://twitter.com/serlekan"
  },
  {
    name: "JukeRobin",
    content: "Vast experience in marketing and community management United States. Jpeg Collector.",
    avatar: JukeRobin,
    twitter_link: "https://twitter.com/nftstring1199"
  }
];

const faqs = [
  {
    title: "Where Can i Buy Jukeboys Nft And Be A Part Of The Community?",
    content: "Minting date and process will be published soon. We will post the details ahead of time on our Discord server and Twitter account. The whitelist will be reserved for early adopters and the fan base community. After the mint is over, you can trade on secondary market platforms.",
    bgColor: "bg-[#f9e5ff]",
    icon: Faq2
  },
  {
    title: "Are There Benefits To Holding Multiple Jukeboys Nft?",
    content: "Yes, there will be airdrops in the future and other planned utilities. So each Jukeboy NFT that you hold will give you more and more benefits. More details TBA.",
    bgColor: "bg-[#e5f1fe]",
    icon: Faq
  },
  {
    title: "How Much Does Minting Of A Jukeboy Nft Cost?",
    content: "The cost of Jukeboy Nft will be determined by the community, ranging from 60 - 70ADA.",
    bgColor: "bg-[#fdf1e5]",
    icon: Faq1
  },
  {
    title: "What Wallet Is Advisable To Use For Minting?",
    content: "We are launching on Cardano blockchain, you can use wallets such as Nami, Deadalus, Yoroi, CCvault. Do not send Ada from any exchange (Binance, Coinbase, FTX e.t.c.) or your funds will be lost.",
    bgColor: " bg-[#e5fbfe]",
    icon: Faq3
  },
  {
    title: "How To Get Whitelist?",
    content: "Whitelist will be given via giveaways, contests, helping/contributing to the community and personal interested invites will get you whitelist spot (Note: We are not imposing this on anyone).",
    bgColor: " bg-[#eeeeee]",
    icon: Faq4
  }
];

const modalData = [
  {
    id: 1,
    title: "Terms & Conditions",
    content: "Jukeboys is a digital artwork (NFT) on the Cardano blockchain. Users are entirely responsible for the safety and management of their Cardano wallets and validations of all transactions. Because Jukeboys operates via the Cardano blockchain, Jukeboys cannot reverse, delete or restore any transactions."
  },
  {
    id: 2,
    title: "Investment Advice Disclamer",
    content: "Jukeboys information does not constitute investment advice, financial advice, trading advice, or any other type of advice, and you should not treat any of its content as such."
  },
  {
    id: 3,
    title: "Information",
    content: "Jukeboys will make every effort to ensure the accuracy of the information on the Discord channel, but it will accept no responsibility for any missing or incorrect information. All information on Jukeboys is provided \"as is\". You acknowledge that you are using any and all information available on this discord at your own risk."
  }
];

const roadmapData = [
  {
    title: "Q1 2022",
    contents: [
      "Social media accounts",
      "Website",
      "Creating high 3D Nft traits",
      "Discord",
      "Review all 5000 Nfts",
      "Metadata Testing",
      "Verify on Secondary Markets",
      "Launch"
    ],
    bgColor: "bg-[#ec6833]"
  },
  {
    title: "Q2:",
    contents: [
      "Token Preview",
      "Ownership wallet verification",
      "Marketing and collaborations",
      "Token drop",
      "Utility"
    ],
    bgColor: "bg-[#298ded]"
  },
  {
    title: "Q3:",
    contents: [
      "Community Development and Events",
      "Nft Evolution",
      "?",
      "?"
    ],
    bgColor: "bg-[#3d8267]"
  },
  {
    title: "Q4:",
    contents: [
      "?"
    ],
    bgColor: "bg-[#9a9a9a]"
  }
];

export {
  toggleNav,
  loader,
  featuresArray,
  teamMembers,
  faqs,
  modalOpen,
  modalData,
  modalDataSingle,
  roadmapData
}