import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

interface FeatureProps {
  title: string;
  icon?: React.ReactElement;
  text?: string;
}

export const Feature = (props: FeatureProps) => {
  const { title, text } = props;
  return (
    <Box
      as="button"
      bg="backgroundColor"
      w="360px"
      h="175px"
      rounded={{ md: "lg" }}
      borderWidth={1}
      transition="all 0.2s"
      textUnderlineOffset="2"
      _hover={{
        fontSize: "lg",
      }}
    >
      <Stack paddingLeft={8}>
        <Text fontWeight="extrabold" fontFamily="monospace" align="left">
          {title}
        </Text>
        <Text fontFamily="monospace" align="left" fontSize="md">
          {text}
        </Text>
      </Stack>
    </Box>
  );
};
