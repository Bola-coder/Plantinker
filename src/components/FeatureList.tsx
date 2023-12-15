import { Box, Text } from "@chakra-ui/react"; // Import necessary components from Chakra UI

const FeatureList = () => {
  // Define an array of features with their respective icons and descriptions
  const features = [
    { icon: "📅", description: "Task Scheduling" },
    { icon: "📝", description: "Task Creation" },
    { icon: "🔍", description: "Task Search" },
    { icon: "📝", description: "Task Creation" },

    // Add more features as needed
  ];

  const totalFeatures = features.length;
  const radius = 120; // Adjust the radius of the ring
  const angleIncrement = (2 * Math.PI) / totalFeatures;

  return (
    <Box position="relative" width="300px" height="300px">
      {features.map((feature, index) => {
        const angle = angleIncrement * index;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <Box
            key={index}
            position="absolute"
            left={`calc(50% + ${x}px)`}
            top={`calc(50% + ${y}px)`}
            textAlign="center"
          >
            <Box
              width="60px"
              height="60px"
              borderRadius="50%"
              bg="#F7FAFC"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="2xl">{feature.icon}</Text>
            </Box>
            <Text mt={2} fontWeight="bold">
              {feature.description}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default FeatureList;
