import { Button, Icon, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface MyButtonProps {
  text?: string;
  margin?: string;
  onClick?: () => void;
  btnRef?: any;
  withIcon?: IconType;
  variant?: "dark" | "light" | "green" | "darkMode";
  w?: string | number | string[];
}

export const MyButton: React.FC<MyButtonProps> = ({
  text = "",
  margin = "0px",
  onClick = () => {},
  variant = "dark",
  btnRef = null,
  w = "max-content",
  withIcon,
}) => {
  const [isLargerThanSmall] = useMediaQuery("(min-width: 40em)");

  const styles = {
    textColor: "",
    backgroundColor: "",
    borderColor: "",
    hoverTextColor: "",
    hoverBackgroundColor: "",
    hoverBorderColor: "",
  };

  switch (variant) {
    case "dark":
      styles.backgroundColor = "black";
      styles.textColor = "white";
      styles.borderColor = "black";
      styles.hoverBackgroundColor = "transparent";
      styles.hoverBorderColor = "black";
      styles.hoverTextColor = "black";
      break;
    case "light":
      styles.backgroundColor = "white";
      styles.textColor = "black";
      styles.borderColor = "black";
      styles.hoverBackgroundColor = "black";
      styles.hoverBorderColor = "black";
      styles.hoverTextColor = "white";
      break;
    case "green":
      styles.backgroundColor = "green";
      styles.textColor = "black";
      styles.borderColor = "green";
      styles.hoverBackgroundColor = "transparent";
      styles.hoverBorderColor = "white";
      styles.hoverTextColor = "white";
      break;
    case "darkMode":
      styles.backgroundColor = "transparent";
      styles.textColor = "white";
      styles.borderColor = "white";
      styles.hoverBackgroundColor = "transparent";
      styles.hoverBorderColor = "green";
      styles.hoverTextColor = "green";
  }
  return (
    <Button
      ref={btnRef}
      onClick={() => onClick()}
      h="32px"
      w={w}
      padding={withIcon ? (isLargerThanSmall ? "0 21px" : "0px") : "0 21px"}
      margin={margin}
      backgroundColor={styles.backgroundColor}
      borderColor={styles.borderColor}
      borderWidth="2px"
      color={styles.textColor}
      _hover={{
        backgroundColor: styles.hoverBackgroundColor,
        borderWidth: "2px",
        borderColor: styles.hoverBorderColor,
        color: styles.hoverTextColor,
      }}
    >
      {withIcon ? isLargerThanSmall ? text : <Icon as={withIcon} /> : text}
    </Button>
  );
};
