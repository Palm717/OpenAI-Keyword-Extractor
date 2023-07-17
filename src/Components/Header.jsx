import { Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Heading color="whiteAlpha.800" marginBottom="1rem" borderBottom="1px">
        AI Key Word Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        enter paragraph below
      </Text>
    </>
  );
};

export default Header;
