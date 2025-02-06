# 🎵 Streamify - Music Streaming Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js and Tailwind CSS for visualizing music streaming platform metrics.

## 🚀 Features

- **Real-time Analytics**: View key metrics including total users, active users, streams, and revenue
- **Interactive Charts**: 
  - User Growth Line Chart
  - Revenue Distribution Pie Chart
  - Top Songs Bar Chart
- **Data Table**: Sortable and filterable table of recent streams
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Mock API**: Uses MirageJS for simulating backend data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Heroicons
- **Mock API**: MirageJS
- **State Management**: React Hooks

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

## 🏗️ Project Structure

```
/streamify
|-- /app
|   |-- /dashboard
|   |   |-- /components
|   |   |   |-- Card.js
|   |   |   |-- UserGrowthChart.js
|   |   |   |-- RevenueDistributionChart.js
|   |   |   |-- TopSongsChart.js
|   |   |   |-- DataTable.js
|   |   |-- page.js
|   |-- /api
|   |   |-- /mirage
|   |   |   |-- server.js
|   |-- layout.js
|-- /public
|-- tailwind.config.js
|-- next.config.js
|-- README.md
```

## 🎨 Features in Detail

### Dashboard Overview
- Summary cards displaying important statistics
- Interactive charts for data visualization
- Detailed table of recent streaming activity

### Key Metrics
- Total Users
- Active Users
- Total Streams
- Revenue
- Top Artist

### Charts
- User Growth (Line Chart)
- Revenue Distribution (Pie Chart)
- Top 5 Streamed Songs (Bar Chart)

### Data Table
- Sortable columns
- Search functionality
- Responsive design

## 🔧 Configuration

The dashboard uses MirageJS to simulate API endpoints. You can modify the mock data in `/app/api/mirage/server.js`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Recharts for the beautiful charts
- MirageJS for the API mocking capabilities
