interface Palette {
  accent?: string;
  dark?: string;
}

export interface Playlist {
  id: string;
  title: string;
  cover: string;
  artists: string[];
  color: Palette;
  albumId?: string;
}

export interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  duration: string;
  album: string;
  albumId?: string;
  source?: string;
}
// https://downloads.khinsider.com/game-soundtracks/album/touhou-fuujinroku-mountain-of-faith
const songUrl =
  "https://kappa.vgmsite.com/soundtracks/touhou-fuujinroku-mountain-of-faith";
export const customPlaylist: Song[] = [
  {
    id: "1",
    title: "A God That Misses People ~ Romantic Fall",
    image: `${songUrl}/cover.jpg`,
    source: `${songUrl}/ygsajxfgun/02.%20A%20God%20That%20Misses%20People%20~%20Romantic%20Fall.mp3`,
    duration: "4:26",
    artists: ["ZUN"],
    albumId: "1",
    album: "Touhou 10 ~ Mountain of Faith",
  },
  {
    id: "2",
    title: "The Gensokyo the Gods Loved",
    image: `${songUrl}/cover.jpg`,
    source: `${songUrl}/hfwyknllcl/06.%20The%20Gensokyo%20the%20Gods%20Loved.mp3`,
    duration: "5:56",
    artists: ["ZUN"],
    albumId: "1",
    album: "Touhou 10 ~ Mountain of Faith",
  },
  {
    id: "3",
    title: "Fall of Fall ~ Autumnal Waterfall",
    image: `${songUrl}/cover.jpg`,
    source: `${songUrl}/esyuzhengn/08.%20Fall%20of%20Fall%20~%20Autumnal%20Waterfall.mp3`,
    duration: "6:47",
    artists: ["ZUN"],
    albumId: "1",
    album: "Touhou 10 ~ Mountain of Faith",
  },
  {
    id: "4",
    title: "Yokai Mountain ~ Mysterious Mountain",
    image: `${songUrl}/cover.jpg`,
    source: `${songUrl}/kdcrntsfab/09.%20Youkai%20Mountain%20~%20Mysterious%20Mountain.mp3`,
    duration: "2:47",
    artists: ["ZUN"],
    albumId: "1",
    album: "Touhou 10 ~ Mountain of Faith",
  },
  {
    id: "5",
    title: "Cemetery of Onbashira ~ Grave of Being",
    image: `${songUrl}/cover.jpg`,
    source: `${songUrl}/ifiwggbenl/12.%20Cemetery%20of%20Onbashira%20~%20Grave%20of%20Being.mp3`,
    duration: "2:12",
    artists: ["ZUN"],
    albumId: "1",
    album: "Touhou 10 ~ Mountain of Faith",
  },
];

const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" },
};

const imageUrl = "https://res.cloudinary.com/dp3ppkxo5/image/upload";

export const playlists: Playlist[] = [
  {
    id: "7",
    color: { accent: "#d47917", dark: "#d47917" },
    title: "Touhou 10 ~ Mountain of Faith",
    cover: `${songUrl}/cover.jpg`,
    artists: ["ZUN"],
    albumId: "1",
  },
  {
    id: "1",
    color: colors.teal,
    title: "Electronic Party",
    cover: `${imageUrl}/v1693776174/spotify-astro/playlist_1_yci5uf.jpg`,
    artists: ["Avicii", "Alok"],
  },
  {
    id: "2",
    color: colors.green,
    title: "Trance",
    cover: `${imageUrl}/v1693776174/spotify-astro/playlist_2_f9ymlx.jpg`,
    artists: ["Tiesto", "Armin Van Buuren"],
  },
  {
    id: "3",
    color: colors.rose,
    title: "Trap Vibes",
    cover: `${imageUrl}/v1693776175/spotify-astro/playlist_3_grshca.jpg`,
    artists: ["Post Malone", "Travis Scott", "21 savage"],
  },
  {
    id: "4",
    color: colors.red,
    title: "Beatles Classics",
    // cover: `${imageUrl}/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg`,
    cover: "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25",
    artists: ["The Beatles"],
  },
  {
    id: "5",
    color: colors.pink,
    title: "Electronic Dance",
    cover: `${imageUrl}/v1693776175/spotify-astro/playlist_5_erjyb7.jpg`,
    artists: ["Deadmau5"],
  },
  {
    id: "6",
    color: colors.gray,
    title: "Cow songs",
    cover: `${imageUrl}/v1693776474/spotify-astro/R-15112137-1586815179-1911_fsyl58.jpg`,
    artists: ["Saint Hilda", "Canada Buffalo"],
  },
];

const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `${imageUrl}/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `${imageUrl}/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `${imageUrl}/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `${imageUrl}/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `${imageUrl}/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];
