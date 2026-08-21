
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import { App1 } from "./App.jsx";
import About from "./components/About.jsx";
import Contact, { contactAction } from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import Home, { productsLoader } from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

import { Bounce, ToastContainer } from "react-toastify";
import { CartProvider } from "./components/Strore/cart-context.jsx";

// ===============================
// ROUTES
// ===============================

const routeDefinitions = createRoutesFromElements(
  <Route
    path="/"
    element={<App1 />}
    errorElement={<ErrorPage />}
  >
    <Route
      index
      element={<Home />}
      loader={productsLoader}
    />

    <Route
      path="home"
      element={<Home />}
      loader={productsLoader}
    />

    <Route
      path="about"
      element={<About />}
    />

    <Route
      path="contact"
      element={<Contact />}
      action={contactAction}
    />

    <Route
      path="login"
      element={<Login />}
    />

    <Route
      path="cart"
      element={<Cart />}
    />

    <Route
      path="products/:productId"
      element={<ProductDetails />}
    />
  </Route>
);


// ===============================
// CREATE ROUTER
// ===============================

const appRouter = createBrowserRouter(routeDefinitions);


// ===============================
// RENDER APPLICATION
// ===============================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>

    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  </StrictMode>
);