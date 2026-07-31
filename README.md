# Full Stack Portfolio

A production-ready portfolio built with Next.js, React, TypeScript, Tailwind CSS, and a server-side contact API route.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

Edit `src/lib/data.ts` to change your name, links, skills, projects, timeline, and contact email.

## Deployment

The simplest deployment path is Vercel:

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

The contact form currently validates and logs submissions from `src/app/api/contact/route.ts`. For production email or storage, connect that route to Resend, Supabase, MongoDB, or another service.
