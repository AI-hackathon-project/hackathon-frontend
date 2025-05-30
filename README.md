# Maternal Wellness Assistant – AI-Powered Support for Pregnant and Postpartum Women

## 📌 Project Overview

The Maternal Wellness Assistant is an AI-powered chatbot and voice-enabled tool designed to support expectant and new mothers in tracking their mental and physical well-being. It aims to reduce stigma, detect early warning signs of postpartum health issues, and provide self-care tips and resources in an accessible, private, and user-friendly format.

## 🚩 Problem Statement

Many new and expectant mothers, especially in underserved communities, struggle with physical recovery and mental health challenges like postpartum depression. Due to stigma, limited access to care, and lack of awareness, these issues often go unaddressed.

## 🎯 Project Goals

- Provide a simple, daily check-in tool for emotional and physical well-being.
- Empower mothers to recognize early symptoms and seek help.
- Offer voice-based interaction for users with low literacy or visual impairment.
- Reduce stigma around postpartum care and mental health.

## 💡 Solution

The Maternal Wellness Assistant is a smart chatbot and voice interface that:
- Asks daily mood and health-related questions.
- Screens for postpartum depression using PHQ-9.
- Provides after-care tips and wellness recommendations.
- Suggests nearby clinics, helplines, and online care services.
- Works in low-data or offline environments.

## ✨ Key Features

- ✅ **Daily Check-Ins** – Tracks emotional and physical symptoms.
- 🧠 **Mental Health Screening** – Integrated PHQ-9 for early detection of postpartum depression.
- 🎙️ **Voice Interaction** – Users can speak or listen in local languages.
- 📍 **Location-Based Support** – Connects users to relevant health services.
- 📶 **Low-Data Compatibility** – Built to work offline or with minimal internet access.

## 👩‍⚕️ Target Audience

- Pregnant and postpartum women of all income levels.
- Health NGOs, clinics, and community health workers.
- Rural and low-literacy communities.

## 🛠️ Technologies Used

| Functionality              | Technology / Tools               |
|---------------------------|----------------------------------|
| Chatbot (Text)            | Dialogflow / Rasa / Custom NLP   |
| Voice Input/Output        | Whisper / Google Speech API      |
| Backend Development       | Node.js / Python / Django        |
| Mobile Access             | Progressive Web App (PWA)        |
| Mental Health Screening   | PHQ-9 Logic                      |
| Analytics & Storage       | Firebase / MongoDB               |

## 📦 Project Structure (MVP)

- `chatbot/` – Daily check-in flows, self-care logic.
- `voice/` – Voice recognition and synthesis features.
- `screeners/` – PHQ-9 implementation.
- `ui/` – PWA frontend for mobile access.
- `data/` – User logs, mood scores, feedback analytics.

## 🧪 Testing Plan

- Conduct pilot testing with 20–30 mothers.
- Gather feedback on usability, comfort, and accessibility.
- Adjust chatbot flow, language, and voice prompts based on user feedback.

## 📈 Potential Impact

- Improved early detection of postpartum issues.
- Reduced emergency visits and health complications.
- Empowerment through daily wellness tracking.
- Greater inclusion through voice and offline features.

## 👩‍💻 Team

- **Margaret Naa Odua Boye** – Frontend Developer
- **Ellen Werempoah Ntiamoah** – Backend Developer (also some frontend)
- **Sarah Acquaye Amedior** – Backend Developer (also some frontend)


## 👩‍💻 Roles and Responsibilities

### 🌐 Frontend Developer
- Design and implement responsive, mobile-first user interfaces.
- Develop the Progressive Web App (PWA) for cross-device access.
- Integrate chatbot UI with backend APIs.
- Implement voice interaction UI components.
- Ensure accessibility, local language support, and a smooth user experience.

## 📍 Next Steps

- Define user personas and core pain points.
- Map out conversation and voice interaction flows.
- Build a working MVP with chatbot + basic voice assistant.
- Partner with local NGOs or health centers for testing.

## 🔗 Resources Needed

- Maternal health datasets
- Voice and language AI tools
- App hosting/deployment platform
- Public health partners for outreach and testing

## 🙌 How to Contribute

We welcome contributions from healthcare professionals, developers, and designers passionate about maternal health. Feel free to open issues, suggest features, or collaborate via pull requests.

---

**Let’s support mothers everywhere — one daily check-in at a time.**























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
