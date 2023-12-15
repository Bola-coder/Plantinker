import { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import teamCollaborationImage from "./../assets/images/teamCollaborationOne.jpeg";
const FeatureDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [imageSlide, setImageSlide] = useState(true);

  const toggleActiveIndex = (index: number) => {
    setImageSlide(false);
    setTimeout(() => {
      setActiveIndex(index);
      setImageSlide(true);
    }, 300);
  };

  useEffect(() => {
    setImageSlide(true);
    () => {
      setImageSlide(false);
    };
  }, [activeIndex]);

  const features = [
    {
      id: 1,
      title: "Create tasks",
      description:
        "Plantinker offers a user-friendly task creation process that saves you time and effort. With just a few clicks, generate new tasks and start organizing your workload hassle-free.",
      image: "",
    },
    {
      id: 2,
      title: "Collaboration",
      description:
        "Assign tasks seamlessly to team members or collaborators with ease. Our app facilitates efficient collaboration by allowing you to allocate responsibilities, set ownership, and track task progress in real-time",
      image: "",
    },
    {
      id: 3,
      title: "Monitor Changes",
      description:
        "Plantinker equips you with robust tools to monitor changes in real-time, enabling you to track progress, stay informed, and maintain control over your tasks.",
      image: "",
    },
    {
      id: 4,
      title: "Reminders and Notifications",
      description:
        "Stay on top of your tasks with intelligent reminders and notifications. Receive alerts for upcoming deadlines, task updates, or mentions, ensuring you're always aware of important developments. Never miss a deadline and maintain a proactive approach to task management.",
      image: "",
    },
  ];
  return (
    <Box pl={"60px"} pt={"50px"} bg="#f5edf7">
      <Box>
        <Text fontSize={"24px"} fontWeight={"600"}>
          Introduction to PlanTinker
        </Text>
        <Text fontSize={"12px"} fontWeight={"500"}>
          PlanTinker 101
        </Text>
      </Box>

      {/* Display */}
      <Flex marginTop={"30px"} justifyContent={"space-between"} height={"auto"}>
        <Box flexBasis={"35%"} textAlign={"justify"}>
          {features.map((feature, index) => {
            return (
              <Box
                key={index}
                width={"100%"}
                mt={"10px"}
                p={"10px"}
                cursor={"pointer"}
                sx={{
                  backgroundColor: activeIndex === feature.id && "#FFF",
                  borderRadius: activeIndex === feature.id && "12",
                  borderLeft: activeIndex === feature.id && "6px solid #473B59",
                  borderLeftRadius: activeIndex === feature.id && "none",
                  boxShadow:
                    activeIndex === feature.id &&
                    "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => toggleActiveIndex(feature.id)}
              >
                <Text fontSize={"14px"} fontWeight={"600"}>
                  {feature.title}
                </Text>
                <Text fontSize={"14px"} fontWeight={"500"}>
                  {feature.description}
                </Text>
              </Box>
            );
          })}
        </Box>
        <Box flexBasis={"60%"} position={"relative"}>
          <motion.div
            initial={{ x: "100vw" }}
            animate={imageSlide ? { x: "0" } : { x: "100vw" }}
            transition={{ duration: 1, type: "tween", stiffness: 120 }}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
            }}
          >
            <Image
              src={teamCollaborationImage}
              height={"100%"}
              width={"100%"}
              objectFit={"cover"}
              //   height={"600px"}
              //   width={"90%"}
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default FeatureDisplay;
