# 🎵 Streamify - Music Streaming Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js and Tailwind CSS for visualizing music streaming platform metrics. Features beautiful animations, dark theme design, and comprehensive analytics.

### View the Live Project [here](https://streamify-zeta-drab.vercel.app/dashboard)


## 🚀 Features

### Analytics & Metrics
- **Key Performance Indicators**:
  - Total Users Count with Growth Rate
  - Active Users Tracking
  - Total Streams Analytics
  - Revenue Monitoring
  - Top Artist Recognition

### Data Visualization
- **Interactive Charts**:
  - User Growth Line Chart (12-month trend)
  - Revenue Distribution Pie Chart
  - Top 5 Streamed Songs Bar Chart
  - Genre Distribution Analytics
  - Platform Usage Statistics

### User Engagement Metrics
- Average Session Duration
- Songs per Session
- Playlists per User
- Share Rate
- Platform-specific Usage

### Advanced Data Table
- Comprehensive stream data with sorting and filtering
- Multiple filter options (Genre, Platform)
- Search functionality
- Progress bar visualizations
- Album art previews

### Modern UI/UX
- **Responsive Design**:
  - Mobile-first approach
  - Tablet and desktop optimized layouts
  - Adaptive grid systems
- **Dark Theme**:
  - Custom dark theme with mint (#98E5DD) and coral (#EEB58F) accents
  - High contrast for better readability
  - Consistent color scheme

### Animations & Interactions
- Smooth page transitions
- Chart animations
- Loading states and skeleton screens
- Interactive hover effects
- Progress animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **State Management**: React Hooks
- **Typography**: Inter font
- **Mobile Responsiveness**: Tailwind breakpoints

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/streamify.git
   cd streamify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Component Organization

### Core Components
- `Card.js`: Reusable metric card component
- `Navbar.js`: Global navigation component
- `UserGrowthChart.js`: Line chart for user growth
- `RevenueDistributionChart.js`: Pie chart for revenue
- `TopSongsChart.js`: Bar chart for top songs
- `DataTable.js`: Interactive data table
- `UserEngagement.js`: User metrics display
- `GenreDistribution.js`: Genre analytics
- `PlatformUsage.js`: Platform usage statistics

### Pages
- `page.js`: Landing page
- `dashboard/page.js`: Main dashboard
- `not-found.js`: 404 error page
- `layout.js`: Root layout with navigation

### Data & Configuration
- `lib/mockData.js`: Mock data for all components

## 📱 Responsive Design

The dashboard is fully responsive across all devices:

## 🔧 Configuration

The dashboard uses mock data that can be modified in `/app/lib/mockData.js`. You can customize:
- User metrics and growth data
- Song and artist information
- Revenue distribution
- Genre statistics
- Platform usage data
- User engagement metrics

## 🎨 Customization

### Theme Colors
The dashboard uses a custom color palette defined in `tailwind.config.js`:
```js
colors: {
  primary: '#111313',
  accent: {
    mint: '#98E5DD',
    coral: '#EEB58F',
  },
  dashboard: {
    card: '#1A1D1D',
    hover: '#2A2E2E',
  }
}
```
