# 🌿 Biteza — Smart Food & Health Companion

**Biteza** is a modern Progressive Web App (PWA) designed to simplify healthy eating transitions for busy professionals, students, and fitness enthusiasts. It bridges the gap between nutritional awareness and real-world action through AI-driven insights and a mobile-first, context-aware user interface.

---

## ✨ Core Features

### 1. 🏠 Smart Food Dashboard (`/`)
The primary decision engine of the app, designed for high-speed, relevant food discovery.
- **Personalized Feed**: Content based on user goals (e.g., "Post-workout recovery" or "Budget student meals").
- **Smart Swap Utility**: Visual suggestions to replace unhealthy cravings with nutritious alternatives.
- **Activity & Macro Tracking**: Glaceable progress indicators for calories, protein, carbs, and fats.
- **Organic Curation**: A "no-line" editorial design that prioritizes tonal depth and high-quality food imagery.

### 2. 🤖 AI Food Coach (`/coach`)
A personal nutritional assistant powered by **Google Gemini 1.5 Flash**.
- **Contextual Reasoning**: Understands time of day, location, and budget constraints.
- **Instant Advice**: "Suggest a high-protein dinner under ₹200 nearby."
- **Persistent Chat**: Maintains conversation history for a continuous, conversational guidance experience.
- **Smooth UX**: Features glassmorphism headers, animated message entry, and quick-start suggestion chips.

---

## 🎨 Design Philosophy: "The Organic Curator"
Biteza follows a bespoke design system that rejects generic templates:
- **Typography**: Paired **Plus Jakarta Sans** (headings) with **Manrope** (body) for a premium, editorial feel.
- **Color Palette**: Tonal greens (`#266829`) and earthy neutrals (`#f7f7f2`) to evoke trust and health.
- **Asymmetric Layouts**: Editorial-style grid systems that feel alive and non-mechanical.
- **Border-Free UI**: Utilizing background depth and soft shadows instead of harsh borders.

---

## 🛠️ Technical Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with React 19.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens.
- **AI Engine**: [Google Generative AI SDK](https://ai.google.dev/gemini-api) (Gemini 1.5 Flash).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Components**: Custom-built using `shadcn/ui` foundations.
- **Infrastructure**: Dockerized multi-stage builds, ready for **Google Cloud Run**.

---

## 🚦 Getting Started

### Prerequisites
- Node.js 20+
- A Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd biteza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment (Cloud Run)
The project includes a multi-stage `Dockerfile` and is optimized for automated deployment via Google Cloud Build.
- **Build**: `gcloud builds submit --tag gcr.io/[PROJECT_ID]/biteza`
- **Deploy**: `gcloud run deploy biteza --image gcr.io/[PROJECT_ID]/biteza --platform managed`

---

## 📂 Project Structure

```text
app/
├── api/chat/        # Gemini API interaction logic
├── coach/           # AI Coach chat interface
├── discover/        # Food discovery & exploration (Coming Soon)
├── progress/        # Detailed health analytics (Coming Soon)
└── layout.tsx       # Root layout with Bottom Navigation
components/
├── ui/              # Reusable shadcn/ui components
└── bottom-nav.tsx   # Mobile-first navigation system
```
