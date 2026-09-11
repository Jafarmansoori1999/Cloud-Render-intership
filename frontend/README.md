# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
Cloud Student Management System & Cloud Infrastructure

Architecture Overview:
- Frontend: React / Vite (Hosted on Firebase Hosting)
- Backend: Node.js / Express.js (Hosted on Render Web Service)
- Database: MongoDB Atlas
- Security Layer: Helmet Security Headers, API Rate Limiting
- Monitoring: UptimeRobot Health Checks (/health endpoint every 5 mins)

Security Implementations:
- HTTP Security Headers using helmet package
- API Rate Limiting using express-rate-limit package (Max 100 requests / 15 mins)
- Cloudflare Security Architecture Evaluation

Monitoring & Keep-Alive Strategy:
- Health Check Endpoint: GET /health
- UptimeRobot ping configured for 24/7 uptime to prevent Render cold starts

Project Milestones Completed:
1. MERN Stack App & Git Setup
2. Render Backend & Firebase Deployment
3. Cloudflare Security Layer Evaluation
4. Express Security Hardening (Helmet + Rate Limiting)
5. Production Monitoring & Keep-Alive Automation
6. Technical Documentation & Report Finalization