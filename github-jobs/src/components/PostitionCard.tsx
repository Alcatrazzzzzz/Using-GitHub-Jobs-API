import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { motion } from "framer-motion";

interface PostitionCardProps {
  loading?: boolean;
  data?: {
    companyLogoSrc: string;
    companyName: string;
    positonTitle: string;
    positionLocation: string;
    positionTime: string;
    positionPosted: string;
  };
}

const MotionFlex = motion(Flex);
const loadingAnimate = {
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
export const PostitionCard: React.FC<PostitionCardProps> = ({
  loading = true,
  data = {
    companyLogoSrc: "nodata",
    companyName: "nodata",
    positonTitle: "nodata",
    positionLocation: "nodata",
    positionTime: "nodata",
    positionPosted: "nodata",
  },
}) => {
  return (
    <Flex
      boxShadow="2px 4px 8px -2px rgba(0, 0, 0, 0.25)"
      borderRadius="4px"
      flexDir="column"
    >
      <Flex
        padding="0px 16px"
        backgroundColor="white"
        w="100%"
        h="170px"
        flexDir="column"
        borderRadius="4px 4px 0px 0px "
      >
        {loading ? (
          <>
            <MotionFlex
              borderRadius={4}
              mt="-18px"
              h="36px"
              w="36px"
              animate={loadingAnimate}
            />
            <MotionFlex
              borderRadius={4}
              mt="15px"
              h="14px"
              w="50%"
              animate={loadingAnimate}
            />
            <MotionFlex
              borderRadius={4}
              h="32px"
              w="100%"
              mt="15px"
              animate={loadingAnimate}
            />
            <MotionFlex
              borderRadius={4}
              h="16px"
              w="30%"
              mt="15px"
              animate={loadingAnimate}
            />
          </>
        ) : (
          <>
            <Avatar
              mt="-18px"
              h="36px"
              w="36px"
              borderRadius={4}
              name={data.companyName}
              src={data.companyLogoSrc}
            />
            <Flex alignItems="center" mt="10px" fontSize="14px">
              <Text color="#9D9D9D" mr="10px">
                {data.positionPosted}
              </Text>
              <Flex
                mt="2px"
                backgroundColor="#9D9D9D"
                borderRadius={100}
                w="6px"
                h="6px"
              />
              <Text ml="10px" color="#9D9D9D">
                {data.positionTime}
              </Text>
            </Flex>
            <Text fontWeight="600" fontSize="16px" mt="10px">
              {data.positonTitle}
            </Text>
            <Text mt="5px" fontSize="14px" color="#9D9D9D">
              {data.companyName}
            </Text>
          </>
        )}
      </Flex>
      <MotionFlex
        padding="0 20px"
        alignItems="center"
        borderRadius="0 0 4px 4px"
        backgroundColor="black"
        h="30px"
        animate={loading ? loadingAnimate : null}
      >
        {loading ? null : (
          <Text fontSize="14px" color="green">
            {data.positionLocation}
          </Text>
        )}
      </MotionFlex>
    </Flex>
  );
};
