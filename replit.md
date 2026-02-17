# Zorka Agency Landing Page

## Overview
A React + TypeScript landing page for Zorka Agency, an influencer marketing company. Features a chatbot interface, contact form, metrics section, and more.

## Tech Stack
- React 18 with TypeScript
- Vite (build tool / dev server)
- Tailwind CSS + PostCSS + Autoprefixer
- react-hook-form + zod for form validation
- react-icons for icons

## Project Structure
- `src/` - Source code
  - `components/` - React components (Header, Hero, ChatInterface, ContactForm, Footer, etc.)
  - `contexts/` - React contexts (ChatContext)
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions (mockApi, mockChatbot, validation)
  - `App.tsx` - Main app component
  - `main.tsx` - Entry point
- `public/` - Static assets (logos, images)
- `vite.config.ts` - Vite configuration (dev server on port 5000, host 0.0.0.0)
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Running
- Dev: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment using Vite build output in `dist/`
