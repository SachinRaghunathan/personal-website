import { Text, TextProps } from "@chakra-ui/react";

export const Copyright = (props: TextProps) => (
  <Text fontFamily={"monospace"} fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Sachin Raghunathan
  </Text>
);
