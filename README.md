# 📱 Mobile Price Classification Web App

A full-stack machine learning project that predicts the **price category of a mobile phone** based on selected features using a Decision Tree model.

---

## 🌐 Live Demo

- Frontend: https://mldeployements.netlify.app/
- Backend API: https://ml-deployement-pmpa.onrender.com/predict

---

## 🚀 Project Overview

This web app allows users to enter mobile specifications and instantly get a predicted **price category (0–3)**.

### 🔁 Workflow:
User Input → Frontend (Netlify) → Backend API (Render) → ML Model → Prediction → Display Result

---

## 🧠 Machine Learning

- Model: Decision Tree Classifier  
- Dataset: Mobile Price Classification Dataset (Kaggle)  

### Features Used:
- battery_power  
- ram  
- int_memory  
- mobile_wt  
- clock_speed  

---

## 🖥️ Tech Stack

### Frontend:
- HTML  
- CSS  
- JavaScript  

### Backend:
- Python  
- FastAPI  
- Uvicorn / Gunicorn  

### Deployment:
- Frontend → Netlify  
- Backend → Render  

---

## 📂 Project Structure
project/
│
├── backend/
│ ├── app.py
│ ├── model.py
│ └── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── README.md
└── .gitignore

---

## ⚙️ Run Locally

### 1. Clone Repository
git clone https://github.com/girishbetter/ML_Deployement.git

cd ML_Deployement

### 2. Setup Backend
cd backend
python -m venv venv
venv\Scripts\activate # For Windows
pip install -r requirements.txt
uvicorn app:app --reload


### 3. Run Frontend
- Open `frontend/index.html` in browser  
- OR use Live Server in VS Code  

---

## 🌍 Deployment Details

- Frontend hosted on Netlify  
- Backend hosted on Render  

---

## ⚠️ Notes

- Backend may take a few seconds to respond initially (Render free tier sleeps)
- Make sure correct API URL is used in `script.js`

---

## 📌 Future Improvements

- Add more input features for better accuracy  
- Improve UI/UX design  
- Add authentication system  
- Try advanced ML models (Random Forest, XGBoost)

---

## 👨‍💻 Author

Girish  
B.Tech Student  

---

## ⭐ Support

If you like this project, give it a star ⭐  
It helps more than you think.
