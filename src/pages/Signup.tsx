// import React from "react";
import {
  Box,
  Text,
  Image,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/authContext";
import ManagementImage from "./../assets/images/taskImage.svg";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  interface FormData {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    agreed_to_terms: boolean;
    // Add more fields as needed
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      agreed_to_terms: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required"),
      confirm_password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
      agreed_to_terms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
    }),
    onSubmit: (values: FormData) => {
      console.log(values);
      handleSignup(values.username, values.email, values.password);
    },
  });

  const handleSignup = async (
    username: string,
    email: string,
    password: string
  ) => {
    await signup(username, email, password);
    navigate("/");
  };
  return (
    <Flex
      fontFamily={"Poppins"}
      height={"90vh"}
      overflowY={"hidden"}
      position={"relative"}
    >
      {/* Left */}
      <Box
        flexBasis={"50%"}
        backgroundColor={"plantinker.500"}
        height={"100vh"}
      >
        {/* <Text
          fontSize={"24px"}
          fontWeight={"500"}
          color={"#FFF"}
          marginLeft={"20px"}
          marginTop={"20px"}
          cursor={"pointer"}
        >
          PlanTinker
        </Text> */}
        <Image
          src={ManagementImage}
          alt="Illustration"
          height={"80%"}
          width={"90%"}
          marginTop={"10%"}
        />
      </Box>
      {/* Form Container */}
      <Flex
        flexBasis={"50%"}
        height={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Box
        //   height={"100%"}
        >
          {/* Form */}
          <FormControl
            as="form"
            width={"80%"}
            margin={"0 auto"}
            onSubmit={formik.handleSubmit}
          >
            <Text fontWeight={"600"} fontSize={"18px"} marginTop={"5px"}>
              Account Signup
            </Text>
            <Text fontSize={"14px"} fontWeight={"400"} color={"#8692A6"}>
              Become a PlanTinkerer and start organizing your tasks
            </Text>
            <FormLabel mt={"20px"}>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                //   color={"#8692A6"}
                mb={"10px"}
              >
                Username
              </Text>
              <Input
                type="text"
                placeholder="John"
                fontSize={"14px"}
                variant={"outline"}
                focusBorderColor="gray.300"
                borderRadius={"4px"}
                borderWidth={"1px"}
                borderColor={"#8692A6"}
                name="username"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <Text color="red" fontSize="12px">
                  {formik.errors.username}
                </Text>
              )}
            </FormLabel>

            <FormLabel mt={"20px"}>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                //   color={"#8692A6"}
                mb={"10px"}
              >
                Email
              </Text>
              <Input
                type="email"
                placeholder="johndoe@gmail.com"
                fontSize={"14px"}
                variant={"outline"}
                focusBorderColor="gray.300"
                borderRadius={"4px"}
                borderWidth={"1px"}
                borderColor={"#8692A6"}
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <Text color="red" fontSize="12px">
                  {formik.errors.email}
                </Text>
              )}
            </FormLabel>

            <FormLabel mt={"20px"}>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                //   color={"#8692A6"}
                mb={"10px"}
              >
                Password
              </Text>
              <Input
                type="password"
                placeholder="**********"
                fontSize={"14px"}
                variant={"outline"}
                focusBorderColor="gray.300"
                borderRadius={"4px"}
                borderWidth={"1px"}
                borderColor={"#8692A6"}
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <Text color="red" fontSize="12px">
                  {formik.errors.password}
                </Text>
              )}
            </FormLabel>
            <FormLabel mt={"20px"}>
              <Text
                fontSize={"14px"}
                fontWeight={"400"}
                //   color={"#8692A6"}
                mb={"10px"}
              >
                Confirm Password
              </Text>
              <Input
                type="password"
                placeholder="**********"
                fontSize={"14px"}
                variant={"outline"}
                focusBorderColor="gray.300"
                borderRadius={"4px"}
                borderWidth={"1px"}
                borderColor={"#8692A6"}
                name="confirm_password"
                id="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirm_password &&
                formik.errors.confirm_password && (
                  <Text color="red" fontSize="12px">
                    {formik.errors.confirm_password}
                  </Text>
                )}
            </FormLabel>
            <Box mt="20px">
              <Checkbox
                size={"md"}
                borderColor={"#8692A6"}
                fontSize={"14px"}
                name="agreed_to_terms"
                id="agreed_to_terms"
                isChecked={formik.values.agreed_to_terms}
                onChange={formik.handleChange}
              >
                I have read the Terms and conditions
              </Checkbox>
              {formik.touched.agreed_to_terms &&
                formik.errors.agreed_to_terms && (
                  <Text color="red" fontSize="12px">
                    {formik.errors.agreed_to_terms}
                  </Text>
                )}
            </Box>
            <Box mt={"20px"}>
              <Button
                colorScheme="plantinker"
                width={"100%"}
                paddingY={"20px"}
                type="submit"
              >
                Register
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Flex>
      {/* </Box> */}
    </Flex>
  );
};

export default Signup;
