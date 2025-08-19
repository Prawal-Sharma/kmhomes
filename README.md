# KM Homes - Property Management Website

Professional property management website for KM Homes, serving modern professionals with quality accommodations in the Dallas-Fort Worth area.

## 🏠 About

KM Homes provides professional property management services, specializing in medium-term furnished rentals for travel nurses, consultants, and professionals. This website showcases our services and properties.

## ✨ Features

- Professional, clean design
- Fully responsive layout
- Fast performance with Next.js 15
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- SEO optimized
- **Working contact form with email notifications**
- Property galleries
- Client testimonials

## 🚀 Tech Stack

- **Framework:** Next.js 15.4.7
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** Nodemailer with Gmail SMTP
- **Language:** TypeScript
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Prawal-Sharma/kmhomes.git
cd kmhomes
```

2. Install dependencies:
```bash
npm install
```

3. Set up email configuration (for contact form):
   - Copy `.env.local.example` to `.env.local`
   - Add your Gmail credentials (see Email Setup section below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To create a production build:
```bash
npm run build
```

To run the production build locally:
```bash
npm start
```

## 📧 Email Setup for Contact Form

The contact form sends emails to karismathicllc@gmail.com using Gmail SMTP.

### Local Development Setup:

1. **Create a Gmail App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-factor authentication
   - Search for "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

2. **Configure Environment Variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your Gmail credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password-here
   ```

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import the GitHub repository
5. **Add Environment Variables:**
   - Go to Settings → Environment Variables
   - Add `GMAIL_USER` and `GMAIL_PASS`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to link your project

## 📁 Project Structure

```
kmhomes/
├── app/              # Next.js app directory with pages
├── components/       # Reusable React components
├── public/           # Static assets
│   └── images/       # Property images
├── data/             # Content and data files
├── lib/              # Utility functions
└── styles/           # Global styles
```

## 📞 Contact Information

**KM Homes**
- Email: karismathicllc@gmail.com
- Phone: 817-614-1235
- Location: Plano, Texas

## 📄 License

© 2025 KM Homes. All rights reserved.
