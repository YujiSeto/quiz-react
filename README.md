# Quiz React (Next.js)

A small quiz application built with Next.js (App Router) and TypeScript. The app loads questions from a local data file and presents a simple multiple-choice quiz with scoring.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript

## Features

- Multiple-choice quiz
- Local question data in `src/data/questions.ts`
- Simple scoring and feedback
- Minimal, easy-to-extend codebase

## Prerequisites

- Node.js 18 or newer
- npm, Yarn, or pnpm

## Install and Run

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm run start
```

## Project Structure (important files)

- `src/app/page.tsx` — main app page and entry UI
- `src/data/questions.ts` — quiz questions and answers
- `src/types/Questions.ts` — TypeScript types for questions
- `src/app/layout.tsx` — global layout and styles

## How to Add Questions

Edit `src/data/questions.ts` and add new question objects following the existing format. Types are defined in `src/types/Questions.ts` for reference.

## Contributing

Contributions are welcome. Open issues or pull requests for improvements, extra features, or bug fixes.