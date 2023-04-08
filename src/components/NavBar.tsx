import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" marginX="0.5rem">
      <Image src={logo} boxSize={"60px"}></Image>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;