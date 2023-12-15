import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
// import todoListImage from "./../assets/images/todoList.svg";
import taskAndMan from "./../assets/images/taskAndManWithoutBG.png";
import teamwork from "./../assets/images/teamwork.jpg";
import FeatureDisplay from "../components/FeatureDisplay";
const Home = () => {
  return (
    <Box fontFamily={"Montserrat"} overflowY={"hidden"}>
      {/* Banner */}
      <Box
        width={"100vw"}
        height={"90vh"}
        // bgGradient="linear(to-r, #625D82, #473B59)"
        bgGradient="linear(to-br, #e4c1f9, #f3e7e9)"
      >
        <Flex
          height={"100%"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          //   textAlign={"center"}
        >
          <Box flexBasis={"50%"} padding={"10px"} paddingLeft={"60px"}>
            <Text
              as={"h1"}
              color={"#473B59"}
              // color={"#F0E6FF"} /* Light color that complements the gradient */
              fontSize={"48px"}
              fontWeight={"600"}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)" /* Add a text shadow */
            >
              Achieve More by Managing Tasks Effectively
            </Text>
            <Text
              as={"h3"}
              color={"#473B59"}
              fontSize={"16px"}
              fontWeight={"600"}
              width={"70%"}
            >
              {/* PlanTinker - Where efficiency meets simplicity */}
              PlanTinker streamlines your tasks seamlessly, marrying efficiency
              with simplicity. Our platform harmonizes productivity tools for
              effortless task management, empowering you to achieve more with
              ease and clarity.
            </Text>
            <Button
              colorScheme={"plantinker"}
              size={"lg"}
              width={"80%"}
              mt={"30px"}
            >
              Get Started
            </Button>
          </Box>
          <Box flexBasis={"40%"}>
            <Image src={taskAndMan} />
          </Box>
        </Flex>
      </Box>

      {/* Features */}
      <FeatureDisplay />

      {/* Collaboration */}
      <Box bg="#F7FAFC" p={10} borderRadius={10} pt={20}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>
          Task Collaboration Made Easy
        </Text>
        <Flex alignItems={"center"}>
          <Box flexBasis={"50%"}>
            <Image src={teamwork} borderRadius={4} width={"100%"} />
          </Box>
          <Box flexBasis={"50%"} p={5}>
            <Text fontSize="lg" mb={5} fontWeight={"500"}>
              Work together with your team to get things done faster and more
              efficiently. Assign tasks to team members and track their progress
              in real-time.
            </Text>
            <List spacing={"3"}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text as="span" fontSize={"16px"} fontWeight={"500"}>
                  Assign tasks to team members
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text as="span" fontSize={"16px"} fontWeight={"500"}>
                  Track task progress in real-time
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text as="span" fontSize={"16px"} fontWeight={"500"}>
                  Collaborate efficiently by commenting and discussing tasks.{" "}
                </Text>
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text as="span" fontSize={"16px"} fontWeight={"500"}>
                  Track team activities and contributions effortlessly.{" "}
                </Text>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials */}

      {/* Subscription */}

      {/* Mobile App */}

      {/* Footer */}
    </Box>
  );
};

export default Home;
