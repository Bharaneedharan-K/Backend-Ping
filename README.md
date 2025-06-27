# 🔄 Keep-Alive Backend (Render Free Tier)

This backend server keeps itself and other backend URLs alive on Render's Free Tier by pinging them regularly.

## 🚀 How to Use

1. **Clone or Upload the Project to GitHub**

2. **Add your backend URLs** to `urls.json`:
```json
[
  "https://your-first-backend.onrender.com",
  "https://your-second-backend.onrender.com"
]
```

3. **Deploy to Render**
   - Root Directory: `backend-keepalive`
   - Build Command: `npm install`
   - Start Command: `npm start`

Done! Your services will now be pinged every few minutes to stay awake.