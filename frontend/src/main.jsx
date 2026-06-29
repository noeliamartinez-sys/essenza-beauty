import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/variables.css";
import "./styles/global.css";

import App from "./App";

import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(

<StrictMode>

<UserProvider>

<CartProvider>

<App/>

</CartProvider>

</UserProvider>

</StrictMode>

);