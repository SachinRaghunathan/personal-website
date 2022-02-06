import { Box, Divider, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    paddingBottom="4"
    paddingTop="12"
    px={{ base: "4", md: "8" }}
  >
    <Divider />
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);
