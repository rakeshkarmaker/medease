# ⚙️ Project Setup Guide

## 1. Clone repository
git clone <repo-link>

----------------------------------

## 2. Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=abc123

Run backend:
npm run dev

----------------------------------

## 3. Frontend Setup
cd frontend
npm install
npm run dev

----------------------------------

## 4. Admin Panel (if exists)
cd admin
npm install
npm run dev



## 0. Project Roadmaps, What I did actually!
npm create vite@latest
npm install
npm install axios react-router-dom react-toastify
npm install tailwindcss @tailwindcss/vite
npm run dev