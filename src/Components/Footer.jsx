import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box marginTop={50}>
        <Flex justifyContent="center" alignItems="center">
          <Text> Powered by Open AI</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
