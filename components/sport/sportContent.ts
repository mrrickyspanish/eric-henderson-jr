import { Sport } from "./SportContext";

export interface SportNewsItem {
  title: string;
  source: string;
  url: string;
  date?: string;
  type?: "article" | "social";
}

export interface SportQuote {
  text: string;
  author: string;
}

export interface SportGame {
  date: string;
  opponent: string;
  location: string;
  time: string;
  type?: string;
  marquee?: 'Rivalry' | 'Top Seed';
}

export interface SportContent {
  name: string;
  position: string;
  tagline: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  heroImage: string;
  hudl: {
    highlight: string;
    games?: Array<{ label: string; url: string }>;
  };
  news: SportNewsItem[];
  quotes: SportQuote[];
  schedule: SportGame[];
}

export const sportContent: Record<Sport, SportContent> = {
  football: {
    name: "Lamarin Powell",
    position: "Running Back",
    tagline: "Speed. Precision. Domination.",
    description:
      "Elite running back combining explosive speed with precise route running. A game-changer on the field who consistently delivers when it matters most.",
    stats: [
      { label: "Receptions", value: "47" },
      { label: "Receiving Yards", value: "892" },
      { label: "Touchdowns", value: "11" },
      { label: "Yards/Reception", value: "19.0" },
      { label: "Catch Rate", value: "68%" },
      { label: "40-Yard Dash", value: "4.42s" },
    ],
    colors: {
      primary: "#D32F2F",
      secondary: "#1976D2",
      accent: "#FFC107",
      gradient: "from-slate-900 via-blue-900 to-slate-800",
    },
    heroImage:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1920&q=80",
    hudl: {
      highlight:
        "https://www.hudl.com/embed/video/3/22844940/67708d98bb50d1ba2e23de22",
      games: [
        {
          label: "SHOWOUT GAME",
          url: "https://www.hudl.com/video/3/22844940/67708d98bb50d1ba2e23de22",
        },
        {
          label: "Fenton Sophomore Football",
          url: "https://www.hudl.com/video/3/22844940/67707961020a50150c515b0f",
        },
        {
          label: "34-yard TD vs East Aurora",
          url: "https://www.hudl.com/video/3/22844940/68d925cb2f16a6ddfe980de0",
        },
        {
          label: "vs Larkin High School",
          url: "https://www.hudl.com/video/3/22844940/68e1b8eac314b519d22ff17d",
        },
        {
          label: "vs Barrington High School",
          url: "https://www.hudl.com/video/3/22844940/6908b1205a71b8ebb86b51f8",
        },
        {
          label: "South Elgin vs Elgin High",
          url: "https://www.hudl.com/video/3/22844940/687ec086e90c75b6870ef318",
        },
        {
          label: "vs Larkin High School (2)",
          url: "https://www.hudl.com/video/3/22844940/687ecc71e90c75b6870ef4d8",
        },
        {
          label: "vs Fenton High School",
          url: "https://www.hudl.com/video/3/22844940/68b62590e95daaaf5017959d",
        },
        {
          label: "vs Grayslake North",
          url: "https://www.hudl.com/video/3/22844940/68c8a8a9c4628c0a80337e4f",
        },
        {
          label: "vs West Aurora",
          url: "https://www.hudl.com/video/3/22844940/68c8ad66c4628c0a8033887d",
        },
        {
          label: "vs Riverside Brookfield",
          url: "https://www.hudl.com/video/3/22844940/68cef806c12d426b65bfafe0",
        },
      ],
    },
    news: [
      {
        title: "LaMarin Powell (34 yards, 5 carries) helps Elgin secure playoff berth in 25-6 win",
        source: "Daily Herald",
        url: "https://www.dailyherald.com/20251011/prep-football/elgin-glenbard-south-lake-park-fenton-st-francis-naperville-central-secure-victories/",
        date: "Oct 11, 2025",
        type: "article",
      },
      {
        title: "LaMarin Powell explodes for 100 yards, 2 TDs including 80-yard score",
        source: "Daily Herald",
        url: "https://www.dailyherald.com/20250913/prep-football/glenbard-south-montini-fenton-glenbard-east-south-elgin-secure-football-victories/",
        date: "Sept 13, 2025",
        type: "article",
      },
      {
        title: "LaMarin Powell (85 yards, 2 TDs) powers Elgin offense in Week 3 scouting report",
        source: "Daily Herald",
        url: "https://www.dailyherald.com/20250911/prep-football/scouting-week-3-fox-valley-football-games-3/",
        date: "Sept 11, 2025",
        type: "article",
      },
      {
        title: "LaMarin Powell's 87-yard TD run showcases breakaway speed in Fox Valley roundup",
        source: "Daily Herald",
        url: "https://www.dailyherald.com/20250830/prep-football/dupage-county-fox-valley-football-roundup-lake-park-impresses-in-opener-kaneland-wins-big/",
        date: "Aug 30, 2025",
        type: "article",
      },
      {
        title: "Athlete of the Week: LaMarin Powell",
        source: "Elgin Athletics (Facebook)",
        url: "https://www.facebook.com/elginathletics/posts/lamarin-powell-from-the-varsity-football-team-is-our-athlete-of-the-week-for-101/1461423615453563/",
        date: "Oct 18, 2025",
        type: "social",
      },
      {
        title: "LaMarin Powell Football Highlights",
        source: "Elgin Athletics (Instagram)",
        url: "https://www.instagram.com/p/DQKe5DRgSep/",
        date: "Oct 2025",
        type: "social",
      },
      {
        title: "District U-46 Buzz: Featuring LaMarin Powell",
        source: "Elgin Athletics (Instagram)",
        url: "https://www.instagram.com/reel/DQbntDkES3e/",
        date: "Nov 2025",
        type: "social",
      },
    ],
    quotes: [
      {
        text: "LaMarin is the most competitive athlete I've coached in 15 years.",
        author: "Coach Thompson",
      },
      {
        text: "Every rep matters to him. He practices like he’s already in a college program.",
        author: "Assistant Football Coach",
      },
      {
        text: "Explosive athlete who adapts to any scheme. Coaches will love his versatility.",
        author: "Recruiting Coordinator",
      },
    ],
    schedule: [
      {
        date: "Sept 5, 2025",
        opponent: "vs Schaumburg",
        location: "Hoffman Estates HS",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Sept 12, 2025",
        opponent: "@ New Trier",
        location: "New Trier HS",
        time: "7:30 PM",
        type: "Non-Conference",
      },
      {
        date: "Sept 19, 2025",
        opponent: "vs Wheeling",
        location: "Hoffman Estates HS",
        time: "7:00 PM",
        type: "Conference",
      },
    ],
  },

  basketball: {
    name: "LaMarin Powell",
    position: "Shooting Guard",
    tagline: "Shoot. Score. Soar.",
    description:
      "Dynamic shooting guard with exceptional court vision and a deadly three-point shot. Known for clutch performances and defensive tenacity.",
    stats: [
      { label: "Points Per Game", value: "4.2" },
      { label: "Assists Per Game", value: "1.8" },
      { label: "Rebounds Per Game", value: "2.1" },
      { label: "Steals Per Game", value: "1.5" },
    ],
    colors: {
      primary: "#FF6B35",
      secondary: "#F7931E",
      accent: "#4ECDC4",
      gradient: "from-gray-900 via-slate-800 to-blue-900",
    },
    heroImage:
      "/LP_hoops_4.png",
    hudl: {
      highlight:
        "https://www.hudl.com/embed/video/3/22844940/689939e60927f971853ff1a7",
      games: [
        {
          label: "Offense/Playmaking Highlights",
          url: "https://www.hudl.com/video/3/22844940/689939e60927f971853ff1a7",
        },
        {
          label: "Boys' Varsity Basketball",
          url: "https://www.hudl.com/video/3/22844940/6886f567d9745bc0d261adcc",
        },
        {
          label: "vs Streamwood High School",
          url: "https://www.hudl.com/video/3/22844940/6886fe702135f95f67066e4c",
        },
        {
          label: "vs Hoffman Estates HS",
          url: "https://www.hudl.com/video/3/22844940/68870307d9745bc0d261ae72",
        },
      ],
    },
    news: [
      {
        title: "LaMarin Powell - 2028 Point Guard Profile",
        source: "Prep Hoops Illinois",
        url: "https://prephoops.com/player/lamar-powell/",
        date: "2025",
        type: "article",
      },
      {
        title: "LaMarin Powell Hudl Basketball Profile",
        source: "Hudl",
        url: "https://www.hudl.com/profile/22844940/LaMarin-Powell/about",
        date: "2025",
        type: "article",
      },
      {
        title: "Athlete of the Week: LaMarin Powell",
        source: "Elgin Athletics (Facebook)",
        url: "https://www.facebook.com/elginathletics/posts/lamarin-powell-from-the-varsity-football-team-is-our-athlete-of-the-week-for-101/1461423615453563/",
        date: "Oct 18, 2025",
        type: "social",
      },
      {
        title: "District U-46 Buzz: Featuring LaMarin Powell",
        source: "Elgin Athletics (Instagram)",
        url: "https://www.instagram.com/reel/DQbntDkES3e/",
        date: "Nov 2025",
        type: "social",
      },
    ],
    quotes: [
      {
        text: "High IQ, elite motor, and a natural leader. He impacts winning every possession.",
        author: "Head Basketball Coach",
      },
      {
        text: "Versatile guard who can score at all three levels and guard multiple positions.",
        author: "AAU Coach",
      },
      {
        text: "Scheme-versatile player who elevates teammates instantly.",
        author: "College Scout",
      },
    ],
    schedule: [
      {
        date: "Dec 2, 2025",
        opponent: "@ Maine East",
        location: "Maine East High School",
        time: "6:30 PM",
        type: "Non-Conference",
      },
      {
        date: "Dec 5, 2025",
        opponent: "@ Streamwood",
        location: "Streamwood High School",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Dec 9, 2025",
        opponent: "vs Fenton",
        location: "Elgin High School",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Dec 11, 2025",
        opponent: "vs Bartlett",
        location: "Elgin High School",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Dec 13, 2025",
        opponent: "vs Wheaton Academy",
        location: "Elgin High School",
        time: "1:00 PM",
        type: "Non-Conference",
      },
      {
        date: "Dec 16, 2025",
        opponent: "vs South Elgin",
        location: "Elgin High School",
        time: "7:00 PM",
        type: "Conference",
        marquee: "Rivalry",
      },
      {
        date: "Dec 19, 2025",
        opponent: "@ Aurora East",
        location: "Aurora East High School",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Jan 6, 2026",
        opponent: "vs West Aurora",
        location: "Elgin High School",
        time: "7:00 PM",
        type: "Conference",
      },
      {
        date: "Jan 9, 2026",
        opponent: "@ Larkin",
        location: "Larkin High School",
        time: "7:00 PM",
        type: "Conference",
        marquee: "Rivalry",
      },
      {
        date: "Jan 16, 2026",
        opponent: "vs Streamwood",
        location: "Elgin High School",
        time: "7:00 PM",
        type: "Conference",
      },
    ],
  },
};
