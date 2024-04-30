import { Box, Button, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { FaBrain } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" alignItems="stretch">
      <Box width="250px" bg="gray.800" color="white" p={4}>
        <VStack align="stretch" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            LLM Operations
          </Text>
          <Button leftIcon={<Icon as={FaBrain} />} justifyContent="start" variant="ghost">
            Generate Text
          </Button>
          <Button leftIcon={<Icon as={FaBrain} />} justifyContent="start" variant="ghost">
            Summarize Content
          </Button>
          <Button leftIcon={<Icon as={FaBrain} />} justifyContent="start" variant="ghost">
            Translate Text
          </Button>
          <Button leftIcon={<Icon as={FaBrain} />} justifyContent="start" variant="ghost">
            Code Generation
          </Button>
        </VStack>
      </Box>
      <Box flex="1" p={4}>
        <Text fontSize="xl">Welcome to the LLM Operations Panel</Text>
        <Text mt={2}>Select an operation from the sidebar to get started.</Text>
      </Box>
    </Flex>
  );
};

export default Index;
