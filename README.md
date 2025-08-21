Cloudrika Monorepo

Welcome to the Cloudrika Open Source Monorepo 🎉

Cloudrika’s vision is to build modern, scalable, and open-source web applications that empower businesses around the world.
This repository serves as the foundation for multiple products such as:

📧 Email Portal (currently under active development)

📊 CRM (upcoming)

🛒 POS (planned)

🏢 ERP (planned)

The monorepo provides a shared set of components, utilities, and best practices that will be used across all Cloudrika applications.

🚀 Tech Stack

Turborepo
 – for monorepo management

pnpm
 – fast package manager

Next.js
 – application framework

Tailwind CSS
 – utility-first CSS framework

shadcn/ui
 – prebuilt UI components

Radix UI
 – accessible primitives

Storybook
 – component development environment

⚡ Getting Started
1. Clone & Install
git clone https://github.com/cloudrika/cloudrika.git
cd cloudrika
pnpm install

2. Run Development
pnpm run dev

3. Build
pnpm build

🌐 Ports

Email Portal → http://localhost:5001

Storybook → http://localhost:6006

🎨 Design System

We use a shared design system across all products:

Color Palette: defined in tailwind.config.js

Components: built with shadcn/ui + Radix UI

Variants, Sizes, Shapes: implemented via cva + cn utility

Example Reference: follow the Button component in packages/ui

Every new component must include a Storybook story for documentation and testing.

🔀 Branching Strategy

We follow a two-branch model:

main → production-ready, stable code

dev → active development

Branch Naming Conventions

Use prefixes for clarity:

feature/<name> → new features

fix/<name> → bug fixes

chore/<name> → maintenance / config updates

docs/<name> → documentation updates

Examples:

feature/email-editor

fix/login-validation

chore/update-dependencies

✅ Contribution Workflow

Create a branch from dev.

Implement changes following coding & component guidelines.

Commit messages should use active voice + present tense:

create UI toolbar

update email editor

fix login validation

add story for modal component

Push branch and open a Pull Request (PR) against dev.

Assign yourself as the assignee.

Request reviewers from maintainers.

Once approved, PRs are merged into dev.

🔒 Only maintainers merge into main.

📝 Commit Message Guidelines

Use first form of verb (create, update, fix, add, remove).

Keep it short, clear, and descriptive.

Think: “When this PR is merged, it will…”

Examples:

create email composer UI

update subscription plan logic

fix contact import bug

📚 Component Guidelines

Components live in packages/ui

Follow the Button component structure as a reference (variants, sizes, shapes).

Always use cva and cn utilities for styling consistency.

Every component must include:

A Storybook story

Proper props typing

Usage examples

🤝 Contributing

We welcome contributions from the community 💙

Open an issue for discussion before starting large features.

Follow the branching and commit guidelines strictly.

Respect code reviews and suggestions from maintainers.

📌 Roadmap

✅ Email Portal MVP

⏳ CRM module

⏳ POS module

⏳ ERP system

📄 License

This project is open source and available under the MIT License.

Meet the Founder

![https://media.licdn.com/dms/image/v2/D4D03AQGz_HzDeW2CGA/profile-displayphoto-crop_800_800/B4DZe9tYzZHAAI-/0/1751234484733?e=1758758400&v=beta&t=rdA6RjY_TdUBTyvzX5jtP9ncICfBIzaBV5LvZ4AB79g]

Ahmad Raza Khokhar
Sr Software Engineer | Web | Mobile | Chrome Extensions | Full Stack

Ahmad is a full-stack developer with expertise in React.js, Next.js, React Native, and TypeScript. With a strong emphasis on scalability, maintainability, and code readability, Ahmad has built applications that serve millions of users worldwide.

His backend skills include Express.js and Nest.js, all crafted in TypeScript to ensure robust, high-performance solutions.

Connect with Ahmad on [GitHub](https://github.com/AhmadRazaKhokhar1)
 and [LinkedIn](https://www.linkedin.com/in/ahmad-raza-khokhar/)
.