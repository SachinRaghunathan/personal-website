import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://wa.me/12146322120"
      aria-label="LinkedIn"
      icon={<FaWhatsapp fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://linkedin.com/in/sachinraghunathan"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.facebook.com/SachRaghunathan"
      aria-label="Email"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="mailto:sachinofgoa@gmail.com"
      aria-label="Email"
      icon={<MdEmail fontSize="20px" />}
    />
  </ButtonGroup>
);
