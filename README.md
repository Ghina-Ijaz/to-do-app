# Todo App — React + Node.js + MongoDB

## Run in 4 steps

### Step 1 — Install
```bash
cd backend  &&  npm install
cd ../frontend  &&  npm install
```

### Step 2 — Configure MongoDB
Open `backend/config/config.env` and set your MongoDB URI:

```
# Local MongoDB:
MONGO_URI=mongodb://127.0.0.1:27017/tododb

# OR MongoDB Atlas (free):
MONGO_URI=mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/tododb
```
ccc
### Step 3 — Start Backend (Terminal 1)
```bash
cd backend
npm run dev
# → Server Started at Port 4000!
# → ✅ MongoDB Connected
```

### Step 4 — Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
# → http://localhost:5173/
```

Open **http://localhost:5173** in your browser.

---

## What was fixed from the original
| File | Fix |
|------|-----|
| `backend/app.js` | CORS now allows localhost:5173 |
| `backend/Utils/CookieAndToken.js` | `secure:false` + `sameSite:Lax` for localhost |
| `backend/Controllers/Users/userController.js` | Same cookie fix on logout |
| `frontend/vite.config.js` | Added proxy `/api → localhost:4000` |
| `frontend/src/BackendServerLinks.js` | Changed to relative `/api/v1` paths |
| `backend/config/config.env` | Created (was missing entirely) |
