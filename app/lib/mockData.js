export const metrics = {
  totalUsers: 1000,
  activeUsers: 200,
  totalStreams: 5000,
  revenue: 10000,
  topArtist: "Artist X",
};

export const streams = [
  { id: 1, songName: "Song A", artist: "Artist X", dateStreamed: "2024-02-01", streamCount: 500, userId: "U12345" },
  { id: 2, songName: "Song B", artist: "Artist Y", dateStreamed: "2024-02-02", streamCount: 320, userId: "U67890" },
  { id: 3, songName: "Song C", artist: "Artist Z", dateStreamed: "2024-02-03", streamCount: 450, userId: "U11111" },
  { id: 4, songName: "Song D", artist: "Artist X", dateStreamed: "2024-02-04", streamCount: 600, userId: "U22222" },
  { id: 5, songName: "Song E", artist: "Artist Y", dateStreamed: "2024-02-05", streamCount: 280, userId: "U33333" },
];

export const userGrowth = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2023, i, 1).toISOString().slice(0, 7),
  totalUsers: Math.floor(800 + i * 50 + Math.random() * 100),
  activeUsers: Math.floor(150 + i * 20 + Math.random() * 50),
}));

export const topSongs = [
  { name: "Song A", streams: 2500 },
  { name: "Song B", streams: 2000 },
  { name: "Song C", streams: 1800 },
  { name: "Song D", streams: 1600 },
  { name: "Song E", streams: 1400 },
];

export const revenueDistribution = {
  subscriptions: 7500,
  ads: 2500,
}; 