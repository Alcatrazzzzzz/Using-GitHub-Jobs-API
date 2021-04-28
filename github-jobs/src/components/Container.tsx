import { Flex } from "@chakra-ui/layout";
import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex flexDir="column" w="70%" mx="auto">
      {children}
    </Flex>
  );
};
