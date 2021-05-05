import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionFlex = motion(Flex);
export const loadingAnimate = {
  backgroundColor: [
    "rgb(201, 201, 201)",
    "rgb(230, 230, 230)",
    "rgb(201, 201, 201)",
  ],
  transition: {
    repeat: "Infinity",
    duration: 2.5,
  },
};
