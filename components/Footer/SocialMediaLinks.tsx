import {
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useClipboard,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialMediaLinks = (props: ButtonGroupProps) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard(
    "sachinofgoa@gmail.com"
  );
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        target="_blank"
        as="a"
        href="https://wa.me/12146322120"
        aria-label="LinkedIn"
        icon={<FaWhatsapp fontSize="20px" />}
      />
      <IconButton
        target="_blank"
        as="a"
        href="https://linkedin.com/in/sachinraghunathan"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton
        target="_blank"
        as="a"
        href="https://www.facebook.com/SachRaghunathan"
        aria-label="Email"
        icon={<FaFacebook fontSize="20px" />}
      />
      <Popover trigger="hover" placement="top">
        <PopoverTrigger>
          <IconButton
            as="a"
            aria-label="Email"
            icon={<MdEmail fontSize="20px" />}
            onClick={onCopy}
          />
        </PopoverTrigger>
        <PopoverContent width={"fit-content"}>
          <PopoverHeader
            display={"flex"}
            justifyContent={"center"}
            fontWeight={"bold"}
          >
            {hasCopied ? "Email copied!" : "Click to copy email"}
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  );
};
