import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={theme} resetCSS={true}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
);
