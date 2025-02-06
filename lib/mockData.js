export const metrics = {
  totalUsers: 1245678,
  activeUsers: 892345,
  totalStreams: 15789432,
  revenue: 2456789,
  topArtist: "Taylor Swift",
  monthlyGrowthRate: 8.5,
  averageDailyStreams: 526314,
  premiumUsers: 678543,
  totalPlaylists: 3456789
};

export const streams = [
  {
    id: 1,
    songName: "Anti-Hero",
    artist: "Taylor Swift",
    dateStreamed: "2024-02-01",
    streamCount: 892345,
    userId: "U78901",
    albumArt: "/artists/taylor.jpg",
    genre: "Pop",
    duration: "3:21",
    platform: "Mobile App"

  },
  {
    id: 2,
    songName: "Flowers",
    artist: "Miley Cyrus",
    dateStreamed: "2024-02-02",
    streamCount: 785432,
    userId: "U78902",
    albumArt: "/artists/miley.jpg",
    genre: "Pop",
    duration: "3:20",
    platform: "Web Player"

  },
  {
    id: 3,
    songName: "Last Night",
    artist: "Morgan Wallen",
    dateStreamed: "2024-02-03",
    streamCount: 654321,
    userId: "U78903",
    albumArt: "/artists/morgan.jpg",
    genre: "Country",
    duration: "2:58",
    platform: "Desktop App"
  },
  {
    id: 4,
    songName: "Rich Flex",
    artist: "Drake & 21 Savage",
    dateStreamed: "2024-02-04",
    streamCount: 543210,
    userId: "U78904",
    albumArt: "/artists/drake.jpg",
    genre: "Hip Hop",
    duration: "3:38",
    platform: "Mobile App"
  },
  {
    id: 5,
    songName: "Unholy",
    artist: "Sam Smith & Kim Petras",
    dateStreamed: "2024-02-05",
    streamCount: 432109,
    userId: "U78905",
    albumArt: "/artists/kimsam.jpg",
    genre: "Pop",
    duration: "2:36",
    platform: "Web Player"
  }
];

export const userGrowth = [
  { month: "2023-03", totalUsers: 856432, activeUsers: 654321, premiumUsers: 423456 },
  { month: "2023-04", totalUsers: 892345, activeUsers: 678543, premiumUsers: 445678 },
  { month: "2023-05", totalUsers: 923456, activeUsers: 701234, premiumUsers: 467890 },
  { month: "2023-06", totalUsers: 978654, activeUsers: 745678, premiumUsers: 489012 },
  { month: "2023-07", totalUsers: 1023456, activeUsers: 789432, premiumUsers: 512345 },
  { month: "2023-08", totalUsers: 1078943, activeUsers: 823456, premiumUsers: 534567 },
  { month: "2023-09", totalUsers: 1123567, activeUsers: 856789, premiumUsers: 556789 },
  { month: "2023-10", totalUsers: 1167890, activeUsers: 878901, premiumUsers: 578901 },
  { month: "2023-11", totalUsers: 1198765, activeUsers: 901234, premiumUsers: 601234 },
  { month: "2023-12", totalUsers: 1223456, activeUsers: 923456, premiumUsers: 623456 },
  { month: "2024-01", totalUsers: 1234567, activeUsers: 945678, premiumUsers: 645678 },
  { month: "2024-02", totalUsers: 1245678, activeUsers: 967890, premiumUsers: 678543 }
];

export const topSongs = [
  { name: "Anti-Hero", artist: "Taylor Swift", streams: 892345, genre: "Pop", trend: 12 },
  { name: "Flowers", artist: "Miley Cyrus", streams: 785432, genre: "Pop", trend: 8 },
  { name: "Last Night", artist: "Morgan Wallen", streams: 654321, genre: "Country", trend: -3 },
  { name: "Rich Flex", artist: "Drake & 21 Savage", streams: 543210, genre: "Hip Hop", trend: 5 },
  { name: "Unholy", artist: "Sam Smith & Kim Petras", streams: 432109, genre: "Pop", trend: -2 }
];

export const revenueDistribution = {
  subscriptions: 1967432,
  ads: 489357,
  merchandise: 156789,
  events: 98765
};

export const genreDistribution = {
  Pop: 45,
  "Hip Hop": 25,
  Rock: 15,
  Country: 10,
  Electronic: 5
};

export const platformUsage = {
  "Mobile App": 55,
  "Web Player": 25,
  "Desktop App": 20
};

export const userEngagement = {
  averageSessionDuration: 42, // minutes
  songsPerSession: 12,
  playlistsPerUser: 4.5,
  shareRate: 8.2 // percentage
}; 