import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Divider,
  Heading,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      paddingTop="4"
      paddingBottom="6"
      px={{ base: "4", md: "8" }}
    >
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Stack direction="row" spacing="4" align="left">
          <Avatar
            name="Sachin Raghunathan"
            src="/images/profile.jpg"
            size="md"
          />
          <Heading>Sachin Raghunathan</Heading>
        </Stack>
        <IconButton
          aria-label="Dark"
          icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Stack>
      <Divider paddingTop={4} />
    </Box>
  );
};

export default Header;
