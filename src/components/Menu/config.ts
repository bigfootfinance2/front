import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.bigfootfinance.io/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x70219E2c64F32517d4271f74445757BF7eC91AD2',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.bigfootfinance.io/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x70219E2c64F32517d4271f74445757BF7eC91AD2',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: '/bush',
  },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/bigfootfinance',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x70219E2c64F32517d4271f74445757BF7eC91AD2',
        target: '_blank',
      },
      // {
      //   label: 'Token',
      //   href: 'https://doc.bigfootfinance.io/tokennomics/bigfoot-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.bigfootfinance.io/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.bigfootfinance.io/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/bigfoot',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/bigfoot/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/BigFootFinance',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.bigfootfinance.io/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://bigfootfinance.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/bigfootfinance',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/bigfootfinancechat',
        target: '_blank',
      },
    ],
  },
]

export default config
