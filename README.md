
# Cloudrika Monorepo

Welcome to the **Cloudrika Monorepo** 👋  

Cloudrika is on a mission to build scalable, modern, and open-source web applications that empower businesses and developers.  
This monorepo will host multiple projects such as:  

- **Email Portal** (current focus 🚀)  
- CRM  
- POS  
- ERP  
- and more upcoming products...  

We believe in collaboration and invite developers to contribute to our ecosystem. This repository is designed to be **scalable, maintainable, and developer-friendly** using **Turborepo**, **pnpm**, and modern UI practices with **shadcn/ui**, **TailwindCSS**, **Radix UI**, and **Storybook**.

---

## 🌍 Links

- **Website:** [https://Cloudrika.com](https://Cloudrika.com/)  
- **LinkedIn:** [Cloudrika Technologies](https://www.linkedin.com/company/Cloudrika-technologies)

---

## 📂 Repository Structure
apps/ → Next.js applications (Email Portal, etc.)
packages/ → Shared UI components, utilities, hooks
storybook/ → Component documentation & testing

- Each **UI component** inside `packages/` must follow the **Button component** structure:  
  - Variants  
  - Sizes  
  - Shapes  
  - `cn`, `cva` usage with TailwindCSS  
  - Radix UI for accessibility  
  - Storybook story file included  

---
## 🚀 Development

Start development server:

pnpm run dev

Build the project:

pnpm build

---

## 🔌 Ports

Email Portal: http://localhost:5001  
Storybook: http://localhost:6006  

---

## 🎨 Color Palette

The design system uses Cloudrika’s official palette, customizable via Tailwind config.  
Stick to predefined tokens for consistency.  

(More details will be documented in the Design Guidelines.)

---

## 🌳 Branching Strategy

We follow a two-branch mainline strategy:

- main → stable production-ready code  
- dev → active development  

### Branch Naming Conventions

- feature/<name> → for new features  
  Example: feature/email-editor  

- fix/<name> → for bug fixes  
  Example: fix/navbar-alignment  

- chore/<name> → for non-feature changes (configs, deps, docs)  
  Example: chore/update-eslint  

- hotfix/<name> → for urgent fixes on main  
  Example: hotfix/env-config  

---

## 📝 Commit Guidelines

All commits must use active voice, first form of the verb:

✅ Correct:
- create UI toolbar  
- update email editor  
- fix login bug  
- add CRM dashboard  

❌ Avoid:
- created toolbar  
- fixes bug in login  
- toolbar updated  

---

## 🔄 Pull Request Workflow

1. Create a branch from dev (using correct naming convention).  
2. Commit changes with proper commit message style.  
3. Push your branch to remote.  
4. Open a Pull Request into dev.  
   - Assign yourself as the owner.  
   - Add relevant tags (feature, fix, chore).  
   - Request reviewers from the team.  
5. Wait for approval & merge 🚀  

---

## 📚 Storybook & Components

- Every new component must include a Storybook file for documentation and testing.  
- Follow the Button component as a reference for:  
  - Variants  
  - Sizes  
  - Shapes  
  - Accessibility  

Run Storybook:

pnpm run storybook

---

## ✅ Contribution Guidelines

- Stick to code readability, maintainability, and scalability.  
- Reuse shared packages when possible.  
- Respect code reviews and requested changes.  
- Keep PRs small and focused (avoid huge "mega commits").  
- Write tests where applicable.  

---

## 📌 Future Roadmap

- [ ] Launch Email Portal MVP  
- [ ] Expand to CRM  
- [ ] Build POS  
- [ ] Develop ERP modules  

---

💙 Join us in building CloudRika’s open-source ecosystem


# Meet the Founder
<a href="https://www.linkedin.com/in/ahmad-raza-khokhar">
  <img src="https://media.licdn.com/dms/image/v2/D4D03AQGz_HzDeW2CGA/profile-displayphoto-crop_800_800/B4DZe9tYzZHAAI-/0/1751234484733?e=1758758400&v=beta&t=rdA6RjY_TdUBTyvzX5jtP9ncICfBIzaBV5LvZ4AB79g" alt="Ahmad Raza Khokhar" width="320" />
</a>

# Ahmad Raza Khokhar
## Sr Software Engineer | Web | Mobile | Chrome Extension | Full Stack

Ahmad is a full-stack developer with expertise in React.js, Next.js, React Native, and TypeScript. With a strong emphasis on scalability, maintainability, and code readability, Ahmad has built applications that serve millions of users worldwide.

His backend skills include Express.js and Next.js, all crafted in TypeScript to ensure robust, high-performance solutions.

Connect with Ahmad on [GitHub](https://github.com/AhmadRazaKhokhar1)
 and [LinkedIn](https://www.linkedin.com/in/ahmad-raza-khokhar/)
.
