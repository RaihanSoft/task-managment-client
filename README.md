# **Task Manager**

## **Overview**

Task Manager is a **responsive** and **intuitive** task management application designed to help users **organize and track** their tasks efficiently. With a **drag-and-drop** interface, users can seamlessly manage tasks across three categories: **To-Do, In Progress, and Done**. The application supports **real-time updates**, **Firebase authentication**, and **persistent storage** using **MongoDB and Express.js**.

## **Live Demo**

- [Live](https://task-managment-2ce16.web.app/)

## **Key Features**

✅ **User Authentication** - Secure login and registration via **Firebase Auth**  
✅ **Task Management** - Create, edit, delete, and reorder tasks effortlessly  
✅ **Drag-and-Drop** - Organize tasks smoothly using **DND-Kit**  
✅ **Real-Time Updates** - Sync changes instantly with **Socket.io**  
✅ **Persistent Storage** - All tasks are saved in **MongoDB** for future access  
✅ **Modern UI** - Built with **React, Tailwind CSS, and DaisyUI**  

## **Technology Stack**

### **Frontend**
- React.js (Vite.js)
- Tailwind CSS & DaisyUI
- Firebase Authentication
- React Query for state management
- Drag-and-Drop with DND-Kit

### **Backend**
- Express.js (Node.js)
- MongoDB (Database)
- Socket.io for real-time updates

## **Project Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/RaihanSoft/Task-Manager
cd task-management-app
```

### **2. Setup the Frontend**

```bash
cd frontend
npm install
npm run dev
```

### **3. Setup the Backend**

```bash
cd backend
npm install
npm start
```

### **4. Configure Environment Variables**

#### **Backend (.env)**
```
DB_USER=your_mongodb_user
DB_PASS=your_secret_key
```

#### **Frontend (.env)**
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
```

## **Dependencies**

```json
{
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/sortable": "^10.0.0",
  "@tanstack/react-query": "^5.66.7",
  "axios": "^1.7.9",
  "firebase": "^11.3.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-modal": "^3.16.3",
  "react-movable": "^3.4.0",
  "react-router-dom": "^6.29.0",
  "react-spinners": "^0.15.0",
  "react-tooltip": "^5.28.0",
  "socket.io-client": "^4.8.1",
  "sweetalert2": "^11.6.13"
}
```

