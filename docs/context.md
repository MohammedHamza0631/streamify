# 🎵 Streamify - Music Streaming Analytics Dashboard

## 📌 Overview

The *Streamify Analytics Dashboard* is a *Single Page Application (SPA)* built with *Next.js (JavaScript)* to help management teams analyze user activity, revenue, and content performance in a music streaming service. It provides a visually appealing, responsive UI with interactive charts, tables, and key performance indicators (KPIs).

---

## 📊 Features & Application Flow

### *1. Dashboard Overview*
The dashboard consists of three main sections:

1. *Key Metrics* – Summary cards displaying important statistics.
2. *Data Visualization* – Graphs and charts for deeper insights.
3. *Recent Streams Data Table* – A detailed table listing streaming activities.

---

### *2. Key Metrics (Cards)*
Displayed at the top of the dashboard, these cards provide a quick overview:

- *Total Users*: Total registered users on the platform.
- *Active Users*: Users who streamed at least one song in the last 30 days.
- *Total Streams*: The number of song streams on the platform.
- *Revenue*: Revenue generated from subscriptions and ads.
- *Top Artist*: The artist with the most streams in the past 30 days.

✅ *Implementation*:
- Use a *Card component* to display the metrics.
- Fetch (or mock) data from MirageJS.
- Implement *animated counters* for a dynamic effect.

---

### *3. Data Visualization (Charts)*
Three interactive charts provide deeper insights into user and revenue data.

#### *📈 User Growth Chart (Line Chart)*
- Displays *total users vs. active users* over the past 12 months.
- Users can *hover over* data points to see the exact number.

#### *💰 Revenue Distribution (Pie Chart)*
- Shows the revenue breakdown from *Subscriptions vs. Ads*.
- Clicking on a segment *filters the data table* by revenue type.

#### *🎶 Top 5 Streamed Songs (Bar Chart)*
- Displays the most-streamed songs over the past 30 days.

✅ *Implementation*:
- Use *Recharts.js* for rendering charts.
- Allow *interactions* such as tooltips, filtering, and dynamic updates.

---

### *4. Recent Streams Data Table*
A paginated table displaying the latest song streams with the following columns:

| Song Name | Artist | Date Streamed | Stream Count | User ID |
|-----------|--------|--------------|-------------|---------|
| Song A   | Artist X | 2024-02-01  | 500         | U12345  |
| Song B   | Artist Y | 2024-02-02  | 320         | U67890  |

✅ *Implementation*:
- Use a *Table component* with *sorting & filtering*.
- Users can *sort* by date or stream count.
- Users can *filter* by artist or song name.

---

## *🔧 Technical Stack*
### *Frontend*
- *Next.js (JavaScript)*
- *React Context API* for state management
- *Tailwind CSS* for styling
- *Recharts.js* for charts and visualizations
- *MirageJS* for mock API data
- You do not need to connect to a real backend or database; feel free to generate realistic mock data to populate the dashboard.
- Ensure your code is clean, modular, and follows best practices.

### *Setting Up MirageJS*
To set up MirageJS for mocking API data:

1. **Install MirageJS**: Run `npm install miragejs`.
2. **Create a Mirage Server**: Define your server in `/app/api/mirage/server.js`.
3. **Initialize MirageJS**: Start the server in your `app/layout.js` or `app/page.js` file.

### *Performance Enhancements*
- *Lazy loading & code splitting* for optimal performance.
- *Memoization (React.memo, useMemo)* to prevent unnecessary re-renders.
- *Debouncing & throttling* to handle input fields efficiently.

---

## *🚀 Additional Features*
✅ *Sorting & Filtering*
- The data table supports sorting by *stream count* and *date*.
- Users can *filter* by *song name* or *artist*.

✅ *Chart Interactivity*
- Users can *hover* over line chart points to see exact values.
- Clicking on *pie chart segments* filters the data table accordingly.

✅ *Mobile Responsiveness*
- Uses *Flexbox & Grid layouts* for a responsive UI.

✅ *Dark Mode Support*
- Implements Tailwind's *dark mode classes* for a smooth transition.

✅ *Unit Testing(Optional)*
- Write *unit tests* using Jest & React Testing Library.

✅ *Documentation*
- A detailed *README.md* file is included with setup instructions.

Optimal Folder Structure
/streamify
|-- /app
|   |-- /dashboard
|   |   |-- /components
|   |   |   |-- Card.js
|   |   |   |-- Chart.js
|   |   |   |-- DataTable.js
|   |   |-- /styles
|   |   |   |-- dashboard.module.css
|   |   |-- page.js
|   |-- /api
|   |   |-- /mirage
|   |   |   |-- server.js
|   |-- layout.js
|   |-- globals.css
|-- /public
|-- /styles
|   |-- tailwind.css
|-- /utils
|   |-- data.js
|-- /tests
|   |-- /unit
|   |   |-- Card.test.js
|-- package.json
|-- tailwind.config.js
|-- next.config.js
|-- README.md

### Setting Up MirageJS

1. **Install MirageJS**:    npm install miragejs

2. **Create a Mirage Server**:

   In the `/app/api/mirage/server.js` file, set up your Mirage server:
      import { createServer } from 'miragejs';

   export function makeServer({ environment = "development" } = {}) {
     let server = createServer({
       environment,

       routes() {
         this.namespace = "api";

         this.get("/metrics", () => ({
           totalUsers: 1000,
           activeUsers: 200,
           totalStreams: 5000,
           revenue: 10000,
           topArtist: "Artist X",
         }));

         this.get("/streams", () => [
           { songName: "Song A", artist: "Artist X", dateStreamed: "2024-02-01", streamCount: 500, userId: "U12345" },
           { songName: "Song B", artist: "Artist Y", dateStreamed: "2024-02-02", streamCount: 320, userId: "U67890" },
         ]);
       },
     });

     return server;
   }
   
3. **Initialize MirageJS in your App**:

   In your `app/layout.js` or `app/page.js`, initialize the Mirage server:
      import { makeServer } from './api/mirage/server';

   if (process.env.NODE_ENV === "development") {
     makeServer();
   }