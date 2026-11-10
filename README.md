# 👶 Gestational Age & Delivery Date Calculator

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-Styles-CC6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![Healthcare Tech](https://img.shields.io/badge/Healthcare-Clinical%20Tools-00A86B?style=for-the-badge)]()

A modern, responsive healthcare application built with **React** and **Vite**, engineered to perform clinical calculations for **Gestational Age (GA)** and **Estimated Date of Delivery (EDD / DPP)** based on obstetric guidelines.

---

## 🎯 Clinical Rules & Problem Solved
Accurately tracking fetal development is critical in obstetric care. This application translates clinical standards into an instantaneous, error-resilient calculator:
- **Calculation by LMP (Last Menstrual Period / DUM)**: Computes current gestational progress in weeks and days.
- **Calculation by Ultrasound (USG)**: Recalibrates gestational milestones using early biometric ultrasound data.
- **Estimated Delivery Date (EDD)**: Applies Naegele's rule adjusted for menstrual cycle parameters.

---

## 💻 Tech Stack
- **Frontend Core**: React 18 with modern functional components & hooks.
- **Build Tool**: Vite (powered by SWC) for sub-millisecond HMR and optimized production bundles.
- **Styling**: Sass (SCSS) with modular, responsive architecture tailored for clinical tablets and desktop workstations.
- **Code Quality**: ESLint configuration with React Hooks guidelines.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Run
```bash
# 1. Clone repository
git clone https://github.com/brunovperg/idade-gestacional-react2.git
cd idade-gestacional-react2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Build for production:
```bash
npm run build
```
