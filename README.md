# TalkPal - Real-Time Chat Application

TalkPal is a modern real-time chat application built using the **MERN stack** with **Socket.io** for real-time communication. It features authentication, authorization, online user status, and seamless messaging.

## 🚀 Tech Stack
- **Frontend:** React, TailwindCSS, Daisy UI, Zustand (Global State Management)
- **Backend:** Node.js, Express.js, MongoDB, Socket.io
- **Authentication:** JWT (JSON Web Token)
- **Real-time Communication:** Socket.io

## 🔹 Features
- 🔑 **Authentication & Authorization** (JWT-based login and registration)
- 💬 **Real-time Messaging** with Socket.io
- 🟢 **Online User Status** Indicator
- 🗨️ **One-on-one Conversations**
- 🗃️ **Persistent Message Storage** (MongoDB)
- ⚡ **Global State Management** with Zustand
- 🛡️ **Error Handling** on both Client and Server

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/talkpal.git
cd talkpal
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## 🖥️ Environment Variables
Create a `.env` file in the **backend** directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## 🚀 Usage
1. **Register/Login** to access the chat app.
2. **Send real-time messages** to connected users.
3. **See online users** in real time.
4. **Enjoy a seamless chat experience!**


## 🛠️ Technologies Used
- **React.js** for the frontend UI
- **TailwindCSS + DaisyUI** for styling
- **Zustand** for state management
- **Node.js + Express.js** for the backend API
- **MongoDB** for database storage
- **Socket.io** for real-time messaging
- **JWT** for secure authentication

---

