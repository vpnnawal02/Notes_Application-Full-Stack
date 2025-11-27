# Notes App — Django REST + React + JWT Authentication
A full-stack notes application built with Django REST Framework (DRF) for the backend and React + Vite for the frontend.
Users can register, log in using JWT authentication, and create, view, and delete personal notes.

🚀 Deployed on:

Frontend (React): Netlify
Backend (Django): Render <br>
(Activate  Backend:  https://notes-application-w94v.onrender.com)
Live Link: https://notesapplication-02.netlify.app/register

# Features
🔐 Authentication

User Registration
Login with JWT
Access & Refresh Tokens
Protected routes

📝 Notes Management

Create Notes
View Notes
Delete Notes
Each user sees only their own notes

🌐 Deployed & Production Ready

CORS configured for Netlify → Render
Environment variables for security
Token-based session handling
Error-handled forms & API calls

# Tech Stack

##  Frontend

React
Vite
TailwindCSS
Axios
React Router v6
JWT handling in localStorage

##  Backend

Django
Django REST Framework
SimpleJWT
Django CORS Headers
Gunicorn (production)

# Folder Structure

notes-app/
│
├── backend/
│   ├── api/
│   ├── backend/
│   ├── static/
│   ├── db.sqlite3
│   └── requirements.txt
│
└── frontend/
    ├── src/
    ├── public/
    ├── dist/
    └── package.json

# Deployment
##  Backend (Render)

##  Create a Web Service
Build command:
pip install -r backend/requirements.txt

## Start command:
cd backend && gunicorn backend.wsgi:application


##  Add environment variables:
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=notes-application.onrender.com,localhost,127.0.0.1

Deploy!

# Frontend (Netlify)

## Set base directory:
frontend

## Build command:
npm run build

## Publish directory:
dist

Add environment variable:
VITE_API_URL=https://your-backend.onrender.com

Add _redirects file in public/:
/*  /index.html   200

#  Environment Variables
## Backend
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=your-backend-domain

## Frontend
VITE_API_URL=https://your-backend.onrender.com

# Running Locally
## Backend
cd backend
pip install -r requirements.txt
python manage.py runserver

## Frontend
cd frontend
npm install
npm run dev

# Contributing
Pull requests are welcome!
Open an issue first if you want to discuss changes.
