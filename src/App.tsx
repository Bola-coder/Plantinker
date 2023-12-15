import { Box } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";

const App = () => {
  return (
    <Box width={"100vw"}>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Box>
  );
};

export default App;
