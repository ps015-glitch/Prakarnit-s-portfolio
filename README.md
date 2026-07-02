# Prakarnit Srivastava — Portfolio Website

Modern, responsive personal portfolio built with **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**.

---

## 🗂 Folder Structure

```
prakarnit-portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Fixed navbar with mobile menu + dark toggle
│   │   └── Footer.tsx       # Footer with quick links, socials, contact
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with profile, headline, CTA buttons
│   │   ├── About.tsx        # About Me, education, strengths, stats
│   │   ├── Skills.tsx       # Animated skill bars by category
│   │   ├── Certifications.tsx  # Certification cards with badges
│   │   ├── Achievements.tsx # Alternating timeline layout
│   │   ├── Resume.tsx       # Resume preview + download button
│   │   ├── Testimonials.tsx # Testimonial cards
│   │   └── Contact.tsx      # Contact form + info cards
│   └── ui/
│       ├── ThemeProvider.tsx    # Dark/light mode context
│       ├── ScrollProgress.tsx   # Scroll progress bar (top)
│       ├── BackToTop.tsx        # Back-to-top button
│       └── SectionHeading.tsx   # Reusable section heading
├── lib/
│   ├── data.ts              # All content: skills, certs, testimonials, config
│   └── utils.ts             # cn() utility for className merging
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/
│   └── resume.pdf           # ← ADD YOUR RESUME HERE
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## ⚙️ Installation

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Setup

```bash
# Navigate into the folder
cd prakarnit-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Add Your Resume

Place your resume PDF at:
```
public/resume.pdf
```
The download button in the Resume section and Hero will automatically use it.

---

## 🔧 Customise Your Content

All text, links, and data lives in **`lib/data.ts`**:

- `siteConfig` — name, email, phone, social links
- `skills` — marketing / business / technical skill levels
- `certifications` — your cert cards
- `achievements` — timeline milestones
- `testimonials` — what people say about you

---

## 🚀 Deploy to Vercel (Free)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js

### Environment Variables (if you add a contact form API)

In Vercel dashboard → Settings → Environment Variables, add:
```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

---

## 📬 Connect Your Contact Form

The contact form currently simulates a send. To make it real:

### Using Formspree (easiest, free):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint URL
3. In `components/sections/Contact.tsx`, replace the simulated `await` with:

```ts
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("sent");
else setStatus("error");
```

---

## 🔍 SEO Setup

SEO metadata is in `app/layout.tsx`:
- Title, description, keywords
- Open Graph tags (for social sharing previews)
- Twitter Card
- Robots directives

Update these fields with your actual info before deploying.

---

## ✨ Features

| Feature | Status |
|---|---|
| Dark / Light Mode | ✅ |
| Scroll Progress Bar | ✅ |
| Animated Skill Counters | ✅ |
| Back-to-Top Button | ✅ |
| Resume Download | ✅ |
| Contact Form Validation | ✅ |
| Framer Motion Animations | ✅ |
| Mobile-First Responsive | ✅ |
| SEO Metadata | ✅ |
| Google Fonts (Syne + Inter) | ✅ |

---

## 🔮 Future Improvements

- Add **EmailJS** or **Resend** for real email delivery
- Add a **Projects** section when you have portfolio work to show
- Add **Google Analytics** for visitor tracking
- Add a **blog** section with MDX for articles
- Add **OG image** generator for better social previews
- Connect **LinkedIn API** to auto-pull experience

---

© 2026 Prakarnit Srivastava
