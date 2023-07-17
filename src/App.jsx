import React, { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TextInput from "./Components/TextInput";
import KeywordsModal from "./Components/KeywordsModal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const extractKeywords = async (text) => {
    setIsLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
          text,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const json = await response.json();
      const extractedKeywords = json.choices[0].text.trim();
      console.log(extractedKeywords);
      setKeywords(extractedKeywords);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        bg="green.900"
        color="whiteAlpha.500"
        height="100vh"
        paddingTop={130}
      >
        <Container maxW="3xl" centerContent>
          <Header />
          <TextInput extractKeywords={extractKeywords} />
          <Footer />
        </Container>
        <KeywordsModal
          keywords={keywords}
          isLoading={isLoading}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </Box>
    </>
  );
};

export default App;
