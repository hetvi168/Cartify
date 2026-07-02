# 🛒 Cartify

<div align="center">

<img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" width="100"/>

### Full-Stack MERN E-Commerce Application

A modern e-commerce platform built with the **MERN Stack** featuring secure authentication, product management, shopping cart, Razorpay payments, and an admin dashboard.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow)

</div>

---

# 📖 Overview

Cartify is a complete full-stack e-commerce web application built using the **MERN Stack**.

It provides customers with a seamless shopping experience while giving administrators full control over products, users, and orders.

## Key Highlights

- 🔐 JWT Authentication
- 🛍 Product Management
- 🛒 Shopping Cart
- 💳 Razorpay Payment Integration
- ☁️ Cloudinary Image Uploads
- 👤 Admin Dashboard
- 📱 Responsive Design

---

# 🚀 Tech Stack

## Frontend

- React.js
- Redux Toolkit
- Context API
- React Router
- CSS

## Backend

- Node.js
- Express.js
- JWT Authentication
- REST API

## Database

- MongoDB
- Mongoose

## Third-Party Services

- Cloudinary
- Multer
- Razorpay

---

# ✨ Features

## 👤 User Features

- User Registration
- Secure Login
- Browse Products
- Search Products
- Add to Cart
- Remove from Cart
- Checkout
- Razorpay Payments
- View Orders
- Update Profile

---

## 🛡 Admin Features

- Admin Login
- Dashboard
- Add Products
- Edit Products
- Delete Products
- Manage Orders
- Manage Users

---

## 💳 Payment

- Razorpay Integration
- Secure Checkout
- Order Confirmation

---

# 📂 Project Structure

```text
Cartify
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/cartify.git

cd cartify
```

---

## Install Dependencies

```bash
npm run build
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/cartify

JWT_SECRET=super_secret_key

RAZORPAY_KEY_ID=your_key_id

RAZORPAY_KEY_SECRET=your_key_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

# 🌱 Seed Database

```bash
npm run seed
```

### Admin Credentials

Email

```text
admin@cartify1.com
```

Password

```text
password123
```

---

# ▶️ Run Application

```bash
npm run dev
```

### Frontend

```
http://localhost:3000
```

### Backend

```
http://localhost:5000
```

---

# ☁️ Deployment

Deploy easily using **Render**.

### Build Command

```bash
npm run render-build
```

### Start Command

```bash
npm start
```

Environment

```env
NODE_ENV=production
```

---

# 📬 API Collection

The project includes a Postman collection.

```
Cartify_Postman_Collection.json
```

Available APIs

- Authentication
- Products
- Cart
- Orders
- Users
- Admin

---

# 🤝 Contributing

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Hetvi Patel**

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a star!

Made with ❤️ using the MERN Stack

</div>
