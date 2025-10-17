# 📊 Datavinci Project – Assignment 1

## 🧩 Overview
This project is built as part of the **Datavinci Assignment 1**.  
It includes a **FastAPI backend** for managing campaign data and a **Next.js frontend** to visualize it in a clean, responsive UI.

---

## 🚀 Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Fetch API for backend communication

### **Backend**
- [FastAPI](https://fastapi.tiangolo.com/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [PostgreSQL](https://www.postgresql.org/)
- Hosted on [Railway](https://railway.app/)

---

## 🌐 Live Links

- **Frontend (Vercel):**  
  👉 [https://datavinci-project-assignment-1.vercel.app/](https://datavinci-project-assignment-1.vercel.app/)

- **Backend (Railway):**  
  👉 [https://datavinci-project-assignment-1-production.up.railway.app/campaigns](https://datavinci-project-assignment-1-production.up.railway.app/campaigns)

- **GitHub Repository:**  
  👉 [https://github.com/kamalnayantripathi/datavinci-project-assignment-1](https://github.com/kamalnayantripathi/datavinci-project-assignment-1)

---

## 🛠️ Setup Instructions

### **1. Clone the repository**
```bash
git clone https://github.com/kamalnayantripathi/datavinci-project-assignment-1.git
cd datavinci-project-assignment-1
```

⚙️ Backend Setup (FastAPI)
Step 1: Move to backend directory
cd backend

Step 2: Create a virtual environment
python -m venv venv
source venv/bin/activate    # On Mac/Linux
venv\Scripts\activate       # On Windows

Step 3: Install dependencies
pip install -r requirements.txt

Step 4: Setup environment variables
Create a .env file inside the backend folder:
DATABASE_URL=postgresql://postgres:YgxpdZJhyRQAvfJelDVKNzPakIRsGlsd@centerbeam.proxy.rlwy.net:35207/railway
FRONTEND_URL=https://datavinci-project-assignment-1.vercel.app

Step 5: Run the backend
uvicorn main:app --reload

Your backend will start running on
👉 http://127.0.0.1:8000


💻 Frontend Setup (Next.js)
Step 1: Move to frontend directory
cd next-frontend

Step 2: Install dependencies
npm install

Step 3: Setup environment variables
Create a .env.local file in the root of your Next.js project:
NEXT_PUBLIC_API_URL=https://datavinci-project-assignment-1-production.up.railway.app

Step 4: Run the frontend
npm run dev

Now, the frontend should be running on
👉 http://localhost:3000


🗄️ Database
The project uses PostgreSQL hosted on Railway.
SQL scripts for database setup are included in the repo under the /sql directory (if applicable).

Connection string:
postgresql://postgres:YgxpdZJhyRQAvfJelDVKNzPakIRsGlsd@centerbeam.proxy.rlwy.net:35207/railway


🧠 Project Functionality
• Fetches campaign data from the FastAPI backend.
• Displays campaign table dynamically using React state.
• Fully responsive and mobile-friendly interface.
• Handles API failures gracefully with user-friendly error messages.


⚠️ Notes
• In case of large datasets, fetching may take a few seconds.
• CORS and environment variables are properly configured for both environments.
• Ensure backend is running before starting the frontend locally.


🎥 Screen Recording
(Will be added after the explanation video is recorded.)
