# Deco Cerámicas

A modern e-commerce web application for ceramic decoration products, built with React, TypeScript, and Vite. Browse products by category, view detailed product information, and manage your shopping cart with a smooth, responsive user experience.

## 🚀 Features

- **Home Page**: Beautiful landing page with category navigation
  - Deco Arte (Artistic Decoration)
  - Deco Home (Home Decoration)
  - Cocina (Kitchen)
  - Accesorios (Accessories)

- **Product Catalog**: Browse products by category with filtering options
  - Sort by price (ascending/descending)
  - Best sellers filter
  - Responsive product grid

- **Product Details**: Detailed product view with image carousel

- **Shopping Cart**: 
  - Add/remove products
  - Persistent cart using localStorage
  - Real-time subtotal calculation

- **Responsive Design**: Mobile-friendly interface with burger menu navigation

- **Error Handling**: Custom 404 error page

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Build Tool**: Vite 6.0.1
- **Routing**: React Router DOM 7.1.1
- **Styling**: Bootstrap 5.3.3, Bootstrap Icons 1.11.3
- **Form Handling**: React Hook Form 7.54.1 with Zod 3.24.1 validation
- **State Management**: React Context API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deco-ceramicas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── assets/           # Static assets (images)
├── components/       # Reusable React components
│   ├── catalog/     # Catalog-related components (Filter, Products)
│   ├── layout/      # Layout components (Header, Footer, Cart)
│   └── shared/      # Shared components (CustomForm, CustomInput)
├── constants/        # Application constants (NavLinks)
├── context/          # React Context providers (CartContext)
├── hooks/            # Custom React hooks (useParams)
├── pages/            # Page components
│   ├── Catalog/     # Product catalog page
│   ├── Home/        # Home page with category navigation
│   ├── ProductDetails/  # Product detail page
│   └── Error404/    # 404 error page
└── Routes/           # Routing configuration
```

## 🔌 API Integration

The application expects a backend API running at `http://localhost:3005` with the following endpoints:

- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/:id` - Get product by ID

**Note**: Make sure your backend server is running before using the application.

## 🎨 Key Components

### Cart Context
The shopping cart state is managed globally using React Context API with localStorage persistence. Cart data persists across browser sessions.

### Routing
- `/` - Home page
- `/catalog?category=<CATEGORY>` - Product catalog filtered by category
- `/product-details?id=<PRODUCT_ID>` - Product details page
- `/HomeAnimation` - Home animation page

### Categories
- `COCINA` - Kitchen products
- `DECO HOME` - Home decoration products
- `DECO ARTE` - Artistic decoration products
- `ACCESORIOS` - Accessories

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory, ready to be deployed to any static hosting service.

## 📝 Development Notes

- The project uses TypeScript for type safety
- ESLint is configured for code quality
- Bootstrap is used for responsive styling and components
- React Hook Form with Zod is used for form validation
- Cart state is persisted in localStorage

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 👨‍💻 Author

Deco Cerámicas - E-commerce Application

---

**Note**: This is a frontend application that requires a backend API to function fully. Ensure your backend server is configured and running before testing the application.

## 🗺️ Roadmap

Future implementations planned for this project:

-  Payment system integration
-  Cloud image storage (images will be stored in the cloud and URLs will be served from the database)
-  User authentication
-  Order history
-  Admin dashboard

## 📝 Notes

This project uses **Zod** for form validation primarily as a demonstration of its capabilities. For production applications with a single form, vanilla validation might be more appropriate. However, Zod provides excellent type safety and scalability for future form additions.

## 📄 License

MIT

---
