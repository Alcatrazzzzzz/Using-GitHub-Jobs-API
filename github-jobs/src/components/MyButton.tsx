import { Button } from "@chakra-ui/react";
import React from "react";

interface MyButtonProps {
  text?: string;
  margin?: string;
  onClick?: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({
  text = "",
  margin = "0px",
  onClick = () => {},
}) => {
  return (
    <Button
      onClick={() => onClick()}
      h="32px"
      padding="0 21px"
      margin={margin}
      backgroundColor="black"
      borderWidth="2px"
      color="white"
      _hover={{
        backgroundColor: "white",
        borderWidth: "2px",
        borderColor: "#000000",
        color: "#000000",
      }}
    >
      {text}
    </Button>
  );
};
