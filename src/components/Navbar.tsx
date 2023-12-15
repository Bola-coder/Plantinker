import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.png";
const Navbar = () => {
  return (
    <Box
      as={"nav"}
      fontFamily={"Montserrat"}
      height="10vh"
      position={"sticky"}
      top={"0"}
      zIndex={"100"}
      backgroundColor={"#FFF"}
      overflowY={"hidden"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo */}
        <Box flexBasis={"20%"} cursor={"pointer"}>
          <NavLink to={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={"80%"}
              ml={"60px"}
              mt={"10px"}
            />
          </NavLink>
        </Box>
        {/* Menu */}
        <Flex flexBasis={"50%"} justifyContent={"center"} alignItems={"center"}>
          {/* <Box p={"10px"}>
            <Text
              fontSize={"16px"}
              fontWeight={"500"}
              color={"gray.500"}
              cursor={"pointer"}
              _hover={{ color: "plantinker.500", fontWeight: "600", borderBottom: "2px solid #F5F5F5" }}
            >
              <NavLink to="/">Create Task</NavLink>
            </Text>
          </Box> */}
          <Box p={"10px"}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color={"gray.500"}
              cursor={"pointer"}
              _hover={{
                color: "plantinker.500",
                fontWeight: "600",
                borderBottom: "2px solid #F5F5F5",
              }}
            >
              <NavLink to="/">Dashboard</NavLink>
            </Text>
          </Box>
          <Box p={"10px"}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color={"gray.500"}
              cursor={"pointer"}
              _hover={{
                color: "plantinker.500",
                fontWeight: "600",
                borderBottom: "2px solid #F5F5F5",
              }}
            >
              <NavLink to="/">Picing</NavLink>
            </Text>
          </Box>
        </Flex>
        {/* Setting and Auth */}
        <Flex flexBasis={"20%"} justifyContent={"center"}>
          <Box p={"10px"}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color={"gray.500"}
              cursor={"pointer"}
              _hover={{
                color: "plantinker.500",
                fontWeight: "600",
                borderBottom: "2px solid #F5F5F5",
              }}
            >
              <NavLink to="/register">Signup</NavLink>
            </Text>
          </Box>
          <Box p={"10px"}>
            <Text
              fontSize={"16px"}
              fontWeight={"600"}
              color={"gray.500"}
              cursor={"pointer"}
              _hover={{
                color: "plantinker.500",
                fontWeight: "600",
                borderBottom: "2px solid #F5F5F5",
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
