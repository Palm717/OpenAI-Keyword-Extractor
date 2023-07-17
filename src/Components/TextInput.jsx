import { useState } from "react";
import { Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty.",
        description: "Enter some text for extraction.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
      return;
    }
    extractKeywords(text);
  };

  return (
    <>
      <Textarea
        bg="whiteAlpha.400"
        padding={4}
        marginTop={6}
        height={200}
        color="silver"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="gray.700"
        color="green.500"
        marginTop={4}
        width="50%"
        _hover={{ bg: "blackAlpha.700", color: "teal.200" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
