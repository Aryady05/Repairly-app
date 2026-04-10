# Repairly

> A professional landing page for a laptop and mobile repair service — built with React, Vite, and Tailwind CSS.

---

## Overview

**Repairly** is a modern, responsive single-page website designed for a device repair business. It presents the company's services, builds customer trust through social proof, and makes it easy for visitors to get in touch — all from a single, fast-loading page.

---

## Features

- **Hero section** with headline, key stats (5,000+ devices repaired, 4.9/5 rating, 90-min express slots), and a direct call-to-action
- **Services grid** covering Laptop Repair, Mobile Repair, Screen Replacement, Battery Replacement, Software Fixes, and Water Damage Repair
- **Why Choose Us** section highlighting fast turnaround, clear pricing, trusted technicians, and convenient booking
- **How It Works** three-step process overview
- **Testimonials** from real-sounding customer reviews
- **FAQ** section for common questions
- **Supported Brands** strip for device compatibility reassurance
- **Mobile sticky CTA** — phone button always visible on small screens
- **Responsive navbar** and **footer** with navigation links and company contact details
- All copy and content managed from a single `src/data/siteContent.js` file

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI library |
| [Vite](https://vitejs.dev/) | 7 | Dev server & bundler |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |

---

## Project Structure

```
repairly-website/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, Services, WhyChooseUs, Testimonials, HowItWorks, FAQ, …
│   │   └── ui/            # Reusable primitives (ButtonLink, SectionIntro, BookingModal)
│   ├── data/
│   │   └── siteContent.js # All text content, links, and company info
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aryady05/Repairly-app.git
cd Repairly-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Customisation

All website content — company name, phone number, services, testimonials, process steps, and navigation links — is centralised in:

```
src/data/siteContent.js
```

Edit that file to update any copy or contact details without touching component code.

---

## License

This project is open source. Feel free to adapt it for your own repair business or portfolio.