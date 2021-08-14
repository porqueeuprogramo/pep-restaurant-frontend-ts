import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RestaurantsProvider } from "./hooks/useRestaurants";
import Header from "./components/Header";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <RestaurantsProvider>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </RestaurantsProvider>
    </BrowserRouter>
  );
}

export default App;
