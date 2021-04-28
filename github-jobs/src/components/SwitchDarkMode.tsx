import { Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface SwitchDarkModProps {}

const MotionFlex = motion(Flex);

export const SwitchDarkMod: React.FC<SwitchDarkModProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";
  return (
    <MotionFlex
      padding="3px 3px"
      w="41px"
      h="21px"
      borderRadius="20px"
      alignItems="center"
      cursor="pointer"
      backgroundColor="rgb(255, 255, 255)"
      onClick={() => {
        toggleColorMode();
      }}
      justifyContent={!isLight ? "flex-start" : "flex-end"}
    >
      <MotionFlex
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        layout
        h="15px"
        w="15px"
        borderRadius="50px"
        animate={
          !isLight
            ? { backgroundColor: "rgb(67, 226, 169)" }
            : { backgroundColor: "#000000" }
        }
      />
    </MotionFlex>
  );
};
