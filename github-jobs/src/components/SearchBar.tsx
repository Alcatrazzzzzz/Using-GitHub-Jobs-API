import {
  Checkbox,
  Flex,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { MyButton } from "./MyButton";

interface SearchBarProps {
  isFullTimeFilter: boolean;
  setFilters: (filters: {
    textFilter: string;
    locationFilter: string;
    isFullTimeFilter: boolean;
  }) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setFilters }) => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 52em)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [textFilter, setTextFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isFullTimeFilter, setisFullTimeFilter] = useState(false);

  return (
    <>
      <Flex
        padding="0 10px"
        borderRadius="4px"
        bgColor="white"
        w="100%"
        h="47px"
        alignItems="center"
        fontSize="16px"
        mb="40px"
      >
        <Flex w={["auto", "auto%", "33.3%", "33.3%"]} alignItems="center">
          {isLargerThanMedium ? (
            <Icon as={HiOutlineSearch} color="black" w="24px" h="24px" />
          ) : null}
          <Input
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setFilters({
                  isFullTimeFilter,
                  locationFilter,
                  textFilter,
                });
              }
            }}
            onChange={(e) => setTextFilter(e.target.value)}
            ml="12px"
            variant="unstyled"
            _placeholder={{ color: "#C7C7C7" }}
            placeholder="Filter by text"
          />
        </Flex>
        {isLargerThanMedium ? (
          <Flex w="33.3%" alignItems="center">
            <Icon as={TiLocation} color="black" w="24px" h="24px" />
            <Input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setFilters({
                    isFullTimeFilter,
                    locationFilter,
                    textFilter,
                  });
                }
              }}
              onChange={(e) => setLocationFilter(e.target.value)}
              value={locationFilter}
              ml="12px"
              variant="unstyled"
              _placeholder={{ color: "#C7C7C7" }}
              placeholder="Filter by location"
            />
          </Flex>
        ) : (
          <>
            <Icon
              as={FaFilter}
              ml="auto"
              mr="10px"
              w="24px"
              h="24px"
              color="black"
              cursor="pointer"
              _hover={{ color: "#43e2a9", transition: "0.2s" }}
              onClick={onOpen}
            />
            <Modal onClose={onClose} size={"6xl"} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent w="70%" backgroundColor="white">
                <ModalCloseButton zIndex={2} color="green" />
                <ModalBody padding="15px 0px" display="flex" flexDir="column">
                  <Flex p="0 15px" mt="10px" w="100%" alignItems="center">
                    <Icon as={TiLocation} color="black" w="24px" h="24px" />
                    <Input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setFilters({
                            isFullTimeFilter,
                            locationFilter,
                            textFilter,
                          });
                        }
                      }}
                      onChange={(e: any) => setLocationFilter(e.target.value)}
                      value={locationFilter}
                      ml="12px"
                      variant="unstyled"
                      _placeholder={{ color: "#C7C7C7" }}
                      placeholder="Filter by location"
                    />
                  </Flex>
                  <Flex
                    my="10px"
                    w="100%"
                    h="1px"
                    backgroundColor="rgb(157, 157, 157, 0.6)"
                  />
                  <Flex alignItems="center" p="0 15px">
                    <Checkbox
                      onChange={(e) => setisFullTimeFilter(e.target.checked)} // rewrite !!
                      isChecked={isFullTimeFilter}
                      iconColor="green"
                      colorScheme="black"
                      borderRadius="4px"
                      borderColor="green"
                      size="lg"
                      backgroundColor="black"
                    />
                    <Text textAlign="center" ml="12px">
                      Full time only
                    </Text>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
        <Flex w={["auto", "auto", "33.3%", "33.3%"]} alignItems="center">
          {isLargerThanMedium ? (
            <>
              <Checkbox
                onChange={(e) => setisFullTimeFilter(e.target.checked)}
                isChecked={isFullTimeFilter}
                iconColor="green"
                colorScheme="black"
                borderRadius="4px"
                borderColor="green"
                size="lg"
                backgroundColor="black"
              />
              <Text textAlign="center" ml="12px">
                Full time only
              </Text>
            </>
          ) : null}
          <MyButton
            onClick={() => {
              setFilters({ isFullTimeFilter, locationFilter, textFilter });
            }}
            withIcon={HiOutlineSearch}
            text="Search"
            margin="0px 0px 0px auto"
          />
        </Flex>
      </Flex>
    </>
  );
};
