import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";
import { MyButton } from "../../components/MyButton";
import { MotionFlex, loadingAnimate } from "../../utils/animation";
import moment from "moment";

interface PositionProps {}

const Position: React.FC<PositionProps> = ({}) => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 52em)");

  const queryQlient = useQueryClient();
  const router = useRouter();

  const { data, isFetching, error } = useQuery("posts", () => {
    return router.isReady ? axios(`/api/position/${router.query.id}`) : null;
  });

  useEffect(() => {
    queryQlient.fetchQuery("posts");
  }, [router.query]);

  if (isFetching) {
    return <LoadingState />;
  }
  if (error) {
    return <Flex>Error</Flex>;
  }

  if (!data || data === null) {
    return <LoadingState />;
  }
  return (
    <>
      <Layout>
        <Flex
          borderRadius="4px"
          overflow="hidden"
          w="100%"
          bgColor="white"
          mt="-26.5px"
          h={["fit-content", "fit-content", "130px", "130px"]}
          flexDir={["column", "column", "row", "row"]}
        >
          <Avatar
            size="2xl"
            h="100%"
            w={["100%", "100%", "20%", "20%"]}
            borderRadius={0}
            name={data?.data.company}
            src={data?.data.company_logo}
          />
          <Flex
            flexDir={["column", "column", "row", "row"]}
            alignItems="center"
            padding="24px"
            w="100%"
          >
            <Flex
              alignItems={["center", "center", "flex-start", "flex-start"]}
              flexDir="column"
            >
              <Text textAlign="center" fontSize="34px">
                {data?.data.company}
              </Text>
              <Text
                mb={["20px", "20px", "0px", "0px"]}
                fontSize="20px"
                color="#9D9D9D"
              >
                {data?.data.company}
              </Text>
            </Flex>
            <Link
              href={
                data.data.company_url === null ? "/" : data.data.company_url
              }
            >
              <a style={{ marginLeft: isLargerThanMedium ? "auto" : "0px" }}>
                <MyButton text="Company Site" />
              </a>
            </Link>
          </Flex>
        </Flex>
        <Flex
          borderRadius="4px"
          flexDir="column"
          padding="24px 24px 60px 24px"
          mt="38px"
          bgColor="white"
        >
          <Flex
            flexDir={["column", "column", "row", "row"]}
            alignItems="center"
            w="100%"
          >
            <Flex flexDir="column">
              <Flex
                alignItems={"center"}
                mt="10px"
                fontSize={["14px", "14px", "18px", "18px"]}
              >
                <Text color="#9D9D9D" mr="10px">
                  {moment(Date.parse(data?.data.created_at)).fromNow()}
                </Text>
                <Flex
                  mt="2px"
                  backgroundColor="#9D9D9D"
                  borderRadius={100}
                  w="8px"
                  h="8px"
                />
                <Text ml="10px" color="#9D9D9D">
                  {data?.data.type}
                </Text>
              </Flex>
              <Text
                w={["100%", "100%", "70%", "70%"]}
                fontWeight="600"
                fontSize={["20px", "20px", "24px", "24px"]}
                mt="10px"
              >
                {data?.data.title}
              </Text>
              <Text
                mt="5px"
                fontSize={["14px", "14px", "18px", "18px"]}
                color="green"
                mb={["20px", "20px", "0px", "0px"]}
              >
                {data?.data.location}
              </Text>
            </Flex>
            <Link href="/">
              <a
                style={{
                  marginLeft: isLargerThanMedium ? "auto" : "0px",
                  width: isLargerThanMedium ? "auto" : "100%",
                }}
              >
                <MyButton
                  w={["100%", "100%", "max-content", "max-content"]}
                  variant="light"
                  text="Apply Now"
                />
              </a>
            </Link>
          </Flex>
          <Flex
            color="#9D9D9D"
            mt="24px"
            fontSize={["16px", "16px", "20px", "20px"]}
            flexDir="column"
            dangerouslySetInnerHTML={{ __html: data?.data.description }}
          />
        </Flex>
      </Layout>
      <Flex padding="24px" mt="50px" w="100%" backgroundColor="black">
        <Container>
          <Flex
            flexDir={["column", "column", "row", "row"]}
            alignItems="center"
          >
            <Flex>
              <Flex flexDir="column">
                <Text
                  color="white"
                  w={["100%", "100%", "70%", "70%"]}
                  fontWeight="600"
                  fontSize="24px"
                  mt="10px"
                  lineHeight="32px"
                  textAlign={["center", "center", "left", "left"]}
                >
                  {data?.data.title}
                </Text>
                <Text
                  textAlign={["center", "center", "left", "left"]}
                  mt="5px"
                  fontSize="18px"
                  color="green"
                  mb={["20px", "20px", "0px", "0px"]}
                >
                  {data?.data.company}
                </Text>
              </Flex>
            </Flex>
            <Link href="/">
              <a
                style={{
                  marginLeft: isLargerThanMedium ? "auto" : "0px",
                  width: isLargerThanMedium ? "auto" : "100%",
                }}
              >
                <MyButton
                  w={["100%", "100%", "max-content", "max-content"]}
                  variant="green"
                  text="Apply Now"
                />
              </a>
            </Link>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

const LoadingState = () => {
  return (
    <>
      <Layout>
        <Flex
          overflow="hidden"
          mt="-26.5px"
          borderRadius="4px"
          w="100%"
          h="130px"
          bgColor="white"
        >
          <MotionFlex w="25%" h="100%" animate={loadingAnimate} />
          <Flex alignItems="center" padding="24px" w="100%">
            <Flex flexDir="column" w="100%">
              <MotionFlex
                w="20%"
                h="26px"
                borderRadius={4}
                animate={loadingAnimate}
              />
              <MotionFlex
                mt="10px"
                w="10%"
                h="16px"
                borderRadius={4}
                animate={loadingAnimate}
              />
            </Flex>
            <MotionFlex
              ml="auto"
              w="15%"
              h="32px"
              borderRadius={4}
              animate={loadingAnimate}
            />
          </Flex>
        </Flex>
        <Flex
          borderRadius="4px"
          flexDir="column"
          padding="24px 24px 60px 24px"
          mt="38px"
          bgColor="white"
        >
          <Flex alignItems="center" w="100%">
            <Flex w="100%" flexDir="column">
              <MotionFlex
                w="15%"
                h="16px"
                borderRadius={4}
                animate={loadingAnimate}
              />
              <MotionFlex
                mt="20px"
                w="30%"
                h="24px"
                borderRadius={4}
                animate={loadingAnimate}
              />
              <MotionFlex
                mt="20px"
                w="10%"
                h="16px"
                borderRadius={4}
                animate={loadingAnimate}
              />
            </Flex>
            <MotionFlex
              ml="auto"
              w="10%"
              h="32px"
              borderRadius={4}
              animate={loadingAnimate}
            />
          </Flex>
          <MotionFlex
            mt="32px"
            w="100%"
            h="400px"
            borderRadius={4}
            animate={loadingAnimate}
          />
        </Flex>
      </Layout>
      <Flex padding="24px" mt="50px" w="100%" backgroundColor="black">
        <Container>
          <Flex w="100%" alignItems="center">
            <Flex w="100%">
              <Flex w="100%" flexDir="column">
                <MotionFlex
                  mt="20px"
                  w="30%"
                  h="24px"
                  borderRadius={4}
                  animate={loadingAnimate}
                />
                <MotionFlex
                  mt="20px"
                  w="10%"
                  h="16px"
                  borderRadius={4}
                  animate={loadingAnimate}
                />
              </Flex>
            </Flex>
            <MotionFlex
              ml="auto"
              w="10%"
              h="32px"
              borderRadius={4}
              animate={loadingAnimate}
            />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Position;
