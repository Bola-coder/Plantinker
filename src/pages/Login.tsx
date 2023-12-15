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
import ManagementImage from "./../assets/images/taskImage.svg";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
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
      agreed_to_terms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleLogin = () => {
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
        <Text
          fontSize={"24px"}
          fontWeight={"500"}
          color={"#FFF"}
          marginLeft={"20px"}
          marginTop={"20px"}
          cursor={"pointer"}
        >
          PlanTinker
        </Text>
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
        {/* Form */}
        <FormControl as="form" width={"80%"} margin={"0 auto"}>
          <Text fontWeight={"600"} fontSize={"18px"} marginTop={"5px"}>
            Account Login
          </Text>
          <Text fontSize={"14px"} fontWeight={"400"} color={"#8692A6"}>
            Welcome back PlanTinkerer, login to pick up where you left off
          </Text>

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
              //   value={formik.values.email}
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
            />
          </FormLabel>

          <Box mt="20px">
            <Checkbox
              size={"md"}
              borderColor={"#8692A6"}
              fontSize={"14px"}
              name="agreed_to_terms"
              id="agreed_to_terms"
              //   isChecked={formik.values.agreed_to_terms}
              //   onChange={formik.handleChange}
            >
              Remember me
            </Checkbox>
            {/* {formik.touched.agreed_to_terms &&
                    formik.errors.agreed_to_terms && (
                      <Text color="red">{formik.errors.agreed_to_terms}</Text>
                    )} */}
          </Box>
          <Box mt={"20px"}>
            <Button
              colorScheme="plantinker"
              width={"100%"}
              paddingY={"20px"}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
