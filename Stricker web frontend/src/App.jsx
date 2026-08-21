

import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

export function App1() {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center min-h-[852px]">
          <span className="text-4xl font-semibold">
            Loading...
          </span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;