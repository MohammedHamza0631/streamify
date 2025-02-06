'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { streams } from '@/lib/mockData';
import useDebounce from '@/hooks/useDebounce';

export default function DataTable() {
  const [data, setData] = useState(streams);
  const [sortConfig, setSortConfig] = useState({ key: 'streamCount', direction: 'desc' });
  const [filterText, setFilterText] = useState('');
  const [filters, setFilters] = useState({
    genre: 'all',
    platform: 'all'
  });

  // Debounce filter text changes
  const debouncedFilterText = useDebounce(filterText, 500);

  // Memoize unique genres and platforms
  const genres = useMemo(() => [...new Set(streams.map(item => item.genre))], []);
  const platforms = useMemo(() => [...new Set(streams.map(item => item.platform))], []);

  // Memoize sort function
  const sortData = useCallback((key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  }, [data, sortConfig.key, sortConfig.direction]);

  // Memoize filter handlers
  const handleFilterChange = useCallback((e) => {
    setFilterText(e.target.value);
  }, []);

  const handleGenreChange = useCallback((e) => {
    setFilters(prev => ({ ...prev, genre: e.target.value }));
  }, []);

  const handlePlatformChange = useCallback((e) => {
    setFilters(prev => ({ ...prev, platform: e.target.value }));
  }, []);

  // Memoize filtered data
  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = 
        item.songName.toLowerCase().includes(debouncedFilterText.toLowerCase()) ||
        item.artist.toLowerCase().includes(debouncedFilterText.toLowerCase()) ||
        item.userId.toLowerCase().includes(debouncedFilterText.toLowerCase());
      
      const matchesGenre = filters.genre === 'all' || item.genre === filters.genre;
      const matchesPlatform = filters.platform === 'all' || item.platform === filters.platform;
      
      return matchesSearch && matchesGenre && matchesPlatform;
    });
  }, [data, debouncedFilterText, filters.genre, filters.platform]);

  // Memoize sort icon renderer
  const getSortIcon = useCallback((key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? 
        <ChevronUpIcon className="w-4 h-4" /> : 
        <ChevronDownIcon className="w-4 h-4" />;
    }
    return null;
  }, [sortConfig.key, sortConfig.direction]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dashboard-card rounded-xl overflow-hidden"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-white">Recent Streams</h3>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/60">Last 30 Days</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-4 sm:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by song, artist, or user ID..."
              className="w-full pl-10 pr-4 py-2 bg-dashboard-hover border-none rounded-lg text-white placeholder-white/60 focus:ring-1 focus:ring-accent-mint"
              value={filterText}
              onChange={handleFilterChange}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
          </div>

          <div className="flex gap-2">
            <select
              value={filters.genre}
              onChange={handleGenreChange}
              className="bg-dashboard-hover text-white border-none rounded-lg px-4 py-2 focus:ring-1 focus:ring-accent-mint"
            >
              <option value="all">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>

            <select
              value={filters.platform}
              onChange={handlePlatformChange}
              className="bg-dashboard-hover text-white border-none rounded-lg px-4 py-2 focus:ring-1 focus:ring-accent-mint"
            >
              <option value="all">All Platforms</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase">
                  Album Art
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider cursor-pointer"
                  onClick={() => sortData('songName')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Song</span>
                    {getSortIcon('songName')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider cursor-pointer"
                  onClick={() => sortData('artist')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Artist</span>
                    {getSortIcon('artist')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider cursor-pointer"
                  onClick={() => sortData('genre')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Genre</span>
                    {getSortIcon('genre')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider cursor-pointer"
                  onClick={() => sortData('dateStreamed')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    {getSortIcon('dateStreamed')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider cursor-pointer"
                  onClick={() => sortData('streamCount')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Streams</span>
                    {getSortIcon('streamCount')}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Platform
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredData.map((item, index) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-dashboard-hover group"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="w-10 h-10 rounded-lg bg-dashboard-hover overflow-hidden group-hover:ring-2 ring-accent-mint transition-all">
                      <img 
                        src={item.albumArt} 
                        alt={`${item.songName} album art`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{item.songName}</span>
                      <span className="text-xs text-white/60">{item.duration}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                    {item.artist}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-dashboard-hover text-white">
                      {item.genre}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-white/60">
                    {new Date(item.dateStreamed).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-dashboard-hover rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent-mint rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.streamCount / 1000000) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm text-white">{item.streamCount.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-white/60">{item.userId}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm text-white/60">{item.platform}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
} 