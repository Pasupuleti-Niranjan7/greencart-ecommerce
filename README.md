
# 🌿 GreenCart - E-Commerce Application

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

</div>

<p align="center">
  <strong>A modern, feature-rich e-commerce web application specializing in indoor plants. This project is built to deliver a seamless shopping experience with robust authentication, dynamic product discovery, and persistent cart management.</strong>
</p>

---

## ✨ Key Features

### 🛍️ Shopping Experience
*   **Dynamic Product Catalog**: Browse a wide variety of indoor plants with detailed information.
*   **Smart Search**: Instantly filter products by name or type using a real-time search bar.
*   **Dynamic Sorting**: Sort products by **Price (Low-High, High-Low)** or **Name (A-Z)**.

### 🛒 Cart & Checkout
*   **Persistent Shopping Cart**: Your cart is automatically saved to **Local Storage**, ensuring data persistence.
*   **Seamless Management**: Easily add, remove, and update product quantities.
*   **Order Success Modal**: Instant visual feedback upon placing an order.

### 📦 Orders & Delivery
*   **Order History**: View a detailed list of past purchases, including order numbers, dates, and items.
*   **Smart Delivery Estimates**: Automatically calculates delivery times based on order value and quantity:
    -   Orders > ₹2000 with > 3 items: **Fast Delivery (2-3 days)**.
    -   Standard Delivery: **Within 7 days**.

### 🔐 User & Security
*   **Secure Authentication**: Robust login and registration system powered by **Firebase Authentication**.
*   **Protected Routes**: Ensures that only authenticated users can access the shop, cart, and order history.
*   **Environment Security**: API keys and configuration are securely managed via environment variables.

---

## 🛠️ Tech Stack & Rationale

This project leverages a modern frontend stack chosen for performance, scalability, and developer experience.

| Technology | Purpose | Why it was chosen |
| :--- | :--- | :--- |
| **React** | **Frontend Framework** | Component-based architecture allows for reusable UI elements (like Product Cards, Modals) and efficient state management. |
| **Vite** | **Build Tool** | Extremely fast development server and optimized production builds, offering a superior developer experience compared to CRA. |
| **Tailwind CSS** | **Styling** | Utility-first CSS framework that enables rapid UI development, consistent design tokens, and built-in responsiveness without writing custom CSS files. |
| **Zustand** | **State Management** | A lightweight, fast, and scalable state management solution. Used here for: <br>• **Auth Store**: Managing user sessions. <br>• **Cart Store**: Handling cart operations with built-in persistence. <br>• **Order Store**: Managing order history and fetching data from Firestore. |
| **Firebase** | **Backend-as-a-Service** | Provides robust, secure, and easy-to-implement **Authentication** (Email/Password) and **Database** (Firestore) without maintaining a custom server. |
| **React Helmet Async** | **SEO** | Manages document head (title, meta tags) to improve SEO and social sharing for each page. |
| **React Toastify** | **Notifications** | Simple and elegant way to show non-blocking notifications to users. |

---

## � Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
*   [Node.js](https://nodejs.org/en/) (v14 or higher)
*   [npm](https://www.npmjs.com/)

### Environment Setup

1.  Create a `.env` file in the root directory.
2.  Add your Firebase configuration keys:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/niranjan-indoor-plants.git
    cd niranjan-indoor-plants
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    The application will start at `http://localhost:5173`.

---

## 📱 Responsive Design

The application is fully responsive and optimized for:
*   🖥️ Desktop
*   💻 Tablet
*   📱 Mobile

---

