<br/>
<p align="center">
  <h1 align="center">✊ RebelRoot</h1>
  <h3 align="center">✨ Software Built for Rebels. By Rebels. ✨</h3>

  <p align="center">
    An independent, developer-led collective designing high-quality, privacy-focused, and fully auditable applications to solve the root problems of digital sovereignty.
    <br/>
    <br/>
    <a href="https://github.com/ParasxAgarwal/rebelroot">View Repository</a>
    ·
    <a href="https://github.com/ParasxAgarwal/rebelroot/issues">Report Bug</a>
    ·
    <a href="https://github.com/ParasxAgarwal/rebelroot/issues">Request Feature</a>
  </p>
</p>

---

## 🛠️ Flagship Products

RebelRoot is the parent collective and ecosystem powering a suite of user-centric applications:

### 🌐 1. Omni Browser
A state-of-the-art mobile browser built for speed, safety, and ultimate user control.
* **GeckoView Engine:** Powered by Mozilla's high-performance GeckoView.
* **Privacy by Default:** Zero tracking, zero analytics, and built-in ad and tracker blocking.
* **Customization:** Out-of-the-box support for Firefox extensions.
* **Offline Translation:** On-device Machine Learning translation models to process language without sending data to servers.
* **Sandboxed Execution:** Secure sandbox architecture keeping system resources protected.

### 📖 2. MOCNovel
A modern, zero-telemetry, zero-ad publishing platform designed to connect independent authors directly with their audience.
* **AI Recommendation Engine:** Conversational novel discovery assistant powered by Llama 3.3 70B via Groq Cloud.
* **Real-time Interaction:** Millisecond-level WebSocket live chat on chapter feeds and community forums.
* **Digital Sovereignty:** Robust offline-ready library cache and encrypted client-side sync.
* **Publisher Workspace:** A sleek markdown-friendly editor optimized for distraction-free writing.

### 🛒 3. CampCart
A secure, edge-deployed peer-to-peer campus exchange marketplace for students to trade textbooks, electronics, and dorm gear safely.
* **Verified Network:** Account registration checks ensure only students with verified college/university domains can sign up.
* **Escrow Settlement:** Secure payment checkouts via Stripe and Juspay SDK handle money transfers with student verification.
* **Real-time Interaction:** Persistent WebSocket connections enable live chat, negotiation, and safe zone exchanges.

---

## 🚀 RebelRoot Web Portal

This repository contains the source code for the **RebelRoot Web Portal**, serving as the marketing website, documentation center, and showcase dashboard.

### 🧰 Built With
* **Framework:** [Next.js](https://nextjs.org/) (React 17, TypeScript)
* **Styling:** [Styled Components](https://styled-components.com/) (Vanilla CSS-in-JS design system)
* **Content Management:** [Tina CMS](https://tina.io/) (Local & cloud-ready editing)
* **Performance:** Optimized for Green Web Vitals and SEO out of the box.

---

## 🤓 Getting Started

### Prerequisites
Make sure you have Node.js and either Yarn or NPM installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ParasxAgarwal/rebelroot.git
   cd rebelroot
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and configure your API keys (e.g. Sendgrid, TinaCMS):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
   Open [http://localhost:3059](http://localhost:3059) (configured in package.json) to view the portal locally.

5. Run Tina CMS locally for blog & content management:
   ```bash
   yarn dev:cms
   # or
   npm run dev:cms
   ```
   Navigate to `/admin` on your local server to edit posts and content interactively.

---

## 🤲🏻 Contributing

We welcome contributions from fellow rebels! If you want to contribute to the portal or any of the flagship applications:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## ❤️ Credits & Acknowledgements

RebelRoot was built using the awesome open-source [next-saas-starter](https://github.com/Blazity/next-saas-starter) template created by [Blazity](https://blazity.com/). We appreciate the Blazity team for providing a robust foundation for React/Next.js SaaS applications.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](https://github.com/ParasxAgarwal/rebelroot/blob/main/LICENSE) for more information.
