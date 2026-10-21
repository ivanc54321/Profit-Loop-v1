export interface Testimonial {
  id: string;
  name: string;
  profitBadge: string;
  milestoneTag: string;
  quote: string;
  stats: {
    today: string;
    thisMonth: string;
    lastMonth: string;
    totalProfit: string;
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ian',
    name: 'Ian',
    profitBadge: '£15,109 profit',
    milestoneTag: '£15k milestone',
    quote:
      'Finished logging the week and have managed to cross over the 15k milestone! Started February last year, only hoping to get an extra £250 a...',
    stats: {
      today: '£0',
      thisMonth: '£308',
      lastMonth: '£809',
      totalProfit: '£15,109',
    },
  },
  {
    id: 'gareth',
    name: 'Gareth',
    profitBadge: '£5,014 profit',
    milestoneTag: 'Thank you',
    quote:
      'Just over a month since the last milestone and here I am with the £5k post. This last £1k has been mostly from casino winnings. As always, than...',
    stats: {
      today: '£78',
      thisMonth: '£128',
      lastMonth: '£867',
      totalProfit: '£5,014',
    },
  },
  {
    id: 'simon-h',
    name: 'Simon H',
    profitBadge: '£4,002 profit',
    milestoneTag: '£4k milestone',
    quote:
      'Today marks a milestone for me, though it\'s been a steady affair. 2 months short of 2 years to get to this point. I dip in and out, not making the...',
    stats: {
      today: '£11',
      thisMonth: '£45',
      lastMonth: '£238',
      totalProfit: '£4,002',
    },
  },
  {
    id: 'vh',
    name: 'VH',
    profitBadge: '£1,183 profit',
    milestoneTag: 'Thank you',
    quote:
      'So I started at the end of last month and was so excited that I immediately jumped in. I cannot believe that within even one full month I am making extra...',
    stats: {
      today: '£81',
      thisMonth: '£380',
      lastMonth: '£217',
      totalProfit: '£1,183',
    },
  },
];

export interface BookmakerOffer {
  id: string;
  bookmaker: string;
  logo: string;
  badge: string;
  deposit: string;
  freeBet: string;
  expectedProfit: string;
  difficulty: 'Easy' | 'Medium';
  terms: string;
}

export const SIGNUP_OFFERS: BookmakerOffer[] = [
  {
    id: 'bet365',
    bookmaker: 'Bet365',
    logo: '🟢',
    badge: 'Popular',
    deposit: '£10',
    freeBet: '£30 in Free Bets',
    expectedProfit: '£24.50',
    difficulty: 'Easy',
    terms: 'Min deposit £10. Bet £10 at odds 1.5+ to receive 3x £10 bet credits.',
  },
  {
    id: 'skybet',
    bookmaker: 'Sky Bet',
    logo: '🔵',
    badge: 'High Value',
    deposit: '£10',
    freeBet: '£40 in Free Bets',
    expectedProfit: '£32.80',
    difficulty: 'Easy',
    terms: 'Bet £10 get 4x £10 free bet tokens. Valid 30 days.',
  },
  {
    id: 'coral',
    bookmaker: 'Coral',
    logo: '🟡',
    badge: 'Quick Unlock',
    deposit: '£5',
    freeBet: '£20 Free Bet',
    expectedProfit: '£16.20',
    difficulty: 'Easy',
    terms: 'Min stake £5 at min odds 1.50. Free bet valid for 7 days.',
  },
  {
    id: 'betfair',
    bookmaker: 'Betfair Sportsbook',
    logo: '🟠',
    badge: 'Essential',
    deposit: '£10',
    freeBet: '£50 Free Bet Promo',
    expectedProfit: '£37.50',
    difficulty: 'Easy',
    terms: 'Bet £10 at evens (2.0) or greater. Get £50 free sports bets.',
  },
  {
    id: 'williamhill',
    bookmaker: 'William Hill',
    logo: '🔷',
    badge: 'Verified',
    deposit: '£10',
    freeBet: '£30 in Free Bets',
    expectedProfit: '£23.90',
    difficulty: 'Easy',
    terms: 'Stake £10 on sports. 3x £10 free bets credited upon settlement.',
  },
  {
    id: 'paddypower',
    bookmaker: 'Paddy Power',
    logo: '🌲',
    badge: 'Cash Refund',
    deposit: '£20',
    freeBet: '£20 Money Back as Cash',
    expectedProfit: '£19.20',
    difficulty: 'Easy',
    terms: 'Bet £20, if it loses get £20 cash back with zero wagering requirements.',
  },
];

export interface OddsMatcherFixture {
  id: string;
  time: string;
  event: string;
  league: string;
  betType: string;
  bookmaker: string;
  backOdds: number;
  exchange: string;
  layOdds: number;
  rating: number; // e.g. 98.4%
  snrReturn: string;
}

export const SAMPLE_FIXTURES: OddsMatcherFixture[] = [
  {
    id: '1',
    time: 'Today 19:45',
    event: 'Arsenal vs Bayern Munich',
    league: 'UEFA Champions League',
    betType: 'Arsenal Win',
    bookmaker: 'Bet365',
    backOdds: 2.10,
    exchange: 'Betfair Exchange',
    layOdds: 2.12,
    rating: 98.6,
    snrReturn: '£37.80 (75.6%)',
  },
  {
    id: '2',
    time: 'Today 20:00',
    event: 'Real Madrid vs Man City',
    league: 'UEFA Champions League',
    betType: 'Draw',
    bookmaker: 'Sky Bet',
    backOdds: 3.50,
    exchange: 'Smarkets',
    layOdds: 3.55,
    rating: 98.1,
    snrReturn: '£39.10 (78.2%)',
  },
  {
    id: '3',
    time: 'Tomorrow 17:30',
    event: 'Liverpool vs Aston Villa',
    league: 'Premier League',
    betType: 'Liverpool Win',
    bookmaker: 'Coral',
    backOdds: 1.65,
    exchange: 'Betdaq',
    layOdds: 1.67,
    rating: 98.8,
    snrReturn: '£36.50 (73.0%)',
  },
  {
    id: '4',
    time: 'Tomorrow 19:45',
    event: 'PSG vs Barcelona',
    league: 'UEFA Champions League',
    betType: 'Over 2.5 Goals',
    bookmaker: 'William Hill',
    backOdds: 1.80,
    exchange: 'Matchbook',
    layOdds: 1.82,
    rating: 98.5,
    snrReturn: '£37.20 (74.4%)',
  },
];
