import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Container } from "./Container";
import { SwitchDarkMod } from "./SwitchDarkMode";
import { IoMdSunny } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import Link from "next/link";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <Flex w="100%" h="140px" backgroundColor={!isLight ? "black" : "green"}>
      <Container>
        <Flex alignItems="center" mt="30px">
          <Link href="/">
            <a>
              <Flex alignItems="center" color="white">
                <Icon
                  as={AiFillGithub}
                  w="48px"
                  h="48px"
                  color={!isLight ? "white" : "black"}
                />
                <Text
                  color={!isLight ? "white" : "black"}
                  ml="5px"
                  fontSize="30px"
                >
                  devJobs
                </Text>
              </Flex>
            </a>
          </Link>
          <Flex mt="12px" alignItems="center" ml="auto">
            <Icon
              mr="10px"
              as={IoMdSunny}
              color={!isLight ? "green" : "white"}
            />
            <SwitchDarkMod />
            <Icon
              ml="10px"
              as={BsMoon}
              color={!isLight ? "rgb(255, 255, 255)" : "#000000"}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
