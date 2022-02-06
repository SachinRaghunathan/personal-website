import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

export const Feature = (props: FeatureProps) => {
  const { title, text, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
      align="center"
      w="80%"
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg" align="center">
          {title}
        </Text>
        <Text align="center">{text}</Text>
      </Stack>
    </Stack>
  );
};
