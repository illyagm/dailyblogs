# DailyBlogs

Platform for publishing blogs, built with Next.js. The goal is to provide a fast, clean and minimalistic experience for writing and reading content without distractions.

## Features

* Post publishing
* Simple and responsive interface
* Optional WebSocket to display real-time cryptocurrency prices
* Affiliate marketing integration
* Legal compliance through required pages and cookie‑consent popup
* Integrated analytics to monitor website activity

## Stack

* **Next.js**
* **SCSS** for styling
* **CoinGecko WebSocket** for real‑time data
* **Hygraph** as the content management system
* **graphql-request** for content fetching
* **Vercel** for deployments and analytics
* **vercel-sitemap** to improve SEO

## Screenshots
<img width="1907" height="912" alt="image" src="https://github.com/user-attachments/assets/2bd7cbfd-5892-40fa-8c38-3491e1e4f256" />
<img width="1912" height="913" alt="image" src="https://github.com/user-attachments/assets/fb68680e-b842-4c33-93e2-6d6ff18be4d5" />
<img width="858" height="59" alt="image" src="https://github.com/user-attachments/assets/32ca646f-ee96-4953-af65-02f956ebd4f1" />

For more detailed view, visit our website: https://www.cryptoxchange.es/

## Installation

```bash
git clone https://github.com/illyagm/dailyblogs.git
cd dailyblogs
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Configuration – ENV vars

```
# .env
NEXT_PUBLIC_PROD_TOKEN_POSTS=
NEXT_PUBLIC_HYGRAPH_PROJECT_API_URL=
```

## Roadmap

* Visual improvements
* Article pagination
* Comment system

## License

MIT
