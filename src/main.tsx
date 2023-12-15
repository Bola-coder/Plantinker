import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./config/chakra";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
);
